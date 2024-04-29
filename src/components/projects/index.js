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
      name: "Nxt Trends",
      "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714321868/21726902_6509982_ghdccw.jpg",
      "description": "Shopping websites: Online destinations for browsing and purchasing various consumer products.",
      "id": "responsive_1",
      type: "responsive"
    },
    {
      name: "Jobby App",
        "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714321149/Screenshot_2024-04-28_214408_d3xk5b.png",
        "description": "Job websites: Platforms connecting job seekers with employment opportunities online.",
        "id": "responsive_2",
        type: "responsive"
      },
      {
        name: "Youtube Clone",
        "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714326409/Screenshot_2024-04-28_214220-Photoroom_bpqlxd.png",
        "description": "YouTube websites: Platforms hosting videos for entertainment, education, and information sharing online.",
        "id": "responsive_3",
        type: "responsive"
      },
      {
        name: "TodoList",
        "image": "https://res.cloudinary.com/dky72aehn/image/upload/v1714321102/8810413_tk7y4a.jpg",
        "description": "TodoList: Organize tasks, manage priorities, track progress, and enhance productivity effectively.",
        "id": "responsive_4",
        type: "dynamic"
      },
   
  ]
  
  

function Projects() {
    
    const [activeTab, setTab]=useState("all")
  

      
    const element=useRef(null)
    const image=useRef(null)
    const div=useRef(null)
    const prl=useRef(null)
    const down_ani=useRef(null)
    const prr=useRef(null)
    const tab=useRef(null)
    
    
    useEffect(()=>{
    const el=element.current
    const one=image.current
    const two=div.current

// total section

gsap.fromTo(down_ani.current, {y:"300px",  }, {y:"0px",  ease:"slow(7,7,false)",
scrollTrigger:{
  start:"top 100%",
  end:"top 80%",
  scrub:3,
  trigger:el,
 
}
}, []);

    
  // projects tabs
   
    
//     gsap.fromTo(one, {x:"-900px", opacity:0 }, {x:"0px", opacity:1,duration:1, ease:"slow(0.7,0.7,false)",
//     scrollTrigger:{
//       start:"top 80%",
//       end:"top 50%",
//       scrub:3,
//       trigger:el,
     
//     }
//  });
 
 gsap.fromTo(tab.current, {opacity:0, transform:"scale(0)"}, {transform:"scale(1)", opacity:1,  ease:"slow(0.7,0.7,false)",
 
  scrollTrigger:{
   start:"top 80%",
   end:"top 70%",
 scrub:3,
   trigger:el,
 }})
 
// image scroll
gsap.fromTo(image.current, {  transform:"scale(0)",}, {transform:"scale(1)", ease: "slow(0.7,0.7,false)", scrollTrigger:{
  start:"top 80%",
  end:"top 70%",
  scrub:3,
  trigger:el,

}});


    
    // Skill heqd
    
    gsap.fromTo(el, {opacity:0, y:"-90px",}, {y:"0px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
      start:"top 80%",
      end:"top 70%",
      scrub:3,
      trigger:el,
    
    }});
    
    gsap.fromTo(prl.current, {opacity:0, x:"-580px",}, {x:"-100px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
      start:"top 80%",
      end:"top 70%",
      scrub:3,
      trigger:el,
     
    }});
    
    gsap.fromTo(prr.current, {opacity:0, x:"580px",}, {x:"100px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
      start:"top 80%",
      end:"top 70%",
      scrub:3,
      trigger:el,
    }});
    
     
    
    }, [])
    

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
console.log(finalData)

const allFunc=(e)=>{
   
     setTab(e.target.id) 
}

const statFunc=(e)=>{
   
     setTab(e.target.id) 
}


const dynFunc=(e)=>{
    
     setTab(e.target.id) 
}
const resFunc=(e)=>{
  
     setTab(e.target.id) 
}
  return (

  <div className='p_img_pros' ref={down_ani}>
     <div className="pro_head"  > 
      <hr  ref={prl}/> 
      <h1 style={{fontWeight:"650", marginRight:"20px",fontFamily: "julius sans one, cursive", marginLeft:"20px", position:"absolute"}} ref={element} >Projects</h1>
       <hr ref={prr} />
       
     </div>
     <div className="project_container" >
     <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1714245663/4058742_2130165_jmxypu.svg" className="mob_Img" ref={image}/>
       <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1714244454/agile_method-amico_ude0mr.svg" className="desk_Img" ref={image}/>
     
     
     <div className="p_main" ref={div}> 
     

      <div className="p_tabs" ref={tab} >
      {/* <Extra  width={activeTab} className={ `same ${colorTab}`}></Extra> */}
      
        <p  className={`${activeTab==="all"?"p_active_btn":"p_disible_btn"}  `}  id="all" onClick={allFunc}>All</p>


       <p className={`${activeTab==="static"?"p_active_btn":"p_disible_btn"}  `}  id="static" onClick={statFunc}>Static</p>

    
       <p  className={`${activeTab==="dynamic"?"p_active_btn":"p_disible_btn"}  `} id="dynamic" onClick={dynFunc}>Dynamic</p>

    
       <p  width={activeTab} ton  className={`${activeTab==="responsive"?"p_active_btn":"p_disible_btn"}  `} id="responsive" onClick={resFunc}>Responsive</p>
      
      </div>
      
     

     <div className='p_div' >
        {finalData.map((item)=> <ProjectItem  classy="p_tabs"  test={activeTab} item={item} key={item.id}/>)}
     </div>
    </div>
   </div>
  </div>
  )
}

export default Projects
