import React from 'react'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'

export default function Footer() {
  return (
    <div className='footer'>
     <div></div>
     <div className="links">
     <a href={"https://twitter.com/NishanGhimire92"} target={"_blank"}> <img src={twitter} alt=""></img></a>
     <a href={"https://www.instagram.com/__nishaann__/"} target={"_blank"}>   <img src={instagram} alt=""></img></a>
     <a href={"https://www.facebook.com/profile.php?id=100009553403782"} target={"_blank"}>   <img src={facebook} alt=""></img></a>
     <a href={"https://www.linkedin.com/in/nishan-ghimire/"} target={"_blank"}>   <img src={linkedin} alt=""></img></a>
     </div>
    </div>
  )
}
