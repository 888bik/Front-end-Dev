import React, { memo } from "react";
import meta from "../mdx/page.mdx";

const Demo = memo(() => {
  console.log(meta);
  return <div style={{ color: "red" }}>Demo Page</div>;
});
Demo.displayName = "demo";

export default Demo;
