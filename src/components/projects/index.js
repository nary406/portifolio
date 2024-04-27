import React from 'react'
import   "./index.css";
import {Extra} from "./styledcomponents"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import ProjectItem from '../projectItem';
import { useRef, useEffect, useState } from 'react';
gsap.registerPlugin(ScrollTrigger)
const projectData=[
    {
      "name": "Nxt Trends",
      "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714152034/ecommerce_qi2w8v.jpg",
      "description": "Shopping websites: Online destinations for browsing and purchasing various consumer products.",
      "id": "responsive_1",
      "type": "responsive"
    },
    {
        "name": "Nxt Trends",
        "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714152034/ecommerce_qi2w8v.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam aliquet libero, ac convallis dolor suscipit vel.",
        "id": "responsive_2",
        "type": "responsive"
      },
      {
        "name": "Nxt Trends",
        "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714152034/ecommerce_qi2w8v.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam aliquet libero, ac convallis dolor suscipit vel.",
        "id": "responsive_3",
        "type": "responsive"
      },
   
  ]
  
  

function Projects() {
    
    const [activeTab, setTab]=useState("all")
    const [colorTab, setcolor]=useState("first_one")

        
        // gsap.fromTo(two, {opacity:0, x:"900px", }, {x:"0px", opacity:1, duration:1, ease:"slow(0.7,0.7,false)",
        
        //  scrollTrigger:{
        //   start:"top 80%",
        //   end:"top 50%",
        // scrub:3,
        //   trigger:el,
        // }})
        
        // // Skill heqd
        
        // gsap.fromTo(el, {opacity:0, y:"-90px",}, {y:"0px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
        //   start:"top 80%",
        //   end:"top 50%",
        //   scrub:3,
        //   trigger:el,
        
        // }});
        
        // gsap.fromTo(hrl.current, {opacity:0, x:"-580px",}, {x:"-70px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
        //   start:"top 80%",
        //   end:"top 50%",
        //   scrub:3,
        //   trigger:el,
         
        // }});
        
        // gsap.fromTo(hrr.current, {opacity:0, x:"580px",}, {x:"70px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
        //   start:"top 80%",
        //   end:"top 50%",
        //   scrub:3,
        //   trigger:el,
        // }});
        

const filterdData=projectData.filter((item)=>item.type===activeTab)
const finalData=filterdData.length===0?projectData:filterdData


const allFunc=(e)=>{
    setcolor("first_one")
     setTab(e.target.id) 
}

const statFunc=(e)=>{
    setcolor("second_one")
     setTab(e.target.id) 
}


const dynFunc=(e)=>{
    setcolor("third_one")
     setTab(e.target.id) 
}
const resFunc=(e)=>{
    setcolor("fourth_one")
     setTab(e.target.id) 
}
  return (

  <div className='p_img_pros'>
     <h1 style={{fontFamily:"j", textAlign:"center", fontWeight:"00"}}>Projects</h1>

     <div className="project_container">
     <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1714245663/4058742_2130165_jmxypu.svg" className="mob_Img"/>
       <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1714244454/agile_method-amico_ude0mr.svg" className="desk_Img"/>
     <div className="p_main">
     

      <ul className="p_tabs" >
      {/* <Extra  width={activeTab} className={ `same ${colorTab}`}></Extra> */}
        <li >
        <button  className={`${activeTab==="all"?"p_active_btn":"p_disible_btn"}  `}  id="all" onClick={allFunc}>All</button></li>

       <li>
       <button className={`${activeTab==="static"?"p_active_btn":"p_disible_btn"}  `}  id="static" onClick={statFunc}>Static</button></li>

       <li >
       <button  className={`${activeTab==="dynamic"?"p_active_btn":"p_disible_btn"}  `} id="dynamic" onClick={dynFunc}>Dynamic</button></li>

       <li >
       <button  width={activeTab} ton  className={`${activeTab==="responsive"?"p_active_btn":"p_disible_btn"}  `} id="responsive" onClick={resFunc}>Responsive</button></li>
      
      </ul>
      
     

     <div className='p_div' >
        {finalData.map((item)=> <ProjectItem  test={activeTab} item={item} key={item.id}/>)}
     </div>
    </div>
   </div>
  </div>
  )
}

export default Projects
