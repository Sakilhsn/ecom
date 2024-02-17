import React, { createContext, useReducer } from 'react';
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
import Logout from "./components/Logout";




// 1: contextAPI 
export const Context = createContext();


const Routing = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Errorpage />} />
                <Route path="/logout" element={<Logout />} />


            </Routes>
        </BrowserRouter>

    )
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (


        <>
            <UserContext.Provider value={state, dispatch}}>

            <Navbar />
            <Routing />

        </UserContext.Provider >
        </>
            )
        
}

export default App