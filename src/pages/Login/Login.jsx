import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { HiOutlineEye } from "react-icons/hi";
import { useForm } from "react-hook-form";
// import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [a, setA] = useState(false);
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });
  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   console.log(data.email, data.password);
  //   // await signInWithEmailAndPassword(data.email, data.password);
  // };
  const onSubmit = async (data) => {
    console.log(data.email, data.password);

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="lg:w-1/3 md:w-1/2 sm:w-11/12 mx-auto  rounded-2xl border border-slate-500  mt-4 p-3"
      >
        <h1 className="text-3xl text-center my-4">Login </h1>

        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="enter Email"
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
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              //   message: "please add letter + number",
              // },
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
        {error && (
          <h1 className="text-red-500 font-semibold text-center">
            {error.message}
          </h1>
        )}
        <input
          type="submit"
          className="w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          value={loading ? "loading..." : "Login"}
        />
        {/* {error && <p className="text-red-500">Error: {error.message}</p>} */}
        <p
          className="font-semibold text-center cursor-pointer hover:text-green-500 my-3"
          onClick={() => navigate("/register")}
        >
          New here? Register
        </p>
      </form>
    </div>
  );
};

export default Login;
