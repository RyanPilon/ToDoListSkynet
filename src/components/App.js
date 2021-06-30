import React, { useState, useEffect } from 'react';
import { uuid } from "uuidv4";
import './App.css';
import Header from './Header';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [todos, setToDos] = useState([])

  const addTaskHandler = (task) => {
    setToDos([...todos, {id: uuid(), ...task }]);
  };
  const removeTaskHandler = (id) => {
    const newTaskList = todos.filter((task) => {
      return task.id !== id;
    });

    setToDos(newTaskList);
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
    <ToDoList todos={todos} getTaskId={ removeTaskHandler }/>
    </div>
  );
}

export default App;
