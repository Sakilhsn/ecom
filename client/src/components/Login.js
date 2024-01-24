import React from 'react'
import loginpic from '../Images/logo4.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
  <>
   <section className='sign-in'>
    <div className='container mt-5'>
        <div className='signin-content'>

        <div className='signin-image' >
              <figure>
            <img src={loginpic} alt='loginpic'/> 
            </figure>
            <NavLink to ='/signup' className='signup-image-link'>Create an account</NavLink>
            </div>

          <div className='signup-form'>
            <h2 className='form-title'> Sign In </h2>
            <form className='register-form' id='register-form'> 
               
            <div className='form-group'>
                 <label htmlFor='email'>
               <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input type='email' name='email' id='email' autoComplete='off' placeholder='Write your email'></input>
        
            </div>
           

            <div className='form-group'>
                 <label htmlFor='password'>
               <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input type='text' name='password' id='password' autoComplete='off' placeholder='Write your password'></input>

            </div>

            <div className='form-group form button' >
              <input type='submit' name='signin' id='signin' className='form-submit'
              value="Log In"/>
      
            </div>
            </form>
            </div>
           

         


        </div>

    </div>
    
    
    </section>
  
  </>
  )
}

export default Login