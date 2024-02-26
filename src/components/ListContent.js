import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListContent = () => {
  const { todos, todoFilter } = useSelector((state) => state.todo);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (todoFilter === "all") {
      setList(todos);
      return;
    }
    setList(
      todos.filter((todo) => todo.completed === (todoFilter === "completed"))
    );
  }, [todos, todoFilter]);

  return (
    <div>
      {list.length > 0 && (
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4 text-white">To-Do List</h2>
          <ul className="space-y-2">
            <li className="bg-gray-800 p-2 rounded shadow">
              {list.map((todo) => (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  className={todo.completed ? "completed" : ""}
                />
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListContent;
