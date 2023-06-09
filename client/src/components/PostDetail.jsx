import React from "react";
import { usePosts } from "../context/PostsContext";
import { useParams } from "react-router-dom";
import "./postDetail.css";

const PostDetail = () => {
  const { posts } = usePosts();
  const { id } = useParams();

  // Buscar el post correspondiente utilizando el ID
  const post = posts.find((post) => post.id === id);

  return (
    <div className="container-detail">
      <div className="detail">
       <div className="marco-post">
            {post && (
              <>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.date}</p>
              </>
            )}
       </div>
      </div>
    </div>
  );
};

export default PostDetail;
