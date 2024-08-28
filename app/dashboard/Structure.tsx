import React from "react";
import BookMark from "./bookmark";
import Link from "next/link";

interface StructurProps {
  title: string;
  description: string;
  categoryone: string;
  categorytwo: string;
  numOfJobs: number;
  isBookmarked: boolean;
  token: string;
  id: string;
}

const Structure = ({
  title,
  description,
  numOfJobs,
  categoryone,
  categorytwo,
  isBookmarked,
  token,
  id,
}: StructurProps) => {
  return (
    <div className="w-3/4 bg-white shadow-lg rounded-lg mx-auto flex flex-col text-sm py-10 relative">
     {token == "" ? "" : <BookMark isBookmarked={isBookmarked}  id={id} token={token}/>} 
      <Link key={id} href={`/dashboard/${id}`}>
      <div className="flex">
        <div className=" flex ">
          <div className="w-20% px-8 text-gray-600 ">
            <p className="mt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUa5M05HGFJDvdcxyPXFRDELelBkONTI1aUA&s"
                alt="myimage"
                width={400}
                height={300}
              />
            </p>
          </div>

          <div className="w-80% mt-10 px-8 flex flex-col  space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="flex flex-row space-x-4">
              <div className="bg-green-100 h-12 border-green-600 border-2  text-green-600 rounded-full  px-6 py-3 flex justify-center items-center">
                In person
              </div>
              <div className="bg-white h-12 border-yellow-600 border-2 text-yellow-600 rounded-full px-6 py-3 flex justify-center items-center">
                {categoryone}
              </div>
              <div className="bg-white h-12 border-purple-600 border-2  text-purple-600 rounded-full px-6 py-3 flex justify-center items-center">
                {categorytwo}
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default Structure;
