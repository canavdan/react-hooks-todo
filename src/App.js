import React,  { useState,Component,useEffect }  from 'react';

import './App.css';
import useData from './dataOperations';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App(){
  
  const [todos, addTodo,completeTodo,removeTodo] = useData();
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}



export default App;