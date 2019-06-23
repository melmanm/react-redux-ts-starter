import { Reducer } from "redux";
import { ITodoState, initialTodoState } from '../store/appState';
import { TodoAction } from '../types/actionTypes';
import { stat } from "fs";

export const todoReducer: Reducer<ITodoState, TodoAction> = (

    state = initialTodoState,
    action

) => {
    switch (action.type) {
        case ("ADD_TODO"): {
            return { ...state, todos: state.todos.concat(action.todo) }
        }
        default:
            return state;
    }
}