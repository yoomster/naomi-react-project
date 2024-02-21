/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";

import './App.css'


function App () {

  return (
    <>  
    <BrowserRouter>

      <div className="nav-bar">
        <ul>
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

    <Routes>
      <Route  path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="Contact" element={<Contact />} />
    </Routes>
    </div>

  </BrowserRouter>
  </>
  )
}


export default App