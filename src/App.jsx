import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'

let nextId = 3;
const initialActivities = [
  { id: 1, description: 'Do dishes', completed: true },
  { id: 2, description: 'Do groceries', completed: false },
  { id: 3, description: 'Do laundry', completed: false },
];

const items = initialActivities.map(activity =>
  <li key={activity.id}>
    <input type="checkbox" />
      {activity.description}
      <button type="delete"  />
  </li> )


function App() {
  const [toDoList, setToDoList] = useState(initialActivities);
  const [toDoDescription, setToDoDescription] = useState('');


  function handleAddToDo (description) {
    setToDoList([
      ...toDoList, 
      { id: nextId++, 
        description: description,
      completed: false
      } ]);
    console.log('hi');
  }

  return (
    <>
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
      <h1>To do list</h1>
      <ul>{items}</ul>


      <section id="user-input">
      <p>
          <label>New to do item</label>
          <input type= "text" required value={toDoDescription} onChange={e => setToDoDescription(e.target.value)}/>
      </p>
      </section>
      <button onClick={() =>{handleAddToDo} }> Add </button>
    </>
  )
}

export default App

