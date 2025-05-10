//在服务端组件使用了客户端的hook或者浏览器的API会报错
// import { useState } from "react";

// export default async function Page() {
//   const [title, setTitle] = useState("");

//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = (await res.json()).slice(0, 10);
//   console.log(data);
//   return (
//     <ul>
//       {data.map(({ title, id }) => {
//         return <li key={id}>{title}</li>;
//       })}
//     </ul>
//   );
// }
