import React, { memo } from "react";
// Server Action
async function create() {
  "use server";
  return "hello";
}

const Page = memo(() => {
  create();
  return <div className="text-3xl font-bold underline">Page</div>;
});

Page.displayName = "page";

export default Page;
