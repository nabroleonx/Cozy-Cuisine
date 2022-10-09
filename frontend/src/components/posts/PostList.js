import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { getPosts } from "../../redux/actions/posts";

export default function PostList() {
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
    <div className="relative bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-light text-gray-900 sm:text-4xl">
            Explore recipes by fellow foodies
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A quick reminder: Don&apos;t eat to much 😂
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
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
    //     {posts.length !== 0 &&
    //       posts.map((post) => (
    //         <Link
    //           to={`/post/${post._id}`}
    //           aria-label="View Item"
    //           className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
    //         >
    //           <div className="flex flex-col h-full">
    //             <img
    //               src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //               className="object-cover w-full h-48"
    //               alt=""
    //             />
    //             <div className="flex-grow border border-t-0 rounded-b">
    //                 <div className="pl-3 pr-3 pt-2 flex justify-between">
    //                   <span className="inline-flex items-center px-2 py-px border border-transparent text-xs font-light rounded text-blue-800 bg-sky-100 hover:bg-sky-200">
    //                     {post.tag}
    //                   </span>
    //                   <span className="font-light text-xs ">
    //                     by {user.data.name}
    //                   </span>
    //                 </div>
    //               <div className="p-3">
    //                 <h6 className="mb-2 font-semibold leading-5">
    //                   {post.title}
    //                 </h6>
    //                 <p className="text-sm text-gray-900">{post.body}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //   </div>
    //   <div className="text-center">
    //     <a
    //       href="/"
    //       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //     >
    //       Learn more
    //     </a>
    //   </div>
    // </div>
  );
}
