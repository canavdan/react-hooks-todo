import React,  { useState,Component,useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';


function App2(){


const [todos, setTodos] = useState([]);
const [url,setUrl] = useState("http://localhost:3001/todos/");
const [text ,setText] = useState();

const fetchData = async () => {
const result =await fetch (url).then(response => response.json());
setTodos(result)
}

useEffect(()=> {
fetchData();
},[url]);

function Todo({ todo, index, completeTodo }) {
  return (
    <div>
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      <div>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
   
    </div>
  );
}

const addTodo = text => {
  const newTodos = [...todos,{text}];
  setTodos(newTodos);
}
const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}
const completeTodo = index =>{
const newTodos = [...todos];
newTodos[index].isCompleted=true;
setTodos(newTodos);
}

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
</div>
<TodoForm addTodo={addTodo} />  
<div>
    <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl({text}=='' ? 'http://localhost:3001/todos/' : url +`?q=${text}`)
        }
      >
        Search
      </button>
       </div>
</div>);  
}


function TodoForm({addTodo}){
  const [value,setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }
  return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
         <button
        type="submit"
        onClick={handleSubmit
        }
      >
        Add ToDo
      </button>
      </form>
  );
}



export default App2;