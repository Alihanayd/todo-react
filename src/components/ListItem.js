import React from "react";

const ListItem = (props) => {
  return (
    <div className="flex items-center space-x-4">
      <input type="checkbox" checked={props.completed} className="h-4 w-4" />
      <span className="text-white">{props.todo.title}</span>
      <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Delete
      </button>
    </div>
  );
};

export default ListItem;
