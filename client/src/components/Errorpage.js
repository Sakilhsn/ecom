import React from 'react'
import { NavLink } from 'react-router-dom'

export const Errorpage = () => { 
  return (
<> 
  <div id='notfound'>
    <div className='notfound'>
        <div className='not found-404'>
            <h1>404</h1>
        </div>
        <h2> we are sorry ,page not found</h2>
      </div>
    </div>

    <p>
        <NavLink to="/">Go Back To HomePage</NavLink>
    </p>

</> 
  )
}

export default Errorpage
