export const revalidate = 0;
export const fetchCache = "force-cache";

export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { tags: ["collection"] },
  });

  const data = await res.json();
  return Response.json({ data, now: Date.now() });
}
