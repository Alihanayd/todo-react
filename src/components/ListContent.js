import React from "react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../store/actions/todoActions";

const ListContent = () => {
  const { todos, todoFilter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="w-3/4">
      {todos.length > 0 && (
        <div className="bg-gray-700 p-4 rounded w-full max-h-[500px]">
          <div className="flex justify-center space-x-2 mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(setFilter("all"));
              }}
            >
              Filter All
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(setFilter("completed"));
              }}
            >
              Filter Completed
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(setFilter("incompleted"));
              }}
            >
              Filter Incomplete
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(clearCompleted());
              }}
            >
              Clear Completed
            </button>
          </div>
          <ul className="space-y-2">
            <li className="bg-gray-800 p-2 rounded shadow h-[416px] overflow-auto">
              {todos.map((todo) => {
                if (todoFilter === "all") {
                  return <ListItem key={todo.id} todo={todo} />;
                }
                if (todoFilter === "completed" && todo.completed) {
                  return <ListItem key={todo.id} todo={todo} />;
                }
                if (todoFilter === "incompleted" && !todo.completed) {
                  return <ListItem key={todo.id} todo={todo} />;
                }
                return null;
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListContent;
