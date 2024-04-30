import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function ProjectItem(props) {
    const {name, id, description, image}=props.item
    
    

 
   
   
  return (
    <div className="container" >
        <div className="p_box"  >
        <div className="flip_card" >
          <p style={{fontSize:"15px"}}>{description}</p>
            <button>View Project</button>
        </div>
        <img src={image} className="p_img"  />
      <p>{name}</p>
     
    </div>
    </div>
  )
}

export default ProjectItem
