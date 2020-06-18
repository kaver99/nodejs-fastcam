import { combineReducers } from 'redux';
import counter from './counter/counter';
import todo from './todo/todo';


export default combineReducers({
    counter,
    todo
});