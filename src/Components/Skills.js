import React from 'react'
import dev from '../images/webdev.png'
import design from '../images/design.png'



export default function Skills() {
    return (
        <div className='skillsPage'>
            <section>
                <div className="dev">
            
                    <img src={dev} alt="dev" />
                    <span>Web Development</span>
                </div>
                <div className="design">

                    <img src={design} alt="design" />
                    <span>UI/UX design</span>
                </div>
            </section>
        </div>
    )
}
