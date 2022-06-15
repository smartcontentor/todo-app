import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

// setTodos((previousState) => ({ ...previousState, status: done }));

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "buy some stuff",
      status: "done",
    },
    {
      id: "2",
      text: "finish home work",
      status: "todo",
    },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const setNewInputText = (e) => {
    setNewTodoText(e.target.value);
  };
  const AddNewTodo = (e) => {
    e.preventDefault();
    setTodos((previousState) => [
      ...previousState,
      {
        id: Date.now() + "",
        text: newTodoText,
        status: "todo",
      },
    ]);
    e.target[0].value = "";
  };
  const onChangeStatus = (id) => {
    let changedTodos = todos.filter((todo) =>
      todo.id == id
        ? (todo.status = todo.status == "done" ? "todo" : "done")
        : todo
    );
    setTodos(changedTodos);
    console.log(todos);
  };
  return (
    <div className="App">
      <TodoInput setNewInputText={setNewInputText} AddNewTodo={AddNewTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onChangeStatus={onChangeStatus}
      />
    </div>
  );
}

export default App;
