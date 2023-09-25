import React, {useRef, useState} from 'react'
import './contact.scss';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const recaptcha = useRef();
  const [message, setMessage] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
            alert("Please verify the reCAPTCHA!");
        } else {
            const res = await fetch(`${process.env.API_ROOT_DOMAIN}/verify`, {
                method: "POST",
                body: JSON.stringify({ captchaValue }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            if (data.success) {
                // make form submission
                setMessage(true)
                emailjs.sendForm('service_ofo2bvk', 'template_fo9iq6t', event.target, 'user_fBgdUIWbhaeRSN60VMbW2')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });

                event.target.reset();
            } else {
                alert("reCAPTCHA validation failed!");
            }
        }
    }
  return (
    <div className="contact" id="contact">
      <h1>Contact us</h1>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <form onSubmit={submitForm}>
          <input required type="email" placeholder="Email" name="email" />
          <input required type="name" placeholder="Name" name="name" />
          <textarea className="text" required placeholder="Enter your message here" name="message"></textarea>
            <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
            <button type="submit" className="btn"> Send </button>
            {message && <span>Thanks, I'll reply ASAP 😊</span>}
        </form>
      </div>
    </div>
  )
}
//
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     setMessage(true)
//     emailjs.sendForm('service_ofo2bvk', 'template_fo9iq6t', e.target, 'user_fBgdUIWbhaeRSN60VMbW2')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//
//     e.target.reset();
// }
