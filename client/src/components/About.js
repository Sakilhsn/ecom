import React, { useEffect, useState } from 'react'
import sakilpic from "../Images/lokgo3.png";
import farhanpic from "../Images/farhan.png";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate =useNavigate();
const [userData, setUserData] = useState({});

  

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        Headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');

    }
  }
  
  useEffect(()=>{
    callAboutPage();
  }, []);


  return (
    <>
      <div className='container emp-profile'>
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className='profile-img'>
                < img src={userData.name ==="Sakil Hossain" ? sakilpic:farhanpic} alt='sakil' />
              </div>

            </div>



            <div className="col-md-5">
              <div className='profile-head'>
                <h5>{ userData.name}</h5>
                <h6>{ userData.work}</h6>
                <p className='profile-rating mt-5 mb-5'>RANKING :<span> 1/10</span></p>


                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                  </li>

                </ul>
              </div>

            </div>

            <div className='col-md-2'>
              <input type="submit" className='profile-edit-btn' name="btnAddmore" value="Edit Profile" />
            </div>
          </div>

          <div className='row'>
            {/*left side url*/}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORKLINK</p>
                <a href='www.linkedin.com/in/sakil-hossain' target='sakil'>LINKEDIN</a><br></br>
                <a href='https://www.youtube.com/watch?v=Z2pEwkdkmwo' target='sakil'>YOUTUBE</a><br></br>
                <a href='https://www.facebook/' target='sakil'>FACEBOOK</a><br></br>
                <a href='https://www.youtube.com/watch?v=Z2pEwkdkmwo' target='sakil'>INSTAGRAM</a><br></br>
              </div>
            </div>



            {/*right side url*/}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData._id}</p>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.name}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.email}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.phone}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{ userData.work}</p>
                    </div>
                  </div>

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>experience</label>
                    </div>
                    <div className='col-md-6'>
                      <p>expert</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Hourly rate</label>
                    </div>
                    <div className='col-md-6'>
                      <p>2000</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>total experience</label>
                    </div>
                    <div className='col-md-6'>
                      <p>6 months</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </form>
      </div>
    </>
  )
}

export default About