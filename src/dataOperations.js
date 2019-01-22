import React,  { useState,Component,useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';

export default function useData() {
  const [todos, setTodos] = useState([
    {
      id:1,
    text: "Learn about React",
      isCompleted: false
    },
    {
      id:2,
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id:3,
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
useEffect(() => {
  fetchData();
  },[]);
function fetchData() {
  setTodos ([
    {
      id:1,
      text: "Learn about React",
      isCompleted: false
    },
    {
      id:2,
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id:3,
      text: "Build really cool todo app",
      isCompleted: false
    }
  ])
}
  return [ todos,addTodo,completeTodo,removeTodo];

};