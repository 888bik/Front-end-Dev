import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [title, setTitle] = useState("hello react");
  const [count, setCount] = useState(0);
  useEffect(() => {
    //会在组件渲染完之后执行
    document.title = title;
    console.log("监听Redux中数据的变化");

    //返回值:回调函数,当组件被第二次重新渲染或者组件卸载的时候执行
    //如果没有取消监听,每次组件重新渲染的时候会使某个事件添加多个监听,虽然上次监听事件的引用大概率会被回收
    return () => {
      console.log("取消监听");
    };
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setTitle("你好")}>修改标题</button>
    </div>
  );
});

export default App;
