import { TodosComponentProps } from "../types/appTypes";

export default function TodosComponent(props: TodosComponentProps) {
  return (
    <div>
      {props.todoList.todos.map((todo) => (
        <div>
          <div
            className={`${todo.isDone ? "text-green-400 " : "text-red-400"}`}
          >
            {todo.title}
          </div>
        </div>
      ))}
    </div>
  );
}
