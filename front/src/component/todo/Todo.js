import React, { useState } from 'react';

import './todo.css';

const Todo = ({ todo,  index, completeTodo, removeTodo }) => {
  return (
    <>
      <div className="todo">
        <div className="todo-text" style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>
          {todo.text}
        </div>
        <div className="todo-btn">
          <button onClick={() => completeTodo(index)}>✓</button>
          <button onClick={() => removeTodo(index)}>X</button>
      </div>
      </div>
    </>
  );
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  // onChange Event Handle
  const handleSubmit = e => {
    e.preventDefault(); // Event Bubbling 현상방지를 위해 적용(이벤트가 중복으로 실행되는 것을 방지)
    if(!value) return
    addTodo(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Todo를 작성해 주세요." />
    </form>
  );
}

function TodoComponent() {
  const [todo, setTodo] = useState([]);

  const addTodo = text => {
    const newTodos = [...todo, { text }];
    setTodo(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todo];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="todo-list">
        {
          todo.map((item, index) => (
            <Todo key={item} index={index} todo={item} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default TodoComponent;