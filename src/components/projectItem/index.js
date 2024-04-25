import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from 'react';
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function ProjectItem(props) {
    const {name, id, description, image}=props.item
    const {activeTab}=props.test

    const one=useRef(null)


    useEffect(()=>{

        gsap.fromTo(one.current, {  transform:"scale(0.5)"}, { transform:"scale(1.5)", duration:1.5, ease:"slow(0.7,0.7,false)",
        
    })


},[props])
   
   
  return (
    <div style={{width:"100px", height:"100px", background:"white", margin:"40px", borderRadius:"10px"}}  ref={one}>
      <p>{name}</p>
    </div>
  )
}

export default ProjectItem
