import React, { useState } from 'react'
import './contact.scss'

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
    
  }
  return (
    <div className="contact" id="contact">
      <h1>Contact us</h1>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email"/>
          <textarea className="text" required placeholder="Enter your message here"></textarea>
          <button type="submit" className="btn"> Send </button>
          {message && <span>Thanks, I'll reply ASAP 😊</span>}
        </form>
      </div>
    </div>
  )
}
