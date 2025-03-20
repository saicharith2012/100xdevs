import React, { useEffect, useState } from "react";
import useDebounceInput from "../hooks/useDebounceInput";

export default function DebouncingInputValue() {
  const [inputVal, setInputVal] = useState("");

  const debounceValue = useDebounceInput(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation.");
  }, [debounceValue]);

  return (
    <div>
      <input type="text" onChange={change}></input>
    </div>
  );
}
