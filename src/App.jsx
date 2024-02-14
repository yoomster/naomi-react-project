import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'
import RenderToDoList from "./components/data.jsx";
import UserInput from "./components/ToDo.jsx"


function CoreToDoList ({description}){
  return(
    <li> 
      <h3>{description}</h3>
    </li>
  )
}

function App() {
  const [todoList, setTodoList] = useState();


 
  return (
    <>
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
      <h1>To do list</h1>
      <ul>
        <RenderToDoList />
      </ul>
      <UserInput />
    </>
  )
}

export default App

