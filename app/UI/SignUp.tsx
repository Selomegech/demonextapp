import React from "react";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-[15vh]">
      <div className="flex-col items-center justify-center w-[30%] h-24  ">
        <form>
          <div className="flex justify-center my-10 ">
            <h1 className=" font-bold text-4xl text-gray-800 ">
              Sign Up Today!
            </h1>{" "}
          </div>
          <div className="bg-white hover:bg-gray-100 text-gray-400 font-medium py-2 px-4 border border-gray-300 rounded-md flex  justify-center items-center gap-4">
            <FcGoogle className="w-6 h-10" />
            <div className="text-indigo-700 font-semibold ">
              Sign Up with Google
            </div>
          </div>

          <div className="flex  space-x-4 justify-between my-10">
            <div className="w-32 h-0.5 bg-gray-200 my-3"></div>
            <div className="text-gray-500">Or Signup with Email</div>
            <div className="w-32 h-0.5 bg-gray-200 my-3"></div>
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5 "
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5 "
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5 "
              placeholder="Enter password"
              required
            />
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordconfirm"
              name="passwordconfirm"
              className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5 "
              placeholder="Enter password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900"
          >
            Continue
          </button>
          <div className="my-6 flex items-center justify-center space-x-2">
            <p className="text-gray-600">Already have an account?</p>
            <p className="text-indigo-800 font-semibold">Login</p>
          </div>
          <div >
            <p className="text-gray-500">By clicking 'Continue' , you acknowledge that you have read and accepted our <span className="text-indigo-800">Terms of Service</span> and <span className="text-indigo-800">Privacy Policy</span> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
