import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  UPDATE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED,
} from "../actionTypes/todoActionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const completeTodo = (id, completed) => {
  return {
    type: COMPLETE_TODO,
    payload: { id, completed },
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
