import { auth, signOut } from "/auth";

import React, { Suspense } from "react";
import JobPosts from "./joblist";
export default async function page1() {
  const session = await auth();
  const API_ENDPOINT = "https://akil-backend.onrender.com/opportunities/search";
  const response = await fetch(API_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${session?.accessToken ? session?.accessToken : ""}`,
    },
  });
  let data = await response.json();
  data = data.data;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <JobPosts token={session?.accessToken} data={data} />
      </div>
    </Suspense>
  );
}
