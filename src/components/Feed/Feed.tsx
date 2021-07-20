import { FC, useContext, useState, useEffect } from "react"
import { Post } from "../../data/posts-mock"
import './Feed.css'

import { GrInstagram } from 'react-icons/gr'
import FeedItem from "../FeedItem/FeedItem"
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
} from "react-grid-drag";
import { PostsContext } from "../../contexts/PostsContext"


const Feed = () => {
    const { setPosts, posts } = useContext(PostsContext)

    function onChange(sourceId: any, sourceIndex: any, targetIndex: any, targetId: any) {

        var nextState: Post[] = swap(posts, sourceIndex, targetIndex)
        nextState.forEach(post => post.changed = false)
        nextState[targetIndex].changed = true
        nextState[sourceIndex].changed = true
        setPosts([...nextState])
    }

    return <div className="feed-wrapper">
        <div className="header">
            <GrInstagram color="#8A2098" size="3vh" />
            <h5>@Rfbkd</h5>

        </div>
        <GridContextProvider onChange={onChange}>
            <GridDropZone
                className="dropzone"
                id="items"
                boxesPerRow={3}
                rowHeight={130}
            >
                {posts.map((item: Post, idx: number) => <GridItem key={item.id}>
                    <FeedItem feedItem={item} />
                </GridItem>)}
            </GridDropZone>
        </GridContextProvider>
    </div>
}

export default Feed