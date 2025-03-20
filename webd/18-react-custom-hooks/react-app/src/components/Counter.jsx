import useCounter from "../hooks/useCounter";

export default function Counter() {
  // destructuring the object returned by the useCounter hook.
  const { count, incrementCount } = useCounter();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px"
      }}
    >
      <div style={{ paddingRight: "10px" }}>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
