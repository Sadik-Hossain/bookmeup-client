import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { HiOutlineEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Register = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [a, setA] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const notify = () => toast("Wow so easy!");
  const onSubmit = async (data) => {
    console.log(data.name, data.email, data.password);

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      setLoading(false);
      // toast(res.data);
      toast.success(res.data, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error.response);
      setError(error);
    }
  };

  //   if (error) {
  //     return (
  //       <div>
  //         <p>Error: {error.message}</p>
  //       </div>
  //     );
  //   }
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div className="p-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="lg:w-1/3 md:w-1/2 sm:w-11/12 mx-auto  rounded-2xl border border-slate-500  mt-4 p-3"
      >
        <h1 className="text-3xl text-center my-4">Register </h1>
        {error && (
          <p className="text-sm text-center text-red-500">
            {error.response.data}
          </p>
        )}
        <input
          className="w-full bg-white rounded border mb-4 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="enter name"
          {...register("name", {
            required: {
              value: true,
              message: "name is Required",
            },
          })}
        />
        {errors.name?.type === "required" && (
          <span className=" text-red-500">{errors.name.message}</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className=" text-red-500">{errors.email.message}</span>
        )}
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          placeholder="enter email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />
        {errors.email?.type === "required" && (
          <span className=" text-red-500">{errors.email.message}</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className=" text-red-500">{errors.email.message}</span>
        )}
        {/* 
        //* password field
        */}
        <div className="w-full bg-white flex items-center border rounded  my-4 focus-within:border-indigo-500 justify-between focus-within:ring-2 focus-within:ring-indigo-200 transition-colors duration-200 ease-in-out">
          <input
            className="text-base px-4 py-3 flex-1 focus:outline-none"
            type={a ? "text" : "password"}
            placeholder="enter password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/,
                message:
                  "please add uppercase,lowercase, number, special character",
              },
            })}
          />

          <HiOutlineEye onClick={() => setA(!a)} className="flex-end mx-2" />
        </div>
        {errors.password?.type === "required" && (
          <span className=" text-red-500">{errors.password.message}</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className=" text-red-500">{errors.password.message}</span>
        )}
        {errors.password?.type === "pattern" && (
          <span className=" text-red-500">{errors.password.message}</span>
        )}
        <input
          type="submit"
          className="w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          value={loading ? "loading..." : "Register"}
        />
        <p
          className="font-semibold text-center cursor-pointer hover:text-green-500 my-3"
          onClick={() => navigate("/login")}
        >
          Already registered? login
        </p>
      </form>
    </div>
  );
};

export default Register;
