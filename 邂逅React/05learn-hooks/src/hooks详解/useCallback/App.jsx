import React, { memo, useCallback, useRef, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  //问题:
  //不依赖count,但是会导致闭包陷阱
  //依赖count,但是会导致函数重新生成,props更新
  //优化的正确做法:
  //useRef, 在组件多次渲染时, 返回的是同一个值
  const countRef = useRef();
  countRef.current = count;
  const addNumber = useCallback(function () {
    console.log("addNumber");
    setCount(countRef.current + 1);
  }, []);

  //这种情况也会导致子组件Home重新渲染,原因是因为count发生变化,addNumber函数重新生成,导致子组件props变化(浅比较)重新渲染
  // const addNumber = useCallback(
  //   function () {
  //     console.log("addNumber");
  //     setCount(count + 1);
  //   },
  //   [count]
  // );

  //闭包陷阱:这里如果将函数缓存了,之后第二次调用还是调用第一个函数,但是由于第一个函数闭包捕获到的是初始渲染时的变量,
  //所以第二次调用时,变量还是旧值
  // const addNumber = useCallback(function () {
  //   console.log("addNumber");
  //   setCount(count + 1); //这里捕获的是初始渲染时的count(0)
  // }, []); //依赖为空数组,导致函数不会更新

  //普通函数,函数没有缓存,当App组件重新渲染会重新定义函数,导致子组件的props更新导致子组件重新渲染
  // function addNumber(num) {
  //   console.log("addNumber");
  //   setCount(count + num);
  // }
  return (
    <div>
      {count}
      <button onClick={addNumber}>+1</button>
      <Home addNumber={addNumber} />
    </div>
  );
});
const Home = memo((props) => {
  console.log("Home组件被渲染");
  return (
    <div>
      Home:
      <button onClick={(e) => props.addNumber()}>+1</button>
    </div>
  );
});
export default App;
