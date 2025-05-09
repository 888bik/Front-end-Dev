import { NextRequest, NextResponse } from "next/server";

//需求希望 GET 请求 `/api/demo/1?dataField=title` 获取 post id 为 1 的文章数据，dataField 用于指定返回哪些字段数据
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const filed = request.nextUrl.searchParams.get("dataFiled");
  // const data = await (
  //   await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  // ).json();
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  const result = filed ? data[filed] : data;
  return NextResponse.json({ code: 200, message: "success", data: result });
}
