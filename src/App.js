import Profilesection from "./components/Profile"
import Header from "./components/Navbar"
import  Skills from "./components/Skills";
import Test from "./components/test"
import Projects from "./components/projects"
import "./App.css"
const App=()=> {
  return (
   <>
  
  <Header/>
  <div className="app_div">
  <Profilesection/>
   <Skills/>
   <Projects/>
  {/* <Test/> */}
  </div>
   
   </>
  )
}
export default App