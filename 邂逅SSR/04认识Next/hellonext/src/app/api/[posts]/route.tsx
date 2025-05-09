import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return NextResponse.json({ data });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // const content = await request.json();
  // console.log(content);
  console.log("--------------");
  console.log(request.nextUrl.pathname);
  console.log(params);
  return NextResponse.json({ code: 200, message: "success" });
}
