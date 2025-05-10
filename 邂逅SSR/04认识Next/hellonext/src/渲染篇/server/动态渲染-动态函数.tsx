import { cookies } from "next/headers";

// export const revalidate = 10;
export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  const url = (
    await (await fetch("https://api.thecatapi.com/v1/images/search")).json()
  )[0].url;

  return <img src={url} width="300" alt="cat" />;
}
