import { IProps } from "@/app/template";
import React, { memo } from "react";

const Page = memo((props: IProps) => {
  console.log(props.params.slug);
  return <div>Page</div>;
});

Page.displayName = "page";

export default Page;
