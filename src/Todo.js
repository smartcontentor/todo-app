import React, { useCallback } from "react";

import "./Todo.css";


function Todo({ todo, onDeleteTodo, onChangeStatus }) {
  const handleChangeStatus = useCallback(() => {onChangeStatus(todo.id);} , [todo , onChangeStatus]);
  const handleDeleteTodo = useCallback(() => onDeleteTodo(todo.id) , [todo , onDeleteTodo]);
  return (
    <li className={`todo ${todo.isDone ? "done" : ""}`}>
      <input className="todo-checkbox" type="checkbox" onChange={handleChangeStatus} checked={todo.isDone}/>
      <span className={`todo-text ${todo.isDone ? 'line-through' : ''}`}>{todo.text}</span>
      <i
        className="fa-solid fa-trash-can"
        onClick={handleDeleteTodo}
      ></i>
    </li>
  );
}

export default Todo;
