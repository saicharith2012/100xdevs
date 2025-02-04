import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "hit the gym regularly",
      done: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: document.getElementById("title").value,
        description: document.getElementById("desc").value,
        done: false,
      },
    ]);
  }

  return (
    <div>
      <input type="text" id="title" placeholder="title"></input>
      <input type="text" id="desc" placeholder="description"></input>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title + "__"}</h1>
      <h1>{props.description}</h1>
      <h1>{props.done ? "task is done" : "task is pending"}</h1>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default App;
