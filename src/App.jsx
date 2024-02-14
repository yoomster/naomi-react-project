import { useState } from "react";
/* eslint-disable react/prop-types */
import calendarImg from "./assets/calendar-icon.png";
import './App.css'
import RenderToDoList from "./components/data.jsx";


function App() {
  const [todoList, setTodoList] = useState();

  return (
    <>
      { <div>
          <img src={calendarImg} className="logo" alt="calendar Image" />
      </div> }
      
      <h1>To do list</h1>
      <RenderToDoList />

      <section id="user-input">
      <p>
          <label>New to do item</label>
          <input type= "text" required />
      </p>
  </section>
      <button onClick={() =>{alert( {} )} }> Add </button>
    </>
  )
}

export default App

