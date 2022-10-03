import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, username, email } = user;

  const navigate = useNavigate();
  const showUserData = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="border border-orange-500 bg-red-200 py-4 space-y-4">
      <h1 className="font-bold">
        Name : <span className="italic font-bold">{name}</span>
      </h1>
      <p className="text-sm font-bold">Username : {username}</p>
      <p className="text-sm font-bold">Email : {email}</p>
      <button
        onClick={showUserData}
        className="bg-violet-600 text-white py-1 px-6 rounded-lg"
      >
        Show Details
      </button>
    </div>
  );
};

export default User;
