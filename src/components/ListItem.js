import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/todoActions";
import { completeTodo } from "../store/actions/todoActions";

const ListItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-4 justify-between border-b-2">
      <input
        type="checkbox"
        checked={props.todo.completed}
        className="h-4 w-4 min-w-4"
        onChange={(e) => {
          dispatch(completeTodo(props.todo.id, e.target.checked));
        }}
      />
      <span className="text-white font-semibold">{props.todo.title}</span>
      <button
        className="px-2 py-1 bg-red-500 text-white text-xs lg:text-base lg:font-bold rounded hover:bg-red-600 my-2"
        onClick={() => {
          dispatch(deleteTodo(props.todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
