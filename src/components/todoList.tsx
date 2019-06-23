import React from "react";
import { ITodo } from '../types/todo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Dispatch, Action, AnyAction } from 'redux';
import { IAddTodoAction } from '../types/actionTypes';
import { IAppState } from '../store/appState';
import { ThunkDispatch } from 'redux-thunk';
import { addTodoActionCreator } from '../actions/todoActions';
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';

interface ITodoListProps {
    todos: ITodo[],
    addTodo: (paremeter: ITodo) => Promise<void>;
};



export const TodoListComponent: React.FC<ITodoListProps> =
    (
        { 
            todos,
            addTodo
        }
    ) => {
        return (
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Done?</TableCell>
                                <TableCell >What to do?</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map(todo => (
                                <TableRow>
                                    <TableCell align="center">
                                        <Checkbox

                                            checked={todo.done}
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        /></TableCell>
                                    <TableCell align="left">{todo.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Button onClick={() => addTodo({ done: true, description: "xxx" })}>Add item
                </Button>
            </div>
        );
    }

const mapStateToProps = (store: IAppState) => {
    return {
        todos: store.todoState.todos
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        addTodo: (parameter: ITodo) => dispatch(addTodoActionCreator(parameter))
    };
};

export const TodoListComponentConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoListComponent)