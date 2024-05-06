import Profilesection from "./components/Profile"
import Header from "./components/Navbar"
import  Skills from "./components/Skills";
import Test from "./components/test"
import { FaCircleArrowUp } from "react-icons/fa6";
import Projects from "./components/projects"
import Contact from "./components/contact"
import "./App.css"
const App=()=> {
  return (
   <>
  

  <div className="app_div">
  <Header/>
  <Profilesection/>
   <Skills/>
   <Projects/>
   <Contact/>
  {/* <Test/> */}
 <a href="#profile_section" className="anchor_button"> 
 <div className="hovr_btn">
<button> 
<FaCircleArrowUp/>
</button>
</div>
 </a>
  </div>
   
   </>
  )
}
export default App