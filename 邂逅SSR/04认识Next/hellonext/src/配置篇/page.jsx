"use client";
import React, { memo } from "react";

const Page = memo(() => {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);

  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);

  return <div className="text-3xl font-bold underline">Home Page</div>;
});

Page.displayName = "page";

export default Page;
