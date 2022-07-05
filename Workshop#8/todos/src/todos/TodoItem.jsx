import React from 'react';
import './TodoItem.css';


const TodoItem = function ({ todo }) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button className="completed-button">Mark as completed</button>
                <button className="completed-button">Mark as completed</button>
            </div>
        </div>
    );
};

export default TodoItem;