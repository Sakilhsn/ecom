import React from 'react'

const Contact = () => {
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
            <form id='contact-form'>
              <div className='contact-form-name d-flex justify-content-start align-items-center '>
              <input type='text' name='name' id='contact-form-name' autoComplete='off' placeholder='Write your name' required={true}></input>
              <input type='text' name='email' id='contact-form-email' autoComplete='off' placeholder='Write your email' required={true}></input>
              <input type='number' name='phone' id='contact-form-number' autoComplete='off' placeholder='Write your number' required={true}></input>
              </div>
              <div className='contact-form-text mt-4'>
                <textarea className='text-field contact-form-message' placeholder='Message' cols='74' rows='10'>
                  
                </textarea>
              </div>
              <div className='contact-form-button'>
                <button type='submit' className='button-submit'>
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