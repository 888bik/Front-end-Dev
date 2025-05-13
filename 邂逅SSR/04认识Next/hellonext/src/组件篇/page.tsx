"use client";
import Image from "next/image";
import React, { memo } from "react";
import face from "../../public/face.jpg";

const Page = memo(() => {
  const ImageStyle = {
    border: "1px solid #f00",
    borderRadius: "25px",
  };
  return (
    <div>
      <Image
        src={face}
        alt=""
        onLoadingComplete={(image) => console.log(image.naturalHeight)}
        // onLoad={(image) => console.log(image.naturalHeight)}
        onError={(event) => console.log("图片加载失败" + event.target)}
        // fill
        style={ImageStyle}
      ></Image>
    </div>
  );
});

Page.displayName = "page";

export default Page;
