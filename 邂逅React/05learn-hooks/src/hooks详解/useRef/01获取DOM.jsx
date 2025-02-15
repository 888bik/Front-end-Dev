import React, { memo, useRef } from "react";

const App = memo(() => {
  const contentRef = useRef();

  function showDom() {
    console.log(contentRef.current.value);
    contentRef.current.focus();
  }
  return (
    <div>
      <input type="text" ref={contentRef} />
      <button onClick={showDom}>查看</button>
    </div>
  );
});

export default App;
