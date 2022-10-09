import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_body } from "../../redux/actions/posts";

export default function Editor(props) {
  const [markdown, setMarkdown] = useState(props.editMode && props.post.body);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_body(markdown));
  }, [markdown]);

  return (
    <MarkdownEditor
      value={markdown}
      onChange={(editor, data, value) => setMarkdown(value)}
    />
  );
}
