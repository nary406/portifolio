import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function ProjectItem(props) {
    const {name, id, description, image}=props.item
    
const {classy}=props

    const but=useRef(null)
    const contain=useRef(null)


    useEffect(() => {
      gsap.fromTo(
        but.current,
        { transform: "scale(0)" }, // initial state
        { transform: "scale(1)", duration: 1, ease: "slow(0.7,0.7,false)", scrollTrigger: {
            start: "top 90%",
            end: "top 60%",
            scrub: 3,
            trigger: classy.current,
          } 
        } // animate to scale 1
      );
    }, [props]);
    
   
   
  return (
    <div className="container" ref={but}  >
        <div className="p_box"  >
        <div className="flip_card" >
          <p style={{fontSize:"15px"}}>{description}</p>
            <button>View Project</button>
        </div>
        <img src={image} className="p_img"  ref={but}/>
      <p>{name}</p>
     
    </div>
    </div>
  )
}

export default ProjectItem
