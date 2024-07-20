import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import SearchTodo from './components/SearchTodo';
import FilterTodo from './components/FilterTodo';
import './styles.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now() }; // Add unique id
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesFilter = true;

    if (filter === 'completed') {
      matchesFilter = todo.completed;
    } else if (filter === 'pending') {
      matchesFilter = !todo.completed;
    }

    return matchesSearch && matchesFilter;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className={`text-3xl mb-4 text-center ${darkMode ? 'text-white' : 'text-blue-700'}`}>TaskHive Todo App</h1>
      <div className={`bg-${darkMode ? 'gray-800' : 'blue-100'} p-6 rounded-lg shadow-lg`}>
        <AddTodo addTodo={addTodo} />
        <SearchTodo searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterTodo filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={toggleDarkMode} className={`bg-${darkMode ? 'blue-500' : 'gray-800'} text-white px-4 py-2 rounded-md`}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default App;



