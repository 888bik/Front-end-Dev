import React, { memo, useImperativeHandle, useRef } from "react";

const App = memo(() => {
  const inputRef = useRef();
  function handleDOM() {
    console.log(inputRef.current); //现在获取的是useImperativeHandle暴露的对象
    inputRef.current.focus(); //调用子组件暴露的focus方法
  }
  return (
    <div>
      {/* 将inputRef传递给子组件 */}
      <Home ref={inputRef} />
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  );
});
const Home = memo(({ ref }) => {
  const inputRef = useRef();
  //子组件对父组件传入的ref进行处理
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});
export default App;
