import { auth } from "../auth";


import React, { Suspense } from "react";
import JobPosts from "./dashboard/joblist";

export default async function page1() {
  const session = await auth();
  const API_ENDPOINT = "https://akil-backend.onrender.com/opportunities/search";
  const response = await fetch(API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${session ? session?.accessToken : ""}`,
    },
  });
  let data = await response.json();
  data = data.data;
  console.log(data, "data");
  console.log(session, "fron this page");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <JobPosts token={session ? session?.user?.accessToken : ""} name = {session?.user?.name} data={data} />
      </div>
    </Suspense>
  );
}
