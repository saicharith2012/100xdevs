import { useState } from "react";

// custom hook to encapsulate the counter logic
export default function useCounter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return { count, incrementCount }; // returning the state and the function needed to increment.
}