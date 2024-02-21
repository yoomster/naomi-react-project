import React from "react";
/* eslint-disable react/prop-types */
import './App.css'
import EditTaskDialog from "./EditTaskDialog.jsx";
import AddTaskDialog from "./AddTaskDialog.jsx";
import ControlledCheckbox from "./CheckBox.jsx"

import {GlobalContext} from "./pages/ToDo.jsx";

export default function ToDoList() {
  const [toDoList, setToDoList] = React.useContext(GlobalContext);

  function handleDone (){
    console.log('done')
  }


  function handleDelete(activityId){
    setToDoList(
      toDoList.filter(a => a.id !== activityId)
    )
  }

  return (
    <>     
      {toDoList.map(activity =>

      <ul key={activity.id}>
      <ControlledCheckbox 
         onChange={handleDone}
      />

      {activity.description}

      <EditTaskDialog 
        task={activity} 
      />
          
      <button 
        className="round-button"
        onClick={() => 
          handleDelete (activity.id)}
      >
      <span className="material-icons">
        delete
      </span>
      </button>

      </ul>)
      }

      <p>
        <label>Add a new to do item to your list </label>
        <br />
        <AddTaskDialog />
      </p>
    </>
  )
}
