import { IProps } from "@/路由篇/template";
import React, { memo } from "react";

const ShopSlug = memo((props: IProps) => {
  console.log(props.params!.slug);
  return <div>ShopSlug</div>;
});

ShopSlug.displayName = "ShopSlug";
export default ShopSlug;
