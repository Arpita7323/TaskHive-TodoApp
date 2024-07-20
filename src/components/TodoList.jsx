import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.title} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;




