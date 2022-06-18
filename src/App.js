import { useCallback, useState } from "react";

import "./App.css";
import TodoList from "./TodoList";


function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "buy some stuff",
      isDone: true,
    },
    {
      id: "2",
      text: "finish home work",
      isDone: false,
    },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  const handleDeleteTodo = useCallback(
    (id) =>
      setTodos((previousTodos) =>
        previousTodos.filter((todo) => todo.id !== id)
      ),
    []
  );
  const handleChangeStatus = useCallback((id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);
  const handleNewTodoText = useCallback((e) => {
    setNewTodoText(() => e.target.value);
  }, []);
  const handleNewTodo = useCallback((e) => {
      e.preventDefault();
      if (newTodoText) {
        setTodos((previousTodos) => [
          ...previousTodos,
          {
            id: Date.now().toString(),
            text: newTodoText,
            isDone: false,
          },
        ]);
      }
      setNewTodoText(() => "");
    },
    [newTodoText]
  );
  return (
    <div className="App">
      <main className="todos">
        <form className="new-todo-form" onSubmit={handleNewTodo}>
          <input
            type="text"
            placeholder="Enter Todo Text"
            className="todo-text-input"
            onChange={handleNewTodoText}
            value={newTodoText}
          />
          <input
            type="submit"
            value="Add New"
            className="btn-add"
            onClick={handleNewTodo}
          />
        </form>
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeStatus={handleChangeStatus}
        />
      </main>
    </div>
  );
}

export default App;
