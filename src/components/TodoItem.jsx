import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newCategory, setNewCategory] = useState(todo.category);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      title: newTitle,
      category: newCategory,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item flex justify-between items-center p-4 border rounded bg-white shadow mb-2">
      {isEditing ? (
        <div className="flex items-center">
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <input 
            type="text" 
            value={newCategory} 
            onChange={(e) => setNewCategory(e.target.value)} 
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <button onClick={handleUpdate} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo)}
            className="mr-2"
          />
          <span 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(todo)}
            className="cursor-pointer"
          >
            {todo.title} ({todo.category})
          </span>
          <div className="ml-4">
            <button onClick={() => setIsEditing(true)} className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2">Edit</button>
            <button onClick={() => deleteTodo(todo)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;







