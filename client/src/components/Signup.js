import React, { useState } from 'react'
import signpic from "../Images/logo1.png";
import { NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();
  

  const [user, setUser] = useState({
    name: " ", email: "", work: "", phone: "", password: "", cpassword: ""
  });
  let name, value;

  const HandelInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, work, phone, password, cpassword } = user;
    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
  },
  body:JSON.stringify({
    name, email, work, phone, password, cpassword
    
  })
    });
    const data = await res.json();

    if(data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
     } else{
      window.alert("registration succesfull");
      console.log(" registration sucessfull");

      navigate('/login');

      }
      
    }


  
  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'> Signup</h2>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type='text' name='name' id='name' autoComplete='off'
                    value={user.name}
                    onChange={HandelInputs}
                    placeholder='Write your name'></input>

                </div>
                <div className='form-group'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type='email' name='email' id='email' autoComplete='off'
                    value={user.email}
                    onChange={HandelInputs}
                    placeholder='Write your email'></input>

                </div>

                <div className='form-group'>
                  <label htmlFor='work'>
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type='text' name='work' id='work' autoComplete='off'
                    value={user.work}
                    onChange={HandelInputs}
                    placeholder='Write your work'></input>

                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input type='number' name='phone' id='phone' autoComplete='off'
                    value={user.phone}
                    onChange={HandelInputs}
                    placeholder='Write your phone'></input>

                </div>


                <div className='form-group'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type='password' name='password' id='password' autoComplete='off'
                    value={user.password}
                    onChange={HandelInputs}
                    placeholder='Write your password'></input>

                </div>

                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type='password' name='cpassword' id='cpassword' autoComplete='off'
                    value={user.cpassword}
                    onChange={HandelInputs}
                    placeholder='Write your cpassword'></input>

                </div>

                <div className='form-group form button' >
                  <input type='submit' name='signup' id='signup' className='form-submit'
                    value="Register" onClick={PostData} />

                </div>
              </form>
            </div>
            <div className='signup-image' >
              <figure>
                <img src={signpic} alt='Register' />
              </figure>
              <NavLink to='/login' className='signup-image-link'>I am already register </NavLink>
            </div>




          </div>

        </div>


      </section>

    </>
  );
}

export default Signup
