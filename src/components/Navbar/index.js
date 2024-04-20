import { CiMenuFries } from "react-icons/ci";
import {Image,Btn,Button,  Nav,Imagdiv, Display}from "./styledComponents"
import {useState} from "react"
import { RxCross2 } from "react-icons/rx";
import "./index.css"

const Header=()=> {
  const [ham, setham]=useState(false)

const hamburger=()=>(
  setham(!ham)
)

  return (
  <Nav ham={ham}>
   <Imagdiv>
   <Image src="https://res.cloudinary.com/dky72aehn/image/upload/v1712938941/Screenshot_2024-04-12_214806-transformed-removebg-preview_uzm0zv.png" className="bounce-in-left"/>
  <Btn onClick={hamburger} style={{fontSize:"30px", color:"#045799"}} className="bounce-in-left"> {!ham?<CiMenuFries/>:<RxCross2/>} </Btn>

   </Imagdiv>
    <Display display="row" ham={ham} as="ul">
      <li><Button className="hvr">profile</Button></li>
      <li><Button className="hvr">skills</Button></li>
      <li><Button className="hvr">projects</Button></li>
      <li><Button className="hvr">contacts</Button></li>
    </Display>


  </Nav>
  );
}

export default Header;