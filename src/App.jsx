import React, { useState } from "react";
/* eslint-disable react/prop-types */
import './App.css'
// import EditTaskDialog from "./EditTaskDialog.jsx";
// import AddTaskDialog from "./AddTaskDialog.jsx";
// import ControlledCheckbox from "./CheckBox.jsx"

import ToDoList from "./ToDoList";

export const Context = React.createContext();

// let nextId = 4;
const initialActivities = [
  { id: 1, description: 'Do dishes', completed: true },
  { id: 2, description: 'Do groceries', completed: false },
  { id: 3, description: 'Do laundry', completed: false },
];

function App() {
  const [toDoList, setToDoList] = useState(initialActivities);

  return (
    
    <Context.Provider value= {[toDoList, setToDoList]}> 
    <ToDoList />

    </Context.Provider>
  
  )
}

export default App