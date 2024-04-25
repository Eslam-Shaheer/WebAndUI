import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/slices/postsSlice";
import Posts from "../Posts";
import AddPostForm from "./AddPostForm";

const Timeline = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="p-2">
      <AddPostForm />
      <Posts posts={posts.data} />
    </div>
  );
};

export default Timeline;
