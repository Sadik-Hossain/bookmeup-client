import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-teal-500">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/">
            <div className="flex justify-center items-center">
              <FcHome style={{ fontSize: "2rem" }} />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                bookmeup
              </span>
            </div>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex ">
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Featured
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                // aria-label="About us"
                // title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full bg-white hover:bg-gray-800 hover:text-white border-2 border-gray-100 focus:outline-none ">
                  Login
                </button>
              </Link>
            </li>
          </ul>
          <div className=" lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <TiThMenu />
            </button>
            {/* 
            //* ========================== mobile button ===================================== 
            */}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-[99]">
                <div className="p-3 bg-white border rounded ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <FcHome className="text-2xl" />

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                          BookMeUp
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <RiCloseLine className="text-2xl font-semibold" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Hotels
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Featured
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <button
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                            onClick={() => setIsMenuOpen(false)}
                          >
                            About us
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-green-400  focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
