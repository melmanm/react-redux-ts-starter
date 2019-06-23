import { ITodo } from "./todo";

export const ADD_TODO = "ADD_TODO";

export interface IAddTodoAction
{
    type: typeof ADD_TODO,
    todo: ITodo,
} 

export type TodoAction = IAddTodoAction