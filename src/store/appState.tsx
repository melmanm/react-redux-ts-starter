import { ITodo } from '../types/todo';

export interface ITodoState{
    todos: ITodo[]
}

export interface IAppState{
    todoState: ITodoState
}

export const initialTodoState : ITodoState =
{
    todos: [{
        done: false,
        description: "make it work!"

    }]
}