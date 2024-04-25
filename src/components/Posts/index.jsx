import React, { useContext } from "react";
import PostCard from "../PostCard";

const Posts = ({ posts }) => {
  return posts.map((item) => <PostCard post={item} key={item.id} />);
};

export default Posts;
