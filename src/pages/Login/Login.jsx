import React, { useState } from 'react'
import "./login.css"
import logo from '../../assets/logo.png'


const Login = () => {

const [signState, setSignState]= useState("Sign In")

  return (
    <div className='login'> 
      <img src={logo} className='login-logo' alt="" />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Enter Password' />
          <button>{signState}</button>
          <div class="form-help">
            <div class="remember">
              <input type="checkbox" />
              <label htmlfor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div class="form-switch">
          {signState==="Sign In"?
            <p>New to Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
            :
             <p>Already have account ? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>
          }

        </div>
      </div>
    </div>
  )
}

export default Login