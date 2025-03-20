import { useRef } from "react";

export default function useDebounceRequest(originalFunction) {
  let currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock);
    currentClock = setTimeout(originalFunction, 200);
  };

  return fn;
}
