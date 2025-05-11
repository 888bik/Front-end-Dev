// 强制 fetch 不缓存
export const fetchCache = "force-no-store";

//一个是请求记忆,即多个相同的请求只会请求一次,返回的数据是相同的,它只持续在组件树渲染期间
// 目的是为了避免组件树渲染的时候多次请求同一数据造成的性能影响

//一个是数据缓存,即请求返回的数据会被缓存在内存中,下次请求的数据还是之前的,目的在于优化应用性能
async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    // cache: "force-cache",
  });
  return res.json();
}

export async function generateMetadata() {
  const data = await getData();
  return {
    title: data[0].id,
  };
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
      <CatDetail />
    </>
  );
}

async function CatDetail() {
  const data = await getData();
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
    </>
  );
}
