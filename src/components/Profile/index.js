import React, { useState, useRef, useEffect} from 'react';
import { SlCloudDownload } from "react-icons/sl";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { Profile } from "./styledComponents";
import SocialButtons from '../socialicons';
import "./index.css";

gsap.registerPlugin(ScrollTrigger)

const Profilesection = () => {
const des=useRef(null)
const pic=useRef(null)

useEffect(()=>{

  gsap.fromTo(des.current, {x:"-900px", opacity:0 }, {x:"0px", opacity:1, duration:1, ease:"slow(0.7,7.7,false)",
  
  });
  
  gsap.fromTo(pic.current, {opacity:0, x:"900px", }, {x:"0px", opacity:1, duration:1,  ease:"slow(0.7,7.7,false)",
  
  
  })
  
  
    })
    
  


  return (
    <Profile  >
      <div className="profile-description " ref={des}  >
       <div className="typewriter">
       <h1  style={{fontFamily: "julius sans one"}}>
          Hi, I'am
          <span > N</span>
          arendra
        </h1>
     
       </div>
       <div >
        <br/>
       <h1 style={{fontSize:"30px", fontFamily:"julius sans one", color:"white"}}>
          I'am a
          <span style={{ fontSize: "40px" }}> F</span>
          ull Stack Developer
        </h1>
     
       </div>
       <br/>
        <p style={{ fontFamily: "Comfortaa", fontWeight: "900px", color:"white", fontSize:"17px" }}>
        I'm a web developer skilled in HTML, CSS, JavaScript, ReactJS, and more. I work on both front-end and back-end technologies, such as Node.js, Express, SQL,  and MongoDB. I keep up with industry trends and am ready to contribute to your team's success.</p>
      
        <div className='button_div'>   
<div>
          <button className="download">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
             
                  <SlCloudDownload />
               
              </div>
            </div>
            <span>Download CV</span>
          </button>

        
        </div>
        <SocialButtons/>
         </div>

      </div>
      <section className="banner " >
        <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1715013940/thumb_2_oyjyqk_2202c3.png" alt="Avatar" style={{ zIndex: 1 }} ref={pic} />
      </section>
    </Profile>
  );
};

export default Profilesection;
