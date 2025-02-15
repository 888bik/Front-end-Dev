import React, { memo, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
    </div>
  );
});

export default App;
