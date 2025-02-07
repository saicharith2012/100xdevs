import React from 'react'

function TodosList() {
    const todos = [{
        id: 1,
        title: "go to gym",
        done: false
    }, {
        id: 2,
        title: "Eat food",
        done: true
    }]

    return (
        <>
            Todolist
            {todos.map((todo) => <Todo key={todo.id} title={todo.title} done={todo.done} />)}
        </>
    )
}

function Todo(props) {
    return (
        <div style={{}}>
            <span>{props.title}</span> - <span style={{ color: props.done ? "green" : "red" }}>{props.done ? "Finished" : "Pending"}</span>
        </div>
    )
}

export default TodosList