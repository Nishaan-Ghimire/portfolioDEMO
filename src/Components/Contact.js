import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';





export default function Contact() {

    const handleNameChange = (event)=>{
        updateName(event.target.value);
        }
        const handleEmailChange = (event)=>{
            updateEmail(event.target.value);
        }
        const handleSubjectChange = (event)=>{
            updateSubject(event.target.value);
        }
        const handleMessageChange = (event)=>{
            updateMessage(event.target.value);
        }


    const[name,updateName] = useState('');
    const[email,updateEmail] = useState('');
    const[subject,updateSubject] = useState('');
    const[message,updateMessage] = useState('');



  return (
    <div className='contactPage'>
 

<div className="body">
        <div className="title">
            <span>Reach out for a new project</span>
        </div>
        <div className="contact_form">
            <span className="head"> Send us a message</span>
            <div className="contactform">
                <form action="/post" onSubmit={handleEvent} className='myform' method='post'>
                    <div className="inputBox">
                        <input type="text" name='name' value={name} onChange={handleNameChange} id='name' required="required"/>
                        <span>Your Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="email" name='email' value={email} onChange={handleEmailChange} id='email' required="required"/>
                        <span>Your Email</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name='subject' value={subject} onChange={handleSubjectChange} id='subject' required="required"/>
                        <span>Subject</span>
                    </div>
                    <div className="inputBox">
                        <textarea required="required" id='message' value={message} onChange={handleMessageChange} name='message'></textarea>
                        <span>Message</span>
                    </div>
                    <div className="inputBox">
                    <button className='submitBtn' type="btn">Send</button>

                    </div>
                </form>
            </div>
        </div>


        <div className="reach_me">
            <div className="mail">
                <span>My Email</span>
                <p>nishanghimire50@gmail.com</p>
            </div>

            <div className="call">
                <span className="title">
                    Call me
                </span>
                <span className="mo">
                   Mobile: (+977)9862661955
                </span>
                <span className="lan">
              Landline:  (+01)345678
                </span>
            </div>


            
        <div className="lg"><Link to="/dashboardnishan123">dashboard</Link></div>
     
            
        </div>
    </div>





    </div>
  )
}

const handleEvent = ()=>{
    console.log('clicked')
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;
let message = document.getElementById('message').value;
if(name === ""|| email === "" || subject === "" || message === ""){
    alert("Please fill all fields..");
}else{
    let messageObj = {
        name : name,
        email : email,
        subject : subject,
        message : message
            }
           
            console.log('/post',messageObj);
          
            axios.post('/post', messageObj).then((res) => {
                 name = "";
                email = "";
                subject = "";
                 message =  "";
              alert("Message send..");
                console.log(res);
            }).catch((err) => {
               alert("Send failed..please contact admin via email");
                console.log(err);
                console.log("Send failed");
         
            });
}

}
