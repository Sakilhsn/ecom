import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";


const App = () => {
    return (
        <BrowserRouter basename="/">
            <Navbar />
            <Routes>
                <Route path="/contact" element={<Contact/>} /> 
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/*" element={<Errorpage/>}/>
        
        
            </Routes>
        </BrowserRouter>
    )
}

export default App