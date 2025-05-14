import type { NextConfig } from "next";
import withMDX from "@next/mdx";

// import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/docs",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "x-custom-headers",
            value: "my custom headers value",
          },
          {
            key: "x-another-custom-header",
            value: "another custom headers value",
          },
        ],
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/", //传入的请求路径
  //       destination: "/about", //重定向的地址
  //       permanent: true, //为true时使用308状态码,false为307,第一个表示客户端或者搜索引擎永久缓存重定向
  //       has: [
  //         {
  //           type: "header",
  //           key: "x-redirects-me",
  //         },
  //       ],
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/profile",
        destination: "/about",
      },
    ];
  },
  devIndicators: {
    // buildActivityPosition: "bottom-right",
    // buildActivity: false,
  },
  // distDir: "build",
  env: {
    customKey: "hello bik",
  },
  eslint: {
    ignoreDuringBuilds: true, //为true表示即使有错误,也要构建
  },
  /** @type {import('next').NextConfig} */
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // experimental: {
  //   esmExternals: "loose",
  // },
};
export default withMDX()(nextConfig);
