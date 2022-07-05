import React from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm'
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo, markAsCompleted } from './actions';

const TodoList = function ({todos = [], onRemovePressed, onCompletedPressed}) {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);