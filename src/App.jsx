/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './App.css'

import React, { useState } from "react";

export const GlobalContext = React.createContext();

const initialActivities = [
  { id: 1, description: 'Do dishes', completed: true },
  { id: 2, description: 'Do groceries', completed: false },
  { id: 3, description: 'Do laundry', completed: false },
];


function App () {
  const [toDoList, setToDoList] = useState(initialActivities);

  return (
  <>  
    <Grid container spacing={3}>
      <BrowserRouter>
        <Grid md={3} >
          {/* <ul className="nav-bar"> */}
          <ol className="nav-bar">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/todo" activeClassName="active">To dos</NavLink>
            <NavLink to="/about" activeClassName="active">About us</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact us</NavLink>
          </ol>
          {/* </ul> */}
        </Grid>

        <Grid md={9} >
          <GlobalContext.Provider value= {[toDoList, setToDoList]}> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="ToDo" element={<ToDo />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </GlobalContext.Provider>

        </Grid>

      </BrowserRouter>
    </Grid>
  </>
  )
}


export default App