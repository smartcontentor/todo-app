import React from "react";
import "./Todo.css";

function Todo({ todo, onDeleteTodo, onChangeStatus }) {
  return (
    <li className={todo.status} onDoubleClick={() => onChangeStatus(todo.id)}>
      <span>{todo.text}</span>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => onDeleteTodo(todo.id)}
      ></i>
    </li>
  );
}

export default Todo;
