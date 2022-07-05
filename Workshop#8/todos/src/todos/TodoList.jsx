import React from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = function ({todos = [{text:'hello'}]}){
    return(
        <div className="list-wrapper">
            <NewTodoForm/>
        {todos.map(todo => <TodoItem todo={todo}/>)}
        </div>
    );
};

export default TodoList;