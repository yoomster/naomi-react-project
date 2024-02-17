import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'
import TaskDialog from "./TaskDialog";
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
  const [done, setDone] = useState(false);

  function handleDone (){
    console.log('hi')
  }

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

  function parentOnSubmit(taskId, taskDescription) {
      // new list from .map on old
    const newList = toDoList.map(task =>
      task.id === taskId ? {...task, description: taskDescription} : task
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

         <TaskDialog 
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
        <input
          value={toDoDescription} 
          onChange={e => setToDoDescription(e.target.value)}
        />




        <button 
        className="round-button"
        onClick={() =>{
          setToDoDescription('');
          handleAddToDo (toDoDescription)} 
          
        }>
         <i className="material-icons">add</i>
          </button>
      </p>
    </>
  )
}

export default App