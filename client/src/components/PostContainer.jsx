import React from "react";
import Posts from "./Posts";
import './postsContainer.css'
import { usePosts } from "../context/PostsContext";

const PostContainer = () => {
  const { posts } = usePosts();

  return (
      <div className="container-posts">
        {posts.map((post) => (
          <Posts key={post.title} post={post}/>
        ))}
      </div>
  );
};

export default PostContainer;
