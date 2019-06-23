import { ActionCreator, Dispatch } from "redux";
import {ThunkAction} from 'redux-thunk';
import { IAddTodoAction } from '../types/actionTypes';
import { ITodo } from '../types/todo';

export const addTodoActionCreator: ActionCreator<
ThunkAction<
  Promise<void>,                     // The type of the last action to be dispatched - will always be promise<T> for async actions
  null,                     // The type for the data within the last action
  ITodo,                    // The type of the parameter for the nested function 
  IAddTodoAction            // The type of the last action to be dispatched
>
> = (todo: ITodo) => {
return async (dispatch: Dispatch) => {
  const addItemAction: IAddTodoAction = {
    type: 'ADD_TODO',
    todo: todo
  };
  dispatch(addItemAction);
};
};