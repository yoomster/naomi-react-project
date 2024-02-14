import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'
import { TO_DO_LIST } from "./components/data.js";
import UserInput from "./components/ToDo.jsx"
import Button from "./components/Button.jsx";


function CoreToDoList ({description}){
  return(
    <li> 
      <h3>{description}</h3>
    </li>
  )
}

function App() {
  const [todoList, setTodoList] = useState();

  function handleClick() {
    console.log("clicked");
}
  
  return (
    <>
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
      <h1>To do list</h1>
      <ul>
        {todoList}

      <CoreToDoList {...TO_DO_LIST[0]} />
      <CoreToDoList {...TO_DO_LIST[1]} />
      <CoreToDoList {...TO_DO_LIST[2]} />
      </ul>
      <UserInput />
      <Button onSelect = {() => handleClick()} />
    </>
  )
}

export default App

