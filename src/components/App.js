import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddToDo from './AddToDo';
import DeleteToDo from './DeleteToDo';
import ToDoList from './ToDoList';

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [todos, setToDos] = useState([])

  const addTaskHandler = (task) => {
    setToDos([...todos, task]);
  }

  useEffect(() =>{
    const retriveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTasks) setToDos(retriveTasks);
  }, []);


  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
  <div className="ui container">
    <Header />
    <AddToDo addTaskHandler={addTaskHandler} />
    {/* <DeleteToDo /> */}
    <ToDoList todos={todos} />
    </div>
  );
}

export default App;
