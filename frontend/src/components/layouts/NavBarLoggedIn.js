import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Disclosure, Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Settings", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarLoggedIn() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && (
        <Disclosure as="nav" className="bg-gray-50">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
                <div className="flex justify-between h-16 bg-sky-900 text-white md:bg-transparent md:text-sky-500">
                  <div className="flex ">
                    <div className="flex items-center md:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <Link
                      to="/"
                      className="flex-shrink-0 px-4 md:px-0 flex font-light text-lg items-center"
                    >
                      Cozy Cuisine
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                      <Link
                        to="/post/create"
                        className="flex items-center justify-center px-2 py-1 border border-transparent text-sm font-light rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700"
                      >
                        New Post
                      </Link>

                      <Link
                        to="/posts/"
                        className="px-3 py-px font-light rounded-md hover:bg-sky-100 mr-1"
                      >
                        Posts
                      </Link>
                      <Link to="/generate">
                        <button className="px-3 py-px font-light rounded-md hover:bg-sky-100 mr-1">
                          Generate
                        </button>
                      </Link>
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-sky-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://www.svgrepo.com/show/105032/avatar.svg"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-sky-100" : "",
                                      "block px-4 py-2 text-sm text-sky-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active ? "bg-sky-100" : "",
                                    "block px-4 py-2 text-sm text-sky-700"
                                  )}
                                >
                                  Logout
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="pt-4 pb-3 border-t border-sky-700">
                  <div className="flex items-center px-5 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://www.svgrepo.com/show/105032/avatar.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-sky-800">
                        {user.data.name}
                      </div>
                      <div className="text-sm font-normal text-sky-400">
                        {user.data.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1 sm:px-3">
                    <div className="divide-y divide-sky-400 border-b border-t border-sky-400">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 text-base font-normal text-sky-400 hover:text-white hover:bg-sky-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </>
  );
}
