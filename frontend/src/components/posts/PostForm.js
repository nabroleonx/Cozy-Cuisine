import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Editor from "./Editor";

export default function PostForm(props) {
  const [title, setTitle] = useState(props.editMode ? props.post.title : null);
  const [tag, setTag] = useState(props.editMode ? props.post.tag : null);
  const [body, setBody] = useState(null);
  const { postBody } = useSelector((state) => state.posts);
  const [coverImage, setCoverImage] = useState("");

  const { user } = useSelector((state) => state.auth);
  const author = user.data.name;

  useEffect(() => {
    setBody(postBody);
  }, [postBody]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const instructorId = user.data._id;

    props.handleFormSubmit({
      instructorId,
      coverImage,
      title,
      body,
      tag,
      author,
    });
  };

  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className=" px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="space-y-8 divide-y divide-gray-200">
            <form onSubmit={handleFormSubmit}>
              <div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                  <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                    <label
                      htmlFor="coverImage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cover Image
                    </label>
                    <span className="text-xs font-light">
                      drop a link for your post cover image
                    </span>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="coverImage"
                        id="coverImage"
                        autoComplete="coverImage"
                        placeholder="e.g. the url to your cover image"
                        className="flex-1 border px-3 py-2 focus:outline-none placeholder:text-xs placeholder:font-light focus:ring-sky-500 focus:border-sky-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                        onChange={(e) => setCoverImage(e.target.value)}
                        defaultValue={
                          props.editMode ? props.post.coverImage : null
                        }
                      />
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <span className="text-xs font-light">
                      Be specific and imagine you’re asking a question to
                      another person
                    </span>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        placeholder="e.g. The best apple pie"
                        className="flex-1 border px-3 py-2 focus:outline-none placeholder:text-xs placeholder:font-light focus:ring-sky-500 focus:border-sky-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                        onChange={(e) => setTitle(e.target.value)}
                        defaultValue={props.editMode ? props.post.title : null}
                      />
                    </div>
                  </div>

                  <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Body
                    </label>
                    <span className="text-xs font-light">
                      Include all the information someone would need to answer
                      your question
                    </span>
                    <Editor editMode={props.editMode} post={props.post} />
                  </div>

                  <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tags
                    </label>
                    <span className="text-xs font-light">
                      Add up to 5 tags to describe what your question is about
                    </span>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="tags"
                        id="tags"
                        autoComplete="tags"
                        placeholder="e.g. ( Java - Mechanics - Drawing )"
                        className="flex-1 border px-3 py-2 focus:outline-none placeholder:text-xs placeholder:font-light focus:ring-sky-500 focus:border-sky-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                        onChange={(e) => setTag(e.target.value)}
                        defaultValue={props.editMode ? props.post.tag : null}
                      />
                    </div>
                  </div>
                  <div className="col-span-2 col-start-2">
                    <button
                      className="px-3 py-2 text-white bg-cyan-600 hover:bg-cyan-800 rounded-md cursor-pointer"
                      type="submit"
                    >
                      {props.buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
