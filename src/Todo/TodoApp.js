import React, { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

//import {uuid} from 'uuidv4'
function TodoApp() {
  
  return (
    <div className="todo-app">
      
     <TodoList />
    </div>
  );
}

export default TodoApp;
