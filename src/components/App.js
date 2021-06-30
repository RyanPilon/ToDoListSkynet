import React from 'react';
import './App.css';
import Header from './Header';
import AddToDo from './AddToDo';
import DeleteToDo from './DeleteToDo';
import ToDoList from './ToDoList';

function App() {
  
  const todos = [
    {
      id:"1",
      task:"Finish school",
    },
    {
      id: "2",
      task:"get job",
    },
  ];
  return (
  <div className="ui container">
    <Header />
    <AddToDo />
    {/* <DeleteToDo /> */}
    <ToDoList todos={todos} />
    </div>
  );
}

export default App;
