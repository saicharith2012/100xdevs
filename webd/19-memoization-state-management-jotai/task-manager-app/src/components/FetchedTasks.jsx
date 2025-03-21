import { useAtom } from "jotai";
import { fetchTasksAtom } from "../store/store";

export default function FetchedTasks() {
  const [{ data, status, error }] = useAtom(fetchTasksAtom);
  const fetchedTasks = data;

  if (status === "pending") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return (
      <div>
        <strong>Could not fetch the tasks:</strong> {error?.message}
      </div>
    );
  }

  return (
    <>
      <h3>Fetched tasks</h3>
      <ul>
        {fetchedTasks?.map((task, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
}
