import Profilesection from "./components/Profile"
import Header from "./components/Navbar"
import  Skills from "./components/Skills";
import Test from "./components/test"

import React, { createContext } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import Projects from "./components/projects"
import Contact from "./components/contact"
import "./App.css"

export const User=React.createContext() 

const App=()=> {
  
 const name="nary"
 const age="23"
  return (
   <>
 <User.Provider value={{name, age}}>
 <div className="app_div">
  <Header/>
  <Profilesection/>
   <Skills/>
   <Projects/>
   <Contact/>
  {/* <Test/> */}
 <a href="#profile_section" className="anchor_button"> 
 <div className="hovr_btn">
 <button className="button">
  <svg className="svgIcon" viewBox="0 0 384 512">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
</button>

</div>
 </a>
  </div>
 </User.Provider>
   
   </>
  )
}
export default App