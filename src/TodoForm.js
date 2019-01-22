import React, { useState, Component, useEffect } from 'react';
import './App.css';


function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="space" type="submit">Add</button>
        </form>
    );
}

export default TodoForm;