import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'

let nextId = 4;
const initialActivities = [
  { id: 1, description: 'Do dishes', completed: true },
  { id: 2, description: 'Do groceries', completed: false },
  { id: 3, description: 'Do laundry', completed: false },
];

function App() {
  const [toDoList, setToDoList] = useState(initialActivities);
  const [toDoDescription, setToDoDescription] = useState('');


  function handleAddToDo (description) {
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

  return (
    <>
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
      <h1>To do list</h1>
      {toDoList.map(activity =>
       <li key={activity.id}>

        <input type="checkbox" 
         checked={initialActivities.completed}
        />

        {activity.description}

        <button onClick={() => 
          handleDelete (activity.id)
        }> Delete </button>
       </li>)
      }




      <p>
        <label>Add a new to do item to your list </label>
        <br />
        <input
          value={toDoDescription} 
          onChange={e => setToDoDescription(e.target.value)}
        />

        <button onClick={() =>{
          setToDoDescription('');
          handleAddToDo (toDoDescription)} 
        }> Add </button>
      </p>
    </>
  )
}

export default App

