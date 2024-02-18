import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'
import EditTaskDialog from "./EditTaskDialog.jsx";
import AddTaskDialog from "./AddTaskDialog.jsx";

import ControlledCheckbox from "./CheckBox.jsx"


let nextId = 4;
const initialActivities = [
  { id: 1, description: 'Do dishes', completed: true },
  { id: 2, description: 'Do groceries', completed: false },
  { id: 3, description: 'Do laundry', completed: false },
];

function App() {
  const [toDoList, setToDoList] = useState(initialActivities);
  const [toDoDescription, setToDoDescription] = useState('');
  // const [done, setDone] = useState(false);

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
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
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

export default App