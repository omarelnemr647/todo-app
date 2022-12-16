import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import api from '../../api/todosApi';
import getTodos from '../../api/todosApi';
import axios, { Axios } from 'axios';
function TodoList() {
  
  const [todos, setTodos] = useState([])
  const url ='http://localhost:3006/todos'
  
  
  useEffect(() => {
      const getAllTodos= async ()=>{
        const allTodos = await getTodos()
        setTodos(allTodos ?? [])
        console.log(allTodos)
      }
      getAllTodos()
  }, []);


  const addTodo = async todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
    return
    }
    
    const request ={
      id: Math.floor(Math.random() * 10000),
      ...todo
    }
    const newTodos = [todo, ...todos]
    const response =await axios.post(url, request)
    console.log(response.data)
    setTodos(newTodos)
  }
  const updateTodo = async (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    const response = await axios.put(`${url}/${todoId}`, newValue)

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  

  const removeTodo = async (id) =>{
    await axios.delete(`${url}/${id}`)
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    
  };


  /*useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);*/


  return (
    <div>
        <h1>What'up For Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos ={todos} 
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo} 
        />
    </div>
  )
}

export default TodoList
