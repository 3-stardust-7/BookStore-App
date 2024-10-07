import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex h-screen items-center justify-center overflow-x-hidden">
      <div
        id="my_modal_4"
        className="
        bg-blue-100
        dark:bg-slate-800 
        p-5
        
        shadow-lg"
      >
        <div
          className="
        modal-box 
        dark:text-white
        dark:bg-slate-900 
        min-w-[500px]
        min-h-[400px]"
        >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl">Sign Up</h3>

            {/*Name*/}

            <div className="mt-7 space-y-3">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="
            w-80
            px-3
            py-1
            border
            outline-none
            rounded-md
            dark:text-black
            "
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>

            {/*Email*/}

            <div className="mt-7 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="
            w-80
            px-3
            py-1
            border
            outline-none
            rounded-md
            dark:text-black
            "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>

            {/*Password*/}

            <div className="mt-5 space-y-3">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Password"
                className="
            w-80
            px-3
            py-1
            border
            rounded-md
            outline-none
            dark:text-black
            "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>
            {/* Button */}
            <div
              className="
            flex
            justify-around
            mt-10
            "
            >
              <button
                className="
            border-[1px] 
            border-blue-300 
            text-blue-500 
            hover:bg-blue-300 
            hover:text-black 
            px-3 
            rounded-xl
            duration-200"
              >
                Sign up
              </button>
              <p>Have Account?</p>
              <span>
                <button
                  className="
                underline 
                text-blue-500 
                dark:text-blue-300 
                cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
