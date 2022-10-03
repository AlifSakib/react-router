import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="space-x-8 font-bold my-4">
      <NavLink
        className={(isActive) => (isActive ? "bg-slate-500" : undefined)}
        to="/"
      ></NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Header;
