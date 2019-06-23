import { combineReducers } from "redux";
import { IAppState } from '../store/appState';
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers<IAppState>({todoState: todoReducer })