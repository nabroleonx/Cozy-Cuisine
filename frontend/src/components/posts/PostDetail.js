import { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/posts";
import { useParams } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { MoreActions } from "./MoreActions";
import PostDelete from "./PostDelete";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostDetail() {
  const { id } = useParams();
  const { post, postBody } = useSelector((state) => state.posts);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ id }));
  }, []);

  return (
    <>
      {post !== null && (
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                {/* <span className="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">
                  Introducing
                </span> */}
                <div className="flex items-center justify-between">
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {post.title}
                  </span>

                  <MoreActions post={post} setModal={setModal} />
                </div>
              </h1>
            </div>
            <div
              className="mt-6 prose prose-sky prose-lg mx-auto"
              data-color-mode="light"
            >
              <MarkdownPreview source={post.body} />
            </div>
          </div>
        </div>
      )}
      {modal && <PostDelete modal={modal} setModal={setModal} />}
    </>
  );
}
