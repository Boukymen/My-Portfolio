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
            try{

                const res = await fetch(`${process.env.REACT_APP_API_ROOT_DOMAIN}/verify`, {
                    method: "POST",
                    body: JSON.stringify({captchaValue}),
                    headers: {
                        "content-type": "application/json",
                    },
                });
                const data = await res?.json();
                console.log(data)

                if (data.success) {
                    // make form submission
                    setMessage(true)
                    emailjs.sendForm('service_ylit6pf', 'template_b872x3o', event.target, 'user_fBgdUIWbhaeRSN60VMbW2')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });

                    event.target.reset();
                } else {
                    alert("reCAPTCHA validation failed!");
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact us</h1>
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>

            <div className="right">
                <form onSubmit={submitForm} style={{height: "500px",}}>
                    <input required type="email" placeholder="Email" name="email"
                           style={{borderRadius: 10, padding: 2}}/>
                    <input required type="name" placeholder="Name" name="name" style={{borderRadius: 10, padding: 2}}/>
                    <textarea className="text" required placeholder="Enter your message here..."
                              style={{borderRadius: 10, padding: 2}} name="message"></textarea>
                    <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_REACT_APP_SITE_KEY}/>
                    <button type="submit" className="btn"> Send</button>
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
