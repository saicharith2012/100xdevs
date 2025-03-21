import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { taskReducerAtom } from "../store/store";

export default function AddTask() {
  const [_, dispatch] = useAtom(taskReducerAtom);
  const inputRef = useRef();
  const addTask = () => {
    if (inputRef.current.value === "") {
      return;
    }

    dispatch({ type: "ADD", payload: inputRef.current.value });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input style={{ marginRight: "10px" }} ref={inputRef} type="text"></input>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
