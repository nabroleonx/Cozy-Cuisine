import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { getPosts } from "../../redux/actions/posts";

export default function FeaturedPosts() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts({}));
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div
      id="featured"
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl tracking-tight font-light text-gray-900 sm:text-4xl">
            Featrued Posts
          </h2>
          <p className="mt-3 max-w-2xl text-md text-gray-500 sm:mt-4">
            These posts are recommended by our top instructors and active users
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.length !== 0 &&
            posts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-scale-down"
                    src={post.coverImage}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600">
                      <a href={post.tag} className="hover:underline">
                        {post.tag}
                      </a>
                    </p>
                    <Link to={`/post/${post._id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <div className="mt-3" data-color-mode="light">
                        <MarkdownPreview source={post.body.substring(0, 100)} />
                      </div>
                      {/* <p className="mt-3 text-base text-gray-500">
                        {post.body.substring(10, 100)}
                      </p> */}
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">{post.instructorId}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.instructorId} className="hover:underline">
                          {post.author}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.createdAt}>
                          {formatDate(post.createdAt)}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>
                          {Math.ceil(post.body.split(" ").length / 250 / 60)}{" "}
                          min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
