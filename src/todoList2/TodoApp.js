import React, { useEffect, useState } from "react";
import { Form, TodoList } from "./components";
import "./todoList.css";
const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localStorage.getItem("ITEMS"));
  });

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (title) => {
    setTodos((prevtodos) => {
      return [
        ...prevtodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id, completed) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="todoApp">
      <Form handleSubmit={handleSubmit} />
      <h1>Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoApp;
