import React, { useEffect, useRef } from 'react'
import './intro.scss'
import {init} from 'ityped'
export default function Intro() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor:true,
      backDelay: 1500,
      backSpeed: 60,
      strings:["Developper", "Designer", "Content Creator", "Software Engineer"]
    })
    // console.log(textRef);
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.png" alt="CEO" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          
          <h2>Hi, there, I'm</h2>
          <h1>Bouky King</h1>
          <h3>Freeelance <span ref={textRef}></span> </h3>
        </div>
        <a href="#portfolio" className="">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
