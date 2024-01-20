import React from 'react'
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home" ;
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";


const App = () => {
  return (
    <>
       <Navbar/>
       <Route path= "/">
           <Home/>
       </Route>

       <Route  path= "/About">
           <About/>
       </Route>
       <Route  path= "/Contact">
           <Contact/>
       </Route>

       <Route  path= "/Login">
           <Login/>
       </Route>

       <Route  path= "/Singup">
           <Signup/>
       </Route>
        </>
  )
}

export default App