import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="w-full mt-4 flex  items-center flex-col">
      <input
        type="text"
        className="rounded w-3/4 outline-none border-none p-2 text-gray-600"
        autoFocus
        placeholder="Create new todo"
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text !== "") {
            dispatch(
              addTodo({
                id: new Date().getTime(),
                title: text,
                completed: false,
              })
            );
            setText("");
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Task
      </button>
    </div>
  );
};

export default Input;
