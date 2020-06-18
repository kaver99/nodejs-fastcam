import { createAction, handleActions } from 'redux-actions';
import uuid from 'uuid';

// Action Type
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHECK_TODO = 'CHECK_TODO';

export const insertTodo = createAction(ADD_TODO, text => text);
export const deleteTodo = createAction(DELETE_TODO, index => index);
export const checkTodo = createAction(CHECK_TODO, index => index);


const initialState = {
    todoList: []
};

export default handleActions({
    [ADD_TODO]: (state, action) => {
        let newList = [...state.todoList];
        newList.push({index: uuid.v4(), isCompleted: false, text: action.payload});
        return {
            todoList: newList
        }
    },
    [DELETE_TODO]: (state, action) => {
        let newList = [...state.todoList];
        newList.splice(action.payload, 1);
        return {
            todoList: newList
        }
    },
    [CHECK_TODO]: (state, action) => {
        let newList = [...state.todoList];
        newList[action.payload].isCompleted = true;
        return {
            todoList: newList
        }
    }
}, initialState);