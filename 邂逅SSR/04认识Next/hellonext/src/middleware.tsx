// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("-----------");
//   return NextResponse.redirect(new URL("/category", request.url));//地址栏也跟着改变
//   // return NextResponse.rewrite(new URL("/category", request.url));//地址栏没有改变,但是页面变了
// }

//设置匹配路径
export const config = {
  // matcher: "/cart/:path*",
  matcher: ["/cart/:path*", "/shop/:path*"],
};
import { NextResponse } from "next/server";

interface MiddlewareFunction {
  (request: Request): Promise<Response>;
}

function withMiddleware1(middleware: MiddlewareFunction): MiddlewareFunction {
  return async (request: Request) => {
    console.log("middleware1 " + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware: MiddlewareFunction): MiddlewareFunction {
  return async (request) => {
    console.log("middleware2 " + request.url);
    return middleware(request);
  };
}

async function middleware(request: { url: string }) {
  console.log("middleware " + request.url);
  return NextResponse.next();
}

export default withMiddleware2(withMiddleware1(middleware));
