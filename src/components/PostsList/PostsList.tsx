import { useContext } from "react";
import { Post } from "../../data/posts-mock";
import './PostsList.css'
import PostItem from '../PostItem/PostItem'
import { PostsContext } from "../../contexts/PostsContext";
import AddPostDialog from "../AddPostDialog/AddPostDialog";

const PostsList = () => {
    const { feed } = useContext(PostsContext);
    return <div className="posts-wrapper">
        <h3>Modifier les dates ou échanger l'odre des posts</h3>
        <AddPostDialog />
        <div className="posts-items-wrapper">
            {feed.map((post: Post, index: number) => <PostItem key={index} idx={index} post={post} />)}
        </div>
    </div>
}

export default PostsList;