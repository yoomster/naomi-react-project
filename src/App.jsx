/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './App.css'

function App () {
  return (
    <>  
    <Grid container spacing={2}>
      <BrowserRouter>
      <Grid md={4} >

          <ul className="nav-bar">
          <ol>
            <Link to="/home">Home</Link>
          </ol>
          <ol>
            <Link to="/todo">To Do list</Link>
          </ol>
          <ol>
            <Link to="/about">About us</Link>
          </ol>
          <ol>
            <Link to="/contact">Contact us</Link>
          </ol>
          </ul>
        </Grid>


        <Grid md={8} >
          <Routes>

            <Route  path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="ToDo" element={<ToDo />} />
            <Route path="Contact" element={<Contact />} />

          </Routes>
        </Grid>

      </BrowserRouter>
    </Grid>
  </>
  )
}


export default App