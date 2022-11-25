import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


export default function Navbar(props) {
  return (
   
   <nav>
    <div className="logo">
    
      <img src={logo} alt="logo"/>
    </div>
    <a href={"#"} className='toggleBtn' onClick={props.toggle}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      {/* <span>THis</span> */}
    </a>
    <div className="links">
        <ul className='nav-links active'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      
       
        </ul>
    </div>
   </nav>

  )
}


