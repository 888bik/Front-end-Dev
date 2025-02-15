import React, { memo, useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const App = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      {theme.color}-{theme.fontSize}
    </div>
  );
});

export default App;
