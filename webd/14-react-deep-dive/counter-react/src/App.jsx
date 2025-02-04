import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // useState hook
  function onClickHandler() {
    setCount((c) => c + 1); // setCount triggers a re-render
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  );
}

export default App;
