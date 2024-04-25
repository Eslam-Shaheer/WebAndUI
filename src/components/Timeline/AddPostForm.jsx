import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/slices/postsSlice";
import Upload from "./Upload";
import notify from "../../helpers/notify";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({});

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const [imgURL, setImgURL] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { ...newPost, imgURL };
    if (!newPost.title) {
      notify("Title is required", "error");
      return;
    }
    if (!newPost.description) {
      notify("Description is required", "error");
      return;
    }
    dispatch(addNewPost(body));
    setNewPost({ title: "", description: "" });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>What`s in your mind</Form.Label>
        <Form.Control
          name="title"
          rows={3}
          onChange={handleChange}
          className="mb-2"
          value={newPost.title}
        />
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          onChange={handleChange}
          value={newPost.description}
        />

        <Upload setImgURL={setImgURL} />
      </Form.Group>
      <Button type="submit">Post</Button>
    </Form>
  );
};

export default AddPostForm;
