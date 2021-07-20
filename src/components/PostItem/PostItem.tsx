import { FC, useContext } from "react"
import { Post } from "../../data/posts-mock"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiDraftLine } from 'react-icons/ri'
import './PostItem.css'
import DatePicker from "./DatePicker/DatePicker"
import TimePicker from "./TimePicker/TimePicker"
import moment from "moment"
import { PostsContext } from '../../contexts/PostsContext'
interface Props {
    post: Post,
    idx: number
}

const PostItem: FC<Props> = ({ post, idx }) => {
    const { posts, setPosts } = useContext(PostsContext)

    const onDateChange = (newDate: Date | null) => {
        var temp = posts
        temp[idx].date = moment(newDate).format('DD/MM/yyyy')
        setPosts([...temp])
    }

    const onTimeChange = (newTime: Date | null) => {
        var temp = posts
        const [_, heure, minute] = moment(newTime).format('DD/MM/yyyy:HH:MM').split(':')
        temp[idx].time = heure + ":" + minute
        setPosts([...temp])

    }

    return <div className="post-wrapper">
        <div className="left-container">
            <img src={post.image} alt="" className="image" />
            <div className="state-wrapper">
                <div className="state-icon"> {post.state === 'Programmé' ? <AiOutlineClockCircle /> : <RiDraftLine />} </div>
                <div className="state-text">{post.state}</div>
            </div>
        </div>

        <div className="right-container">
            <div> <TimePicker hasChanged={post.changed} idx={idx} onTimeChange={onTimeChange} time={post.time} /> </div>
            <div> <DatePicker hasChanged={post.changed} idx={idx} onDateChange={onDateChange} date={post.date} /> </div>
        </div>
    </div>
}

export default PostItem