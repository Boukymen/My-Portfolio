import React, { useState } from 'react'
import './contact.scss';
import emailjs from 'emailjs-com';
export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm('service_ofo2bvk', 'template_fo9iq6t', e.target, 'user_fBgdUIWbhaeRSN60VMbW2')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <h1>Contact us</h1>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email" name="email" />
          <textarea className="text" required placeholder="Enter your message here" name="message"></textarea>
          <button type="submit" className="btn"> Send </button>
          {message && <span>Thanks, I'll reply ASAP 😊</span>}
        </form>
      </div>
    </div>
  )
}
