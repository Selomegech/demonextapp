"use client";
import React, { useState, useEffect, use } from "react";
import Structure from "./Structure";
import Link from "next/link";
import { signOut } from "/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

export default function JobPosts({
  token,
  name,
  data,
}: {
  token: string;
  name: string;
  data: JobPosting[];
}) {
  if (data.length === 0 || !data) {
    return <div>No jobs available.</div>;
  }

  return (
    <div className="">
      <div className="py-5 w-3/4 mx-auto flex justify-between ">
        <div className=" py-6 ">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            Opportunities
          </h1>
          <p>showing {data.length} results</p>
        </div>

        <div className="flex gap-4  py-8">
          {token == "" ? (
            <button>
              <Link
                href="/login"
                className="rounded-full bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 hover:bg-gray-200 transition-all duration-300"
              >
                Signin
              </Link>
            </button>
          ) : (
            <div className="flex gap-4 ">
              <div className="py-1">
                {" "}
                <div className="rounded-full bg-white text-indigo-500 border-0 border-indigo-500 px-2 py-2 hover:bg-gray-200 transition-all duration-300">
                  <FontAwesomeIcon icon={faUser} /> {name}
                </div>
              </div>
              <button
                onClick={async () => {
                  await signOut();
                }}
                className="rounded-full bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 hover:bg-gray-200 transition-all duration-300"
              >
                Signout
              </button>
            </div>
          )}

          {token == "" ? (
            ""
          ) : (
            <button>
              <Link
                href="/bookmark"
                className="rounded-full bg-white text-indigo-500 border-2 border-indigo-500 px-4 py-2 hover:bg-gray-200 transition-all duration-300"
              >
                Bookmarks
              </Link>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {data.map((job) => (
          <Structure
            title={job.title}
            description={job.description}
            numOfJobs={data.length}
            categoryone={job.categories[0]}
            categorytwo={job.categories[1]}
            isBookmarked={job.isBookmarked}
            id={job.id}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}
