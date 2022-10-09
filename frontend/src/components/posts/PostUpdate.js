import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostForm from "./PostForm";
import { updatePost, redirect } from "../../redux/actions/posts";

export default function PostUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { post } = useSelector((state) => state.posts);

  // const post = posts.filter((post) => post._id === id);

  const handleFormSubmit = ({ instructorId, title, body, tag }) => {
    dispatch(updatePost({ id, instructorId, title, body, tag }));
  };

  const { isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!isLoading) {
      navigate(`/post/${post._id}`);
      dispatch(redirect());
    }
  }, [isLoading]);

  return (
    <div>
      <PostForm
        editMode={true}
        handleFormSubmit={handleFormSubmit}
        post={post}
        buttonLabel="Update Article"
      />
      ;
    </div>
  );
}
