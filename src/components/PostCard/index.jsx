import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/slices/postsSlice";

const PostCard = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <Card
      style={{ position: "relative" }}
      className={`mb-2  ${theme == "light" ? "bg-white" : "bg-info"}`}
    >
      <div style={{ position: "absolute", top: "2px", right: "2px" }}>
        <Button
          className="btn btn-danger"
          onClick={() => handleDelete(post.id)}
        >
          Delete
        </Button>
      </div>

      {post.imgURL && <Card.Img variant="top" src={post.imgURL} />}

      <Card.Body>
        <Card.Text>{post.title}</Card.Text>
        <Card.Text>{post.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
