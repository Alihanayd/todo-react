import todoReducer from "./reducers/todoReducer";
import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducer = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
