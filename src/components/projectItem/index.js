import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function ProjectItem(props) {
    const {name, id, description, image}=props.item
    

//     const one=useRef(null)


//     useEffect(()=>{

//         gsap.fromTo(one.current, {  transform:"scale(0.5)"}, { transform:"scale(1.5)", duration:1.5, ease:"slow(0.7,0.7,false)",
        
//     })


// },[props])
   
   
  return (
    <div className="container">
        <div className="p_box"  onMouseEnter={()=>console.log("card")} >
        <div className="flip_card" onClick={()=>console.log("flip")}>
          <p style={{fontSize:"15px"}}>{description}</p>
            <button>View Project</button>
        </div>
        <img src={image} className="p_img"/>
      <p>{name}</p>
     
    </div>
    </div>
  )
}

export default ProjectItem
