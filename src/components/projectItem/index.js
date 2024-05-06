import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function ProjectItem(props) {
    const {name, id, description, username, password, website, image}=props.item
    
    

 console.log(password)
   
   
  return (
    <div className="container"  >
        <div className="p_box"   >
        <div className="flip_card" >
          <p style={{fontSize:"12px"}} >{description}</p>
          <span style={{fontSize:"15px", margin:"0px"}}>Username: {username}</span>
          <span style={{fontSize:"15px",  margin:"0px"}}> {`Password: ${password.toLowerCase()}`}</span>
          <a href={website} target="_blank">
           <button> View Project</button>
            </a>
        </div>
        <img src={image} className="p_img"  />
      <p>{name}</p>
     
    </div>
    </div>
  )
}

export default ProjectItem
