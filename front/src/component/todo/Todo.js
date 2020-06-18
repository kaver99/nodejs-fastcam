import React, { useState, Suspense } from 'react';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { insertTodo, deleteTodo, checkTodo } from '../../store/modules/todo/todo';

import './todo.css';

const Todo = ({ todo,  index, completeTodo, removeTodo }) => {
  return (
    <>
      <ul className="todo">
        <div className="todo-text" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
          {todo.text}
        </div>
        <div className="todo-btn">
          <button onClick={() => completeTodo(index)}>✓</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </ul>
    </>
  );
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  // SUBMIT Event Handle
  const handleSubmit = e => {
    e.preventDefault(); // Event Bubbling 현상방지를 위해 적용(이벤트가 중복으로 실행되는 것을 방지)
    if(!value) return
    setTimeout(() => {
      addTodo(value);
    }, 1000);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Todo를 작성해 주세요." />
    </form>
  );
}

const TodoLists = ({ todoList, completeTodo, removeTodo }) => {
  return (
    todoList.map((item, index) => (
      <Todo key={item.index} index={index} todo={item} completeTodo={completeTodo} removeTodo={removeTodo} />
    ))
  );
}

const mapStateToProps = ({ todo }) => ({
  todoList: todo.todoList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  insertTodo, deleteTodo, checkTodo
}, dispatch);

function TodoComponent(props) {
  // const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const addTodo = text => {
    // const newTodos = [...todo, { text }];
    // setTodo(newTodos);
    setLoading(true);
    setTimeout(() => {
      props.insertTodo(text);
      setLoading(false);
    }, 500);
  }

  const completeTodo = index => {
    // const newTodos = [...todo];
    // newTodos[index].isCompleted = true;
    // setTodo(newTodos);
    setLoading(true);
    setTimeout(() => {
      props.checkTodo(index);
      setLoading(false);
    }, 500);
    
  }

  const removeTodo = index => {
    // const newTodos = [...todo];
    // newTodos.splice(index, 1);
    // setTodo(newTodos);
    setLoading(true);
    setTimeout(() => {
      props.deleteTodo(index);
      setLoading(false);
    }, 500);
  }

  const LoadingBar = () => (
    <>
      <div className="loadingMask"></div>
      <div className="loadingBar"><img src="./static/img/512x512.gif" /><h4>Loading...</h4></div>
    </>
  );

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div id="todo-list" className="todo-list">
        {
          loading && <LoadingBar />
        }
        <TodoLists todoList={props.todoList} completeTodo={completeTodo} removeTodo={removeTodo} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);