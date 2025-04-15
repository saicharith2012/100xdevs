export interface TodosType {
  todos: {
    title: string;
    isDone: boolean;
  }[];
}

export interface TodosComponentProps {
  todoList: TodosType;
}
