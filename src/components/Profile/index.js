import React, { useState,useEffect} from 'react';
import { SlCloudDownload } from "react-icons/sl";
import { Profile } from "./styledComponents";
import SocialButtons from '../socialicons';
import "./index.css";
import { FaTwitter, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const Profilesection = () => {



  return (
    <Profile >
      <div className="profile-description ">
        <h2 className="tracking-in-expand">
          Hi, I'am
          <span style={{ fontSize: "60px" }}> N</span>
          arendra
        </h2>
        <br />
        <br/>
        <p style={{ fontFamily: "Comfortaa", fontWeight: "900px" }} className="">
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
      <section className="banner scale-in-center" style={{ height: "500px" }}>
        <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1713083725/portifolio_image_ghyaht_b85bd9.png" alt="Avatar" style={{ zIndex: 1 }} />
      </section>
    </Profile>
  );
};

export default Profilesection;
