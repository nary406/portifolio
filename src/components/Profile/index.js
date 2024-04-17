
import { Profile}from "./styledComponents"

import "./index.css"
import React from 'react';

const Profilesection = () => {
    return (
        <Profile className="profile-section">
           
            <div className="profile-description ">
                
                <h2 className="tracking-in-expand" >
                Hi, I'am
                    <span style={{fontSize:"80px"}}> N</span>
                      arendra
                     </h2>
                     <br/>
                     <br/>
                <p style={{fontFamily:"Comfortaa", fontWeight:"900px"}}>Welcome to my Full Stack Developer portfolio! I specialize in crafting seamless digital experiences from frontend to backend. I build robust, user-friendly web applications. Explore my projects to see how I blend creativity with technical excellence to deliver results that exceed expectations. Let's connect and discuss how we can bring your vision to life..</p>
            </div>
            <section className="banner scale-in-center" style={{height:"500px"}}>
       
        
         <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1713083725/portifolio_image_ghyaht_b85bd9.png" alt="Avatar"  style={{zIndex:1}}/>
       
      </section>

            
          
          
            </Profile>
    );
};

export default Profilesection;
