 import React,{useState} from 'react';
 import './NewTodoForm.css';

 const NewTodoForm = function ({}){
    const [inputValue, setInputValue] = useState('');
    return(
        <div className="new-todo-form">
            <input className="new-todo-input" 
            type= "text" 
            placeholder="Type your new todo here..." 
            value={inputValue} 
            onchage={e => setInputValue(e.target.value)}
            />
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
 };

 export default NewTodoForm;