import Profilesection from "./components/Profile"
import Header from "./components/Navbar"
import  Skills from "./components/Skills";
import Test from "./components/test"
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
  </div>
   
   </>
  )
}
export default App