import React from 'react'
import 'bootstrap/dist/css/bootstrap.css' ;
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:'space-between'}}>
      
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow:0}}>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link " href="/">Home  <span className ="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signup">Registration</a>
        </li>
    
      </ul>
    </div>
  </nav>
    
    </>
        
  )
}

export default Navbar