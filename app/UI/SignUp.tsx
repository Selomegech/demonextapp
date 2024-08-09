"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Verify from "./Verify";
import Link from "next/link";
import LoginForm from "@/app/UI/LoginForm";
import { useSearchParams } from "next/navigation";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        "https://akil-backend.onrender.com/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        
        localStorage.setItem("signupEmail", formData.email);
        const returnUrl = searchParams.get("returnUrl") || "./verify-email";
        window.location.href = returnUrl;
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[15vh]">
      <div className="flex-col items-center justify-center w-[30%] h-24  ">
      
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center my-10 ">
              <h1 className=" font-bold text-4xl text-gray-800 ">
                Sign Up Today!
              </h1>{" "}
            </div>
            <div className="bg-white hover:bg-gray-100 text-gray-400 font-medium py-2 px-4 border border-gray-300 rounded-md flex justify-center items-center gap-4">
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
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.password}
                onChange={handleInputChange}
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
                id="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5 "
                placeholder="Enter password"
                required
              />
            </div>
            {/* ... (the rest of your form code) ... */}
            <button
              type="submit"
              className="w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900"
            >
              Continue
            </button>
          </form>

          <div className="my-8 flex items-center justify-center space-x-2">
            <p>Already have an account?</p>
            <Link href={"./"} className="text-indigo-800 font-semibold">
              Login
            </Link> </div>

            <div>
              <p className=" text-gray-500"> By clicking 'Continue' , you acknowledge that you have read and accepted out <span className="text-indigo-700" >Terms of Services </span > and <span className="text-indigo-700"> Privacy Policy</span> .</p>
            </div>
        
        
      </div>
    </div>
  );
};

export default SignUp;
