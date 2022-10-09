import { Fragment, useState } from "react";
import { Disclosure, Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
              <div className="flex justify-between h-16 bg-sky-900 text-white md:bg-transparent md:text-sky-500">
                <div className="flex ">
                  <div className="flex items-center md:hidden">
                    {/* Mobile menu button */}
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
                  <div className="flex-shrink-0 hidden md:flex">
                    <Link
                      to="/login"
                      type="button"
                      className="items-center px-3 py-1 mr-1 border border-sky-700 shadow-sm text-sm font-light rounded-md text-sky-800  hover:bg-sky-50"
                    >
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/register"
                      type="button"
                      className="items-center px-4 py-2 border border-transparent shadow-sm text-sm font-light rounded-md text-white bg-sky-700 hover:bg-sky-800"
                    >
                      <span>Sign up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-4 pb-3 border-t border-sky-700">
                <div className="mt-3 px-2 space-y-1 sm:px-3">
                  <div className="divide-y divide-sky-400 border-b border-t border-sky-400">
                    <Link
                      to="/login"
                      type="button"
                      className="block w-full px-3 py-2 text-base text-left font-normal text-sky-400 hover:text-white hover:bg-sky-700"
                    >
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/register"
                      type="button"
                      className="block w-full px-3 py-2 text-base text-left font-medium text-sky-400 hover:text-white hover:bg-sky-700"
                    >
                      <span>Sign up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
