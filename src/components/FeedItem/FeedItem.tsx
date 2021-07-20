import { FC, useState } from "react"
import { Post } from "../../data/posts-mock"
import './FeedItem.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiDraftLine } from 'react-icons/ri'
interface Props {
    feedItem: Post
}

const FeedItem: FC<Props> = ({ feedItem }) => {
    const [isDragging, setIsDragging] = useState(false);
    const onDrag = () => setIsDragging(!isDragging)
    return <div onDragStart={onDrag} onDragEnd={onDrag} className={isDragging ? "image-wrapper selected" : "image-wrapper"}>
        <div onDragStart={() => false} style={{ background: `center / cover no-repeat url(${feedItem.image}) `, }} className="image-item" />
        <div className="state-icon-wrapper">
            <div className="state-icon">
                {feedItem.state === 'Programmé' ? <AiOutlineClockCircle /> : <RiDraftLine />}
            </div>
        </div>
    </div>
}
export default FeedItem