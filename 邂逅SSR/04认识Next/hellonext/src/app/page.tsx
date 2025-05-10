async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: { tags: ["collection"] },
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <img src={data[0].url} width="300" />;
}
