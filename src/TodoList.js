import React from "react";

import "./TodoList.css";
import Todo from "./Todo";


function TodoList({ todos, onDeleteTodo, onChangeStatus }) {
  return (
    <ul className="TodoList">
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onChangeStatus={onChangeStatus}
            />
          ))
        : "Nothing to Do!!!!"}
    </ul>
  );
}

export default TodoList;
