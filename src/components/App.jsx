import './App.css'

import React from "react";
import NavBar from "./Navbar/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {

    return (
        <Router className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactme' element={<ContactMe />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Router>
    )
}

export default App