import { IProps } from "@/路由篇/template";
import React, { memo } from "react";

const CategorySlug = memo((props: IProps) => {
  console.log(props.params!.slug);
  return <div>CategorySlug</div>;
});

CategorySlug.displayName = "CategorySlug";
export default CategorySlug;
