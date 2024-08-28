"use client";
import React from "react";
import { useActionState } from "react";
import { addN, authenticate } from "/app/lib/action";
import Link from "next/link";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Session } from "next-auth";
import { useRouter } from "next/router";
const Loginform = ({session}:{session:Session}) => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  
  return (
    <div className="flex items-center justify-center   h-[40vh]">
      <div className="flex-col items-center justify-center  h-24  w-[70vh] ">
        <form action={formAction}>
          <div className="flex justify-center my-4 ">
            <h1 className=" font-bold text-4xl text-gray-800 ">
              Welcome back,
            </h1>
          </div>
          <div className="flex  space-x-4 justify-between my-10">
            <div className="w-32 h-1 bg-gray-100"></div>
            <div className="w-32 h-1 bg-gray-100"></div>
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
              className="w-full border-gray-200  border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14 px-2.5"
              placeholder="Enter passsword"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900 flex items-center justify-center ${
              isPending ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-disabled={isPending}
            disabled={isPending}
          >
            {isPending ? (
              <ArrowPathIcon className="h-5 w-5 animate-spin mr-2 text-white" />
            ) : (
              "Login"
            )}
          </button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          <div className="my-8 flex items-center justify-center space-x-2">
            <p>Don't have an account?</p>
            <Link href={"./signup"} className="text-indigo-800 font-semibold">
              signup
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Loginform;
