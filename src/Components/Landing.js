import React from 'react'
import circle from '../images/circle.png'
import landingPerson from '../images/landingPerson.png'


export default function Landing() {
  return (
    <div className='landing-wrapper'>
      <section>
        <div className="left-section">
           <div className="title">
              <span>Hi I'm Nishan Ghimire</span>

           </div>
              <div className="content">
              <p>Waiting for a project and helping out people for 
               <br /> bringing their their idea into reality</p>
              </div>
              <div className="circle">
                <img src={circle} alt = 'circle'/>
              </div>



       <div className="bottom-section">
        <div className="project-no">
         <span>  Total Projects: </span>
          <br/> <span> &nbsp;&nbsp;&nbsp;&nbsp; 10+ </span>
        </div>

        <a href={"/contact"}> Hire me {'-->'}</a>
       </div>

        </div>
        <div className="right-section">
        <img src={landingPerson} alt='person'/>
        </div>
       


      </section>
    </div>
  )
}
