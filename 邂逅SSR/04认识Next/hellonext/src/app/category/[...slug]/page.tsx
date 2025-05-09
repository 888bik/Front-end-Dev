import { IProps } from "@/app/template";
import React, { memo } from "react";

const CategorySlug = memo((props: IProps) => {
  console.log(props.params!.slug);
  return <div>CategorySlug</div>;
});

CategorySlug.displayName = "CategorySlug";
export default CategorySlug;
