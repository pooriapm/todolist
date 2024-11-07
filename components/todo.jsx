import { useState } from "react";

export default function Todo({ name, id, deleteATodo, updateATodo }) {
  const [updatedTodo, setUpdatedTodo] = useState(name);
  const [updating, setUpdating] = useState(false);
  const [done, setDone] = useState(false);

  const onUpdate = () => {
    if (updating) {
      updateATodo(updatedTodo, id);
    }

    setUpdating((state) => !state);
  };

  return (
    <>
      {updating ? (
        <input
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          className="border-2 rounded-lg"
        />
      ) : (
        <span className={`${done && "line-through"}`}>{name}</span>
      )}
      <button
        onClick={() => setDone((state) => !state)}
        className="mx-2 bg-indigo-300 border-1 px-2 text-xs border-indigo-700 text-indigo-600 rounded-lg"
      >
        {done ? "Mark as Pending" : "Mark as Done"}
      </button>
      <button
        onClick={() => onUpdate()}
        className="bg-indigo-300 border-1 px-2 text-xs border-indigo-700 text-indigo-600 rounded-lg"
      >
        {updating ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => deleteATodo(id)}
        className="mx-2 bg-indigo-300 border-1 px-2 text-xs border-indigo-700 text-indigo-600 rounded-lg"
      >
        Delete
      </button>
    </>
  );
}
