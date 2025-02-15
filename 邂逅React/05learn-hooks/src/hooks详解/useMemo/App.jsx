import React, { memo, useMemo, useState } from "react";

function calcNumTotal(num) {
  console.log("calcNumTotal的计算过程被调用~");
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const Home = memo((props) => {
  console.log("Home组件被重新渲染");
  return <div>计算器:{props.result}</div>;
});

const App = memo(() => {
  const [count, setCount] = useState(10);
  //count发生变化,App组件重新渲染,计算函数重新定义计算,虽然result的值不变(始终是1275),但Home组件还是会通过浅比较props,只是由于result是基本类型,所以值未变时Home不会重新渲染
  // const result = calcNumTotal(50);

  //不依赖任何值,计算函数只在第一次执行返回计算结果,然后useMemo将返回的计算结果缓存下来,之后App组件重新渲染不会再调用计算函数了
  const result = useMemo(() => {
    // return calcNumTotal(50*count);//注意这里如果计算函数的参数包含count,但是useMemo不依赖任何值,即使count发生变化,result也还是第一次计算的值(也就是所谓的闭包陷阱)
    return calcNumTotal(50);
  }, []);

  //依赖count,当count变化时,计算函数会被重新执行,Home组件接收的props也会发生变化(如果值不变不会重新渲染,若result是引用类型,则每次生成新引用才重新渲染),所以Home组件也会重新渲染
  // const result = useMemo(() => {
  //   return calcNumTotal(count * 2);
  // }, [count]);

  function addNumber() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>计数器count:{count}</h2>
      <Home result={result} />
      <button onClick={addNumber}>+1</button>
    </div>
  );
});

export default App;
