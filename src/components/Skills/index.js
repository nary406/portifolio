import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {SkillBox} from "./styledComponent"
import "./index.css"
import {useEffect, useRef, useState} from "react"

gsap.registerPlugin(ScrollTrigger)



  const frontend=[{name:"HTML", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713798519/html_1051277_hrexj2.png", color:"orange" }, 
  {name:"CSS", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713798428/social_11516361_ik5c4l.png",  color:"skyblue"  }, 
  {name:"JS", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713798427/js_5968292_pwhqit.png",  color:"#f0db4f"  },
  {name:"Bootstrap", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713798427/bootstrap_5968672_eb3l6s.png",  color:"#563d7c"  },
  {name:"REACT", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713798428/science_13065981_uzgkcf.png",  color:"#61DBFB"  }]


  const backend=[{name:"PYTHON", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713802637/python_5968350_jrlulw.png", color:"#4584b6" }, 
  {name:"NODE.JS", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713802636/nodejs_my7yxp.svg",  color:"green"  }, 
  {name:"EXPRESS.JS", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713802636/express-original_ljknwv.svg",  color:"black"  },
 ]

 const database=[{name:"SQL", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713803232/data-server_9698555_eiz6zw.png", color:"skyblue" }, 
  {name:"MANGODB", icon:"https://res.cloudinary.com/dky72aehn/image/upload/v1713803430/mongodb-icon_nxzirg.svg",  color:"green"  }, 
 ]





const Skills=()=> {
const [ani, setani]=useState(false)

const skillsList=(item)=>{
  const {name, icon, color}=item
  return (<SkillBox className="box"color={color}>
    <p className="logo_name">{name}</p>
    <img src={icon} className="logo"/>
  </SkillBox>)
}
const element=useRef(null)
const image=useRef(null)
const div=useRef(null)
const hrl=useRef(null)
const hrr=useRef(null)

useEffect(()=>{
const el=element.current
const one=image.current

const two=div.current

// skill tabs
gsap.fromTo(one, {x:"-900px", opacity:0 }, {x:"0px", opacity:1,duration:1, ease:"slow(0.7,0.7,false)",
   scrollTrigger:{
     start:"top 80%",
     end:"top 50%",
     scrub:3,
     trigger:el,
    
   }
});

gsap.fromTo(two, {opacity:0, x:"900px", }, {x:"0px", opacity:1, duration:1, ease:"slow(0.7,0.7,false)",

 scrollTrigger:{
  start:"top 80%",
  end:"top 50%",
scrub:3,
  trigger:el,
}})

// Skill heqd

gsap.fromTo(el, {opacity:0, y:"-90px",}, {y:"0px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
  start:"top 80%",
  end:"top 50%",
  scrub:3,
  trigger:el,

}});

gsap.fromTo(hrl.current, {opacity:0, x:"-580px",}, {x:"-70px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
  start:"top 80%",
  end:"top 50%",
  scrub:3,
  trigger:el,
 
}});

gsap.fromTo(hrr.current, {opacity:0, x:"580px",}, {x:"70px", opacity:1, ease: "slow(0.7,0.7,false)", scrollTrigger:{
  start:"top 80%",
  end:"top 50%",
  scrub:3,
  trigger:el,
  markers:true
 
}});

 

}, [])



    
  return (

   <div className="skill_main"   >
     <div className="skill_head"  > 
      <hr  ref={hrl}/> 
      <h1 style={{fontWeight:"650", marginRight:"20px", marginLeft:"20px", position:"absolute"}} ref={element} >Skills</h1>
       <hr ref={hrr} />
     </div>
     <div className='s_main' >
        <img src="https://res.cloudinary.com/dky72aehn/image/upload/v1713725258/undraw_static_assets_rpm6_ejpryd.svg" className="svg_pic" ref={image} />
      <div className="skills_div"  ref={div} >
      
       <div  className="all_skills">
       <div className="each_skill_div">
            <h4 className="category" > FrontEnd :</h4>
            <ul className="cell_div">
              {frontend.map((item)=>(
              <li>
                {skillsList(item)}
              </li>))}
            </ul>
        </div>
        <div  className="each_skill_div">
            <h4 className="category" >Backend :</h4>
            <ul className="cell_div">
              {backend.map((item)=>(
              <li>
                {skillsList(item)}
              </li>))}
            </ul>
        </div>
        <div  className="each_skill_div">
            <h4 className="category" >Database :</h4>
            <ul className="cell_div">
              {database.map((item)=>(
              <li>
                {skillsList(item)}
              </li>))}
            </ul>
        </div>
       </div>
      
      </div>
    </div>
   </div>
  )
}

export default Skills
