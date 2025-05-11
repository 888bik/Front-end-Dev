//重新验证
// layout.tsx | route.tsx | page.tsx
// export const revalidate = 10;

export default async function Page() {
  const url = (
    await (
      await fetch("https://api.thecatapi.com/v1/images/search", {
        next: { revalidate: 10 },
      })
    ).json()
  )[0].url;

  return <img src={url} width="300" alt="cat" />;
}
