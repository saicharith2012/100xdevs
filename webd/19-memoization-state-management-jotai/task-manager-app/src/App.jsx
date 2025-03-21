import { useAtom } from "jotai";
import { taskCountAtom } from "./store/store.js";
import "./App.css";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import FetchedTasks from "./components/FetchedTasks.jsx";

function App() {
  const [taskCount] = useAtom(taskCountAtom);

  return (
    <div>
      <h1>Task Manager - {taskCount}</h1>
      <AddTask />
      <Tasks />
      <FetchedTasks/>
    </div>
  );
}

export default App;
