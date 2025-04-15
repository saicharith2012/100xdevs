import "./App.css";
import { TodosType } from "./types/appTypes";
import TodosComponent from "./components/TodosComponent";

function App() {
  const todos: TodosType = {
    todos: [
      {
        title: "complete today's quota of tutorials",
        isDone: false,
      },
      {
        title: "4 hrs of work on project",
        isDone: true,
      },
    ],
  };

  return (
    <div>
      <TodosComponent todoList={todos} />
    </div>
  );
}

export default App;
