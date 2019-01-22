import React, { useState, Component, useEffect } from 'react';
import "./App.css";
import useData from './dataOperations';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button className="space" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}
export default Todo;