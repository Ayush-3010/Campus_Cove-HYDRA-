import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
    <>
        <nav>
        <img id="logo" src="./Images/logo.png" alt="" />
        <li id="nav">
             <ul><NavLink to="/">HOME</NavLink></ul>
             <ul><NavLink to='login'>LOGIN</NavLink></ul>
             <ul><NavLink to="signup">SIGN UP</NavLink></ul>
             {/* <ul><NavLink to="https://www.cricbuzz.com">ABOUT US</NavLink></ul> */}
        </li>
        
    </nav> 
    </>
  )
}

export default Header