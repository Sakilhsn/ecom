import React , {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css' ;
import { NavLink } from 'react-router-dom';
import logo from "../Images/logo2.png" ;
import { UserContext } from '../App';

const Navbar = () => { 
  const {state,dispatch} =  useContext(UserContext);

  const RenderMenu =() =>{
    if(state){
      return(
        <>
         <li className="nav-item active">
          <NavLink className="nav-link " to="/">Home  <span className ="sr-only">(current)</span></NavLink>
        </li>                         
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }else{
      return(
        <>
         <li className="nav-item active">
          <NavLink className="nav-link " to="/">Home  <span className ="sr-only">(current)</span></NavLink>
        </li>                         
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Registration</NavLink>
        </li>
        
        </>
      )
    }

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:'space-between'}}>
    <NavLink className="navbar-brand" to="#">
      <img src={logo} alt='logo' width={100}/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow:0}}>
      <ul className="navbar-nav ml-auto">
       
    <RenderMenu/>
      </ul>
    </div>
  </nav>
    
    </>
        
  )
}

export default Navbar