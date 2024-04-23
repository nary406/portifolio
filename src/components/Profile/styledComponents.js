import styled from "styled-components"

export const  Image=styled.img`
  
  width:100%;
  height:100%;
  margin:50px;
 
   
`
export  const  Profile=styled.div`
display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
   width:100%;
  height:100dvh;
   background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
   
   padding:50px 100px 0px 100px;
   
   
   @media (orientation:portrait){
    
    flex-direction:column;
    margin-left:0px;
    height:130vh;
    padding:30px 0px 0px 0px;
   
   
   
   }
`