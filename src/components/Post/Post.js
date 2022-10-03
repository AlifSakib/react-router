import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body, userId } = post;
  const navigate = useNavigate();
  const showAuthor = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <div className="border border-blue-500 bg-blue-200 py-4 mt-5 mx-10">
      <h1 className="font-bold italic">Title : {title}</h1>
      <p>{body}</p>
      <button
        onClick={showAuthor}
        className="bg-sky-600 text-white py-1 px-6 rounded-lg mt-5"
      >
        Show Author
      </button>
    </div>
  );
};

export default Post;
