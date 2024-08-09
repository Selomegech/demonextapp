"use client";
import { signOut } from "@/auth";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        you are looged in
        <button onClick={() => signOut()} className="px-4 py-2 bg-slate-900">
          Sign out
        </button>
      </div>
    </>
  );
};

export default page;
