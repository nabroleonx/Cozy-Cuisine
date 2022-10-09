import { useDispatch, useSelector } from "react-redux";

import PostForm from "./PostForm";
import { createPost } from "../../redux/actions/posts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "../../redux/actions/posts";

export default function PostCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = ({
    instructorId,
    coverImage,
    title,
    body,
    tag,
    author,
  }) => {
    dispatch(
      createPost({ instructorId, coverImage, title, body, tag, author })
    );
  };

  const { isLoading, post } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!isLoading) {
      navigate(`/post/${post._id}`);
      dispatch(redirect());
    }
  }, [isLoading]);

  return (
    <div>
      <PostForm
        editMode={false}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Post Article"
      />
    </div>
  );
}
