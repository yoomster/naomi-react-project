import React from "react";
/* eslint-disable react/prop-types */
import './App.css'
import EditTaskDialog from "./EditTaskDialog.jsx";
import AddTaskDialog from "./AddTaskDialog.jsx";
import ControlledCheckbox from "./CheckBox.jsx"

import {GlobalContext} from "./App.jsx";

let nextId = 4;
// const initialActivities = [
//   { id: 1, description: 'Do dishes', completed: true },
//   { id: 2, description: 'Do groceries', completed: false },
//   { id: 3, description: 'Do laundry', completed: false },
// ];



export default function ToDoList() {
  const [toDoList, setToDoList] = React.useContext(GlobalContext);

  function handleDone (){
    console.log('done')
  }

  function parentOnAdd (description) {
    setToDoList([
      ...toDoList, 
      { id: nextId++, 
        description: description,
        completed: false
      } 
    ])
  }

  function handleDelete(activityId){
    setToDoList(
      toDoList.filter(a => a.id !== activityId)
    )
  }

  function parentOnSubmit(activityId, activityDescription) {
      // new list from .map on old
    const newList = toDoList.map(activity =>
      activity.id === activityId ? {...activity, description: activityDescription} : activity
      );

    setToDoList(newList);
  }

  return (
    <>
    <GlobalContext.Provider value= {[toDoList, setToDoList]}> 
      
      <h1>To do list</h1>
      {toDoList.map(activity =>

      
       <ul key={activity.id}>
        
        <ControlledCheckbox 
        onChange={handleDone}
        />

        {activity.description}

         <EditTaskDialog 
          task={activity} 
          onSubmit={parentOnSubmit}
          />
          

        <button 
        className="round-button"
        onClick={() => 
          handleDelete (activity.id)
        }> <span className="material-icons">
        delete
        </span>
         </button>
         

       </ul>)
      }
    </GlobalContext.Provider>
      <p>
        <label>Add a new to do item to your list </label>
        <br />
          <AddTaskDialog 
          onSubmit={parentOnAdd}
          />
      </p>
    </>
  )
}
