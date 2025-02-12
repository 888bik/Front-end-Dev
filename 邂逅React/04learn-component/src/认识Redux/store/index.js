import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

//创建Store
export const store = createStore(reducer, applyMiddleware(thunk));