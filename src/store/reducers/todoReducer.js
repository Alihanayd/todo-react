import todoState from '../state/todoState';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO,COMPLETE_TODO, SET_FILTER, CLEAR_COMPLETED, } from '../actionTypes/todoActionTypes';



const todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case SET_FILTER:
            return {
                ...state,
                todoFilter: action.payload,
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
            };
        default:
            return state;
    }
};

export default todoReducer;
