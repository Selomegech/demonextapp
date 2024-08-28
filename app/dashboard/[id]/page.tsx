"use client";
import path from "path";
import fs from "fs";

import React, { useEffect, useState } from "react";
import jobData from "./jobs.json";
import { FaMapMarkerAlt, FaPlusCircle } from "react-icons/fa";
import { FaFireFlameCurved, FaRegCalendarCheck } from "react-icons/fa6";
import { TiLocationOutline } from "react-icons/ti";
import { LuCalendarClock } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

interface JobPostProp {
  params: { id?: string };
}

interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
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
  postedOn: string;
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
  averageRating: number;
  totalReviews: number;
}



const JobPost = ({ params }: JobPostProp) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<JobPosting>();

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const response = await fetch(`https://akil-backend.onrender.com/opportunities/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job');
        }
        const result = await response.json();
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchDataFromAPI();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No job found</div>;
  }
  console.log(data);
  
  return (
    <div className="h-full flex flex-row gap-32 p-16 font-Poppins">
      <div className="h-3/4 w-[60%] font-Poppins text-left">
        <div className="py-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">Description</h1>
          <p>{data.description}</p>
        </div>
        <div className="py-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">Responsibilities</h1>
          <ul>
            <div className="py-6">
              {data.responsibilities.split('\n').map((responsibility, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-[34px] h-[34px] px-2.5 gap-2.5 rounded-full border-t border-0">
                    <GoDotFill className="text-xl" color="#90ee90" />
                  </div>
                  <li>{responsibility}</li>
                </div>
              ))}
            </div>
            </ul>
        </div>
        <div className="py-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">Ideal Candidate</h1>
          <ul className="py-6">
            <li className="flex py-4">
              <div className="w-[34px] h-[34px] px-2.5 gap-2.5 rounded-full border-t border-0">
                <GoDotFill className="text-l" />
              </div>
                
              {data.idealCandidate}
            </li>
            
          </ul>
        </div>
        <div className="py-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">When and Where</h1>
          <div className="flex gap-4">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <FaMapMarkerAlt className="text-xl" color="#26A4FF" />
            </div>
            <p>{data.whenAndWhere}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">About</h1>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <FaPlusCircle className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Posted On</p>
              <p>
                <b>{data.postedOn}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <FaFireFlameCurved className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Deadline</p>
              <p>
                <b>{data.deadline}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <TiLocationOutline className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Location</p>
              <p>
                <b>{data.location.join(", ")}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <LuCalendarClock className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Start Date</p>
              <p>
                <b>{data.startDate}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <FaRegCalendarCheck className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>End Date</p>
              <p>
                <b>{data.endDate}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 h-[1px] bg-gray-300 my-10"></div>
        <div className="my-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">Categories</h1>
          <div className="flex flex-row space-x-4 my-8">
            {data.categories.map((category, index) => (
              <div key={index} className="bg-green-100 h-10 border-0 border-green-600 text-green-600 rounded-full px-3 py-1 flex justify-center items-center text-sm">
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="w-80 h-[1px] bg-gray-300 my-10"></div>
        <div className="my-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">Required Skills</h1>
          <div className="flex flex-row space-x-4 my-8">
            {data.requiredSkills.map((skill, index) => (
              <div key={index} className="bg-gray-100 h-10 border-1 text-blue-600 px-3 py-1 flex justify-center items-center text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;