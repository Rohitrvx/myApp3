import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div>
      <div className="sign-Container">
        <h2>Sign In</h2> <br />
        <p>Enter Your Email Id</p>
        <input type="email" placeholder='Enter Your Email Id' />
        <p>Enter the Password</p>
        <input type="password" placeholder='Enter Password'/>
        <br />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Signup
