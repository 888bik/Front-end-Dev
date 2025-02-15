import { useRef } from "react";

function ParentComponent() {
  // 创建 ref
  const childRef = useRef(null);

  const handleClick = () => {
    // 通过 ref 调用子组件方法或访问 DOM
    childRef.current?.focus();
  };

  return (
    <div>
      {/* 直接传递 ref */}
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </div>
  );
}
function ChildComponent({ ref }) {
  // 直接接收 ref 作为 prop
  return (
    <input
      type="text"
      ref={ref} // 将 ref 绑定到 DOM 元素
      placeholder="点击按钮聚焦我"
    />
  );
}
export default ParentComponent;
