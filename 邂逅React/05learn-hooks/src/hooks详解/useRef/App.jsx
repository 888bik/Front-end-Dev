import React, { memo, useCallback, useRef, useState } from "react";

let obj = null;
const App = memo(() => {
  const [count, setCount] = useState(0);
  const nameRef = useRef();
  //一开始obj为null,所以打印第一次为false,之后将nameRef的引用赋值给obj,count发生变化时重新渲染组件
  // 此时nameRef的引用本来应该重新定义的,但是useRef将其保存下来,所以第二次渲染的时候两者的引用是相同的
  console.log(obj === nameRef);
  obj = nameRef;

  // 通过useRef解决闭包陷阱
  const countRef = useRef();
  countRef.current = count;

  const increment = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);

  return (
    <div>
      <h2>Hello World: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
});

export default App;
