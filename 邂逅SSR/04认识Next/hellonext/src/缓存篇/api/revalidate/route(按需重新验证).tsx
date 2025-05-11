import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag")!;
  console.log(tag);
  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}

// export default async function GET() {
//   const url = (
//     await (
//       await fetch("https://api.thecatapi.com/v1/images/search", {
//         next: { tags: ["collection"] },
//       })
//     ).json()
//   )[0].url;

//   return <img src={url} width="300" alt="cat" />;
// }
