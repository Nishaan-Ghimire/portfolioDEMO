import React from 'react'
import aboutPerson from '../images/about.png';

export default function About() {
  return (
    <div className='aboutPage'>

      <section>
        <div className="mydescription">
          <h1>Who am I???</h1>
          <p>
            I am a Computer Engineering student,  a tech enthusiast<br/>
            always trying to create something new with my<br/>
            knowledge and passion. I am a Web Applications and<br/>
            game Developer, Cyber Security Researcher and<br/>
            UI/UX Designer with some writing skills.<br/>
          </p>
        </div>
<div className="myimg">
        <img src={aboutPerson} alt='person'></img>

</div>
      </section>

    </div>
  )
}
