import React, { useState } from 'react'
import './login.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Login() {

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [showPassword,setshowPassword] = useState(false)


// handle after clicking on login
  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(email , password)
  }

// go to signup page function
  const navigate = useNavigate();
  const signup = ()=>{
    navigate('/signup')
  }

  // password visibility
  const visiblePassword = (e)=>{
    e.preventDefault()
    setshowPassword(!showPassword)
  }

  //google button
  const googleLogin = (e)=>{
    e.preventDefault()
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=YOUR_SCOPE";
  }


  return (
    <>
      <div id='main'>
      <div id='left'>
        <p> WELCOME BACK ! TO</p>
        <p id='head'>CAMPUS COVE</p>
        <p id='head-2'>CAMPUS COVE</p>
        <p id='head-3'>CAMPUS COVE</p>
      </div>
      <div id='right'>
        <form>

          <label htmlFor="Email">Email</label>

          <input 
          type="email" 
          placeholder='Ex - ayush@gmail.com' 
          id='email' 
          value={email} 
          onChange={(e)=>(setemail(e.target.value))} />

          <label htmlFor="Password">Password</label>

          <input 
          type={showPassword ? 'text' : 'password'}
          id='password' 
          placeholder='* * * * * * * * * *' 
          value={password} 
          onChange={(e)=>(setpassword(e.target.value))}/>

          <br />
          <button id='eye' onClick={visiblePassword}>{showPassword ? '🙈' : '👁️'}</button>

          <button id='login' onClick={handleLogin}>Login</button>
          <br />

          <div class="divider">OR Continue With</div>
          <br />
          <div id='buttons'>
            <button onClick={googleLogin}><img src="./Images/google.png" alt="" /></button>
            <p> | </p>
            <button><img src="./Images/facebook.png" alt="" /></button>
          </div>

          <br />

          <p id='again'>New to campus cove ? <NavLink onClick={signup} id='extra'> SIGN UP </NavLink> instead</p>
          
        </form>
      </div>
      </div>
      <footer id='foot'>
        <div>"Your space to connect and share awaits - </div>
        <div>log in to dive back in!"</div>
      </footer>
    </>
  )
}

export default Login