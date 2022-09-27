import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Avatar = () => {
  const { loading, error, user, dispatch } = useContext(AuthContext);
  // console.log(user?.username);
  const [open, setOpen] = useState(false);
  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div class="flex justify-end">
        <div>
          <div class=" relative ">
            <button
              onClick={() => setOpen(!open)}
              class="
            dropdown-toggle
            bg-black
            rounded-[50%]
            text-white
            font-medium
            text-xs
            uppercase
         border
         p-2

            hover:border-dashed hover:border-1 
            active:scale-95
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap
          "
              type="button"
              id="dropdownMenuButton1h"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p>{user?.username.slice(0, 2)}</p>

              {/* <img
                src="/public/img1.jpg"
                className="w-12 h-12 rounded-full"
                alt=""
              /> */}
            </button>
            {open && (
              <ul
                class="
            dropdown-menu
            min-w-max
            absolute
            
            right-0
            bg-white
            text-base
            z-50
          
            py-2
            list-none
         
           
            
            rounded-lg
            shadow-lg
            mt-1
            block
            m-0
            
            border-none
          "
                aria-labelledby="dropdownMenuButton1h"
              >
                <h6
                  class="
              text-black
              font-semibold
              text-sm
              py-2
              px-4
              block
              w-full
              whitespace-nowrap
              bg-transparent
            "
                >
                  {user?.username}
                </h6>
                <hr />
                <li>
                  <Link
                    to="/dashboard"
                    class="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                    href="#"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    class="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                    href="#"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={HandleLogout}
                    class="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                text-start
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                    href="#"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
