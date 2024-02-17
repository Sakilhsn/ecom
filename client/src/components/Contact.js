import React, { useState ,useEffect} from 'react' 

const Contact = () => {

  const [userData, setUserData] = useState({name: "",email:"", phone:"", message:""});
  
    const userContact = async () => {
      try {
        const res = await fetch('/getdata', {
          method: "GET",
          Headers: {
            "Content-Type": "application/json"
          },
        });
  
        const data = await res.json();
        console.log(data);
        setUserData({...userData , name:data.name, email:data.email,phone:data.phone});
  
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
  
      } catch (err) {
        console.log(err);
       
  
      }
    }
    
    useEffect(()=>{
      userContact();
    }, []);

//we are storing data in states 

const handleInputs=(e) => {
  const name= e.target.name;
  const value=e.target.value;
  setUserData({...userData , [name]:value});

} 

// send the data to the backend

const contactForm = async(e) => {
  e.preventDefault();

  const {name , email , phone , message}= userData
  const res = await fetch('/contact' , {
    method: "POST",
    headers : {
    "Content-Type" : " appliaction/json" 
  },
  body:JSON.stringify({
    name, email ,phone, message
  })
});

const  data =  await res.json();

if (!data){
  console.log("message couldn't get sent ");
}else{
  alert("message successfully sent ");
  setUserData({...userData, message: ""})
}

}


  return (
    <>
    <div className='contact-info'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
             {/*phone number*/}

            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src='https://img.icons8.com/?size=80&id=108644&format=png' alt='phone'/>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                  phone
                </div>
                <div className='contact-info-text'>
                  +91 3247 3467 846578
                </div>
              </div>
            </div>
             {/*email number*/}
             <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src='https://img.icons8.com/?size=80&id=108813&format=png' alt='email'/>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                 Email
                </div>
                <div className='contact-info-text'>
                 sakilhossain7430.com
                </div>
              </div>
            </div>

             {/*ADDRESS number*/}

            <div className='contact-info-item d-flex justify-content-start align-items-center'>
              <img src='https://img.icons8.com/?size=80&id=113795&format=png' alt='Address'/>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                 Address
                </div>
                <div className='contact-info-text'>
                  Kolkata,west bengal
                </div>
              </div>
            </div>
            

          </div>


        </div>





      </div>




    </div>
     {/* contact us form*/}

     <div className='contact-form'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
          <div className='contact-form-container py-5'>
            <div className='contact-form-title'>
              Get in Touch
            </div>
            <form method='POST' id='contact-form'>
              <div className='contact-form-name d-flex justify-content-start align-items-center '>
              <input type='text' name='name' id='contact-form-name' autoComplete='off' value={userData.name} onChange={handleInputs} placeholder='Write your name' required={true}></input>
              <input type='text' name='email' id='contact-form-email' autoComplete='off' value={userData.email} onChange={handleInputs} placeholder='Write your email' required={true}></input>
              <input type='number' name='phone' id='contact-form-number' autoComplete='off' value={userData.phone} onChange={handleInputs} placeholder='Write your number' required={true}></input>
              </div>
              <div  className='contact-form-text mt-4'>
                <textarea className='text-field contact-form-message' name='message' value={userData.message} onChange={handleInputs} placeholder='message' cols='74' rows='10'>
                  
                </textarea>
              </div>
              <div className='contact-form-button'>
                <button type='submit' className='button-submit' onClick={contactForm}>
                  Send Message
                </button>
              </div>

            </form>

          </div>
          </div>
        </div>
      </div>
     </div>
    
    </>
    
  

  )
}

export default Contact