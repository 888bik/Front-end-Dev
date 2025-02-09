import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const addCount = (count) => {
    setCount((prevCount) => prevCount + count);
  };
  return (
    <div>
      {count}
      <Children onData={addCount} />
    </div>
  );
}
function Children({ onData }) {
  return (
    <button
      onClick={() => {
        onData(5);
      }}
    >
      +5
    </button>
  );
}
