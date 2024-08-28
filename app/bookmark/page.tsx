import { auth } from "/auth";
import React from "react";
import Link from "next/link";
import Structure from "./structure";

interface Event {
  eventID: string;
  title: string;
  opType: string;
  orgName: string;
  datePosted: string;
  dateBookmarked: string;
  logoUrl: string;
  location: string;
}

export default async function Page1() {
  const session = await auth();
  const API_ENDPOINT = "https://akil-backend.onrender.com/bookmarks";
  const response = await fetch(API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  let data = await response.json();

  data = data.data;

  return (
    <div className="flex-col p-5 my-10">
      <div className="flex">
        <button className="flex px-10">
          <Link
            href="/"
            className="rounded-full bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 hover:bg-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </button>
      </div>

      {data && data.length > 0 ? (
        data.map((job: Event) => (
          <div key={job.eventID} className="flex-col py-5">
            <Structure data={job} />
          </div>
        ))
      ) : (
        <div className="p-20"> No bookmarks yet</div>
      )}
    </div>
  );
}