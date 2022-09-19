import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye } from "react-icons/hi";
// import {
//   useCreateUserWithEmailAndPassword,
//   useUpdateProfile,
// } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [a, setA] = useState(false);
  //   const [createUserWithEmailAndPassword, user, loading, error] =
  //     useCreateUserWithEmailAndPassword(auth);
  //   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email, data.password);
    // await createUserWithEmailAndPassword(data.email, data.password);
    // await updateProfile({ displayName: data.name });
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
      {/* <h1 className="text-3xl text-center font-semibold">Register</h1> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="lg:w-1/3 md:w-1/2 sm:w-11/12 mx-auto  rounded-2xl border border-slate-500  mt-4 p-3"
      >
        <h1 className="text-3xl text-center my-4">Register </h1>
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
                message: "please add letter, number, special character",
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
          value="Register"
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
