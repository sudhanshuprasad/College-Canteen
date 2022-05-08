import { applyMiddlewere, createStore } from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers";

export const store=createStore(reducers, {}, applyMiddlewere(thunk));