import React, { useState, useEffect } from 'react';
import './App.css';
import PostsList from './components/PostsList/PostsList';
import { Post, posts as mock } from './data/posts-mock';
import { PostsContext } from './contexts/PostsContext'
import Feed from './components/Feed/Feed';

function App() {
  const [posts, setPosts] = useState<Post[]>(mock);
  const [feed, setFeed] = useState<Post[]>(mock);

  useEffect(() => {
    var tmp = posts;
    tmp.forEach((post, i) => {
      tmp[i] = { ...tmp[i], date: feed[i].date, time: feed[i].time }
    })
    setFeed(tmp)
  }, [posts])

  return (
    <PostsContext.Provider value={{ posts, setPosts, feed, setFeed }}>
      <div className="App">
        <PostsList />
        <Feed />
      </div>
    </PostsContext.Provider>
  );
}

export default App;
