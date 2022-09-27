import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loading, error, user, dispatch } = useContext(AuthContext);
  // console.log(user);

  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="bg-green-400">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/">
            <div className="flex justify-center items-center">
              <FcHome className="text-4xl" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                bookmeup
              </span>
            </div>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex ">
            <li>
              <Link
                to="/hotels"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 "
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 "
              >
                Featured
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 "
              >
                About
              </Link>
            </li>
            <li>
              {user ? (
                <Avatar />
              ) : (
                // <button
                //   onClick={HandleLogout}
                //   className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full bg-white hover:bg-indigo-500 hover:text-white border-2 border-gray-100 focus:outline-none "
                // >
                //   Logout
                // </button>
                <Link to="/login">
                  <button className=" px-4 py-1  transition ease-in duration-200 uppercase rounded-full bg-white hover:bg-indigo-500 hover:text-white border-2 border-gray-100 focus:outline-none ">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
          <div className=" lg:hidden ">
            <div className="flex">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <TiThMenu />
              </button>
              {user ? (
                <Avatar />
              ) : (
                <Link
                  to="/login"
                  // className=" px-3 py-1 ml-5  transition ease-in duration-200 uppercase rounded-xl bg-white hover:bg-indigo-500 hover:text-white border-2 border-gray-100 focus:outline-none "
                >
                  <BiLogIn className="inline-block ml-5 text-3xl " />
                </Link>
              )}
            </div>
            {/* 
            //* ========================== mobile button ===================================== 
            */}
            {isMenuOpen && (
              <>
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
                            to="/hotels"
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
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">
                            <button
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                              onClick={() => setIsMenuOpen(false)}
                            >
                              About
                            </button>
                          </Link>
                        </li>
                        {/* <li>
                        {user ? (
                          <div className="flex justify-center ">
                            <Avatar />
                          </div>
                        ) : (
                          // <button
                          //   onClick={HandleLogout}
                          //   className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-green-400  focus:shadow-outline focus:outline-none"
                          //   aria-label="logout"
                          //   title="logout"
                          // >
                          //   Logout
                          // </button>
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-green-400  focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Login
                          </Link>
                        )}
                      </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
