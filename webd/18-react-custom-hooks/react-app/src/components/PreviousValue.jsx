import { useState } from "react";
import { usePrev } from "../hooks/usePrev";

export default function PreviousValue() {
  const [state, setState] = useState(0);
  const prev = usePrev(state); // old value is returned.
  console.log("3. component being rerendered.")
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      {/* The current value here is rendered based on the state variable itself unrelated to the usePrev hook. */}
        <p style={{ padding: "5px 10px" }}>{state}</p>
        <button onClick={() => setState((curr) => curr + 1)}>Click Me</button>
      </div>
      <p>The previous value was {prev}</p>
    </div>
  );
}
