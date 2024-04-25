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
    <Profile >
      <div className="profile-description " ref={des} >
       <div className="typewriter">
       <h1 className="tracking-in-expand">
          Hi, I'am
          <span style={{ fontSize: "60px" }}> N</span>
          arendra
        </h1>
     
       </div>
       <div >
        <br/>
       <h1 style={{fontSize:"30px", fontFamily:"Comfortaa", color:"white"}}>
          I'am a
          <span style={{ fontSize: "40px" }}> F</span>
          ull Stack Developer
        </h1>
     
       </div>
       <br/>
        <p style={{ fontFamily: "Comfortaa", fontWeight: "900px", color:"white", fontSize:"17px" }}>
          Welcome to my Full Stack Developer portfolio! I specialize in crafting seamless digital experiences from frontend to backend. I build robust, user-friendly web applications. Explore my projects to see how I blend creativity with technical excellence to deliver results that exceed expectations. Let's connect and discuss how we can bring your vision to life..
        </p>
      
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
        <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1713083725/portifolio_image_ghyaht_b85bd9.png" alt="Avatar" style={{ zIndex: 1 }} ref={pic} />
      </section>
    </Profile>
  );
};

export default Profilesection;
