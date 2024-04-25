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
      "name": "Static Product",
      "image": "https://example.com/image1.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam aliquet libero, ac convallis dolor suscipit vel.",
      "id": "static_1",
      "type": "static"
    },
    {
      "name": "Dynamic Product",
      "image": "https://example.com/image2.jpg",
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "id": "dynamic_2",
      "type": "dynamic"
    },
    {
      "name": "Responsive Product",
      "image": "https://example.com/image3.jpg",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis convallis orci ac lectus malesuada tempor.",
      "id": "responsive_3",
      "type": "responsive"
    },
    {
      "name": "Additional Static Product",
      "image": "https://example.com/image5.jpg",
      "description": "Fusce vitae justo eu libero ultrices fermentum. Sed nec tincidunt mauris, ac fringilla lorem.",
      "id": "static_5",
      "type": "static"
    },
    {
      "name": "Additional Dynamic Product",
      "image": "https://example.com/image6.jpg",
      "description": "Etiam non ex non justo convallis accumsan. Nam ultricies turpis id nisl vehicula, id aliquet eros cursus.",
      "id": "dynamic_6",
      "type": "dynamic"
    },
    {
      "name": "Additional Responsive Product",
      "image": "https://example.com/image7.jpg",
      "description": "Donec eu ex vel metus vestibulum tempus vel a velit. Nulla facilisi.",
      "id": "responsive_7",
      "type": "responsive"
    }
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
    <div className="p_main">
      <h1>Projects</h1>

      <ul className="p_tabs" >
      <Extra left={colorTab} className={ `same ${colorTab}`}></Extra>
        <li >
        <button   className="p_disible_btn"  id="all" onClick={allFunc}>All</button></li>

       <li >
       <button className="p_disible_btn"  id="static" onClick={statFunc}>Static</button></li>

       <li >
       <button  className="p_disible_btn"  id="dynamic" onClick={dynFunc}>Dynamic</button></li>

       <li >
       <button  className="p_disible_btn" id="responsive" onClick={resFunc}>Responsive</button></li>
      
      </ul>
      
     

     <div className='p_div' >
        {finalData.map((item)=> <ProjectItem  test={activeTab} item={item} key={item.id}/>)}
     </div>
    </div>
  )
}

export default Projects
