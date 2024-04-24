import Profilesection from "./components/Profile"
import Header from "./components/Navbar"
import  Skills from "./components/Skills";
import Test from "./components/test"
import "./App.css"
const App=()=> {
  return (
   <>
  
  <Header/>
  <div className="app_div">
  <Profilesection/>
   <Skills/>
  </div>
   {/* <Test/> */}
   </>
  )
}
export default App