import Todo from "@/components/todo";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { name: newTodo, id: crypto.randomUUID() }]);
      setNewTodo("");
    }
  };

  const onUpdateATodo = (newName, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, name: newName } : todo)),
    );
  };

  const deleteATodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={`p-8 gap-16`}>
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-96 border-2 rounded-lg h-8"
        placeholder="Enter your tasks here:)"
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        {todos &&
          todos.map((todo) => (
            <li key={todo.id} className="my-4">
              <Todo
                name={todo.name}
                id={todo.id}
                deleteATodo={deleteATodo}
                updateATodo={onUpdateATodo}
              />
            </li>
          ))}
      </ol>
    </div>
  );
}
