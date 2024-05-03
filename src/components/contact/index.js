import React from 'react'
import "./index.css"

import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import {useEffect, useRef, useState} from "react"

gsap.registerPlugin(ScrollTrigger)


function Contact() {

    const left=useRef(null)
    const right=useRef(null)

    useEffect(()=>{
        
        
        
        gsap.fromTo(left.current, {x:"-500px", opacity:0 }, {x:"0px",  ease:"slow(0.7,0.7,false)",
           scrollTrigger:{
             start:"top 90%",
             end:"top 50%",
             scrub:3,
             trigger:".con_main",
            
           }
        });
        
        gsap.fromTo(right.current, {opacity:0, x:"500px", }, {x:"0px",   ease:"slow(0.7,0.7,false)",
        
         scrollTrigger:{
          start:"top 90%",
          end:"top 50%",
        scrub:3,
          trigger:".con_main",
        }})
        
        
        
     
        
         
        
        }, [])
        



  return (
    <div className="con_main">
        <h3>We can do better world , learning and sharing knowledge</h3>
    <div className="con_section">
    <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1714453090/Email_campaign-amico_eb8kzv.svg" ref={left}/>
     <form className="form_div"  ref={right}>
        <h2>Get in Touch</h2>
        <input id="name" type="search" placeholder="Name"/>

        <input id="mail" type="search"   placeholder="Email"/>
       
         <textarea id="message"  placeholder="Type your message"></textarea>
        
        <button>Submit</button>
     </form>
    </div>
    </div>
  )
}

export default Contact
