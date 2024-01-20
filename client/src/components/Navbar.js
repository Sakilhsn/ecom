import React from 'react'
import 'bootstrap/dist/css/bootstrap.css' ;
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link " href="/">Home  <span class ="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="/About">About</NavLink>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Signup">Registration</a>
        </li>
    
      </ul>
    </div>
  </nav>
    
    </>
        
  )
}

export default Navbar