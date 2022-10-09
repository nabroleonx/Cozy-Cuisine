import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Fill your gut with</span>{" "}
                <span className="block text-sky-600 xl:inline">
                  Cozy Cuisine
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                You can find recipes by other people, you can also post your
                recipes or even get some ideas of what you can cook based on the
                ingredients that you have
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/posts"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Recipes
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/generate"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-100 px-8 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Generate
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-scale-down sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://img.freepik.com/free-vector/fast-food-menu-colorful-icons-set_1284-14584.jpg?w=740&t=st=1665309157~exp=1665309757~hmac=c260765c831977f578551acf55f96b31e1e01b230828292a63d101674f848273"
          alt=""
        />
      </div>
    </div>
  );
}
