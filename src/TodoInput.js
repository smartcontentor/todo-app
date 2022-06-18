import React from "react";
import "./TodoInput.css";

function TodoInput({ setNewInputText, AddNewTodo }) {
  return (
    <form onSubmit={AddNewTodo}>
      <input
        type="text"
        placeholder="Enter Todo Text"
        onChange={setNewInputText}
      />
      <input type="submit" value="Add New" />
    </form>
  );
}

export default TodoInput;
