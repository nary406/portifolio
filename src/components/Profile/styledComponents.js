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
  height:100lvh;
  overflow-x: hidden;
   padding:50px 100px 0px 100px;
   
   
   @media (orientation:portrait){
    
    flex-direction:column;
    margin-left:0px;
   z-index:0;
    justify-content:space-evenly;
    padding:70px 0px 0px 0px;
   
   
   
   }
`