import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "./../../utils/axios";

function Generate() {
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(null);

    // axiosInstance
    //   .get(`generate?prompt=${prompt}`, {
    //     headers: {
    //       "Content-type": "application/json",
    //       "x-access-token": `${token}`,
    //     },
    //   })
    //   .then((data) => setData(`${data.generations[0].text.slice(0, -1)}`));

    fetch(`http://localhost:3000/generate?prompt=${prompt}`, {
      "Content-type": "application/json",
      "x-access-token": `${token}`,
    })
      .then((res) => res.json())
      .then((data) => setData(`${data.generations[0].text.slice(0, -1)}`));
  };

  return (
    <div className="mt-12 lg:mx-60 px-10 sm:24 md:32 lg:px-40 space-y-4">
      <header>
        <div className="flex justify-center">
          <img
            className="h-40 w-30"
            src="https://freesvg.org/img/1580893542chef-hat-freesvg.org.png"
            alt=""
          />
        </div>

        <h1 className="text-center mb-4 font-mono text-3xl text-gray-700/70">
          Generate a recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Give me an ingredient
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              placeholder="Give me some ingredient and I will tell you what you can cook with it."
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-sm"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="px-3 py-1 mt-2 rounded-md border border-gray-200 bg-gray-100 hover:bg-gray-200 cursor-pointer"
          />
        </form>
        <div className="rounded-md mt-4 bg-blue-50 p-4">
          <div className="flex">
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">{!data ? "Meals" : data}</p>
              <p className="mt-3 text-sm md:mt-0 md:ml-6">
                <a
                  href="https://t.me/teachershack_bot"
                  className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                >
                  Telegram
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Generate;
