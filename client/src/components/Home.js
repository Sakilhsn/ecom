import React ,  { useState ,useEffect} from 'react'

const Home = () => {
  

    const [userName, setUserName] = useState('');
    const[show, setShow] = useState(false);
    
      const userHomePage = async () => {
        try {
          const res = await fetch('/getdata', {
            method: "GET",
            Headers: {
              "Content-Type": "application/json"
            },
          });
    
          const data = await res.json();
          console.log(data);
          setUserName(data.name);
          setShow(true);
    
          
        } catch (err) {
          console.log(err);
         
    
        }
      }
      
      useEffect(()=>{
        userHomePage();
      }, []);




  return (
    <> 
    <div className='home-page'>
      <div className='home-div'>
         <p className="pt-3">WELCOME</p>
         <h1><b>{userName}</b></h1>
        <h2>{ show ? "happy to see you back": "Hy We Are Mern Developer" }</h2>
      </div>
    </div>
       
    </>
  )
}

export default Home
