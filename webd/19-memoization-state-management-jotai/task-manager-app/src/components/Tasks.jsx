import { useAtom } from "jotai";
import React from "react";
import { taskReducerAtom, tasksAtom } from "../store/store";

export default function Tasks() {
  const [tasks] = useAtom(tasksAtom);
  const [_, dispatch] = useAtom(taskReducerAtom);

  function deleteTask(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
