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
   background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
height:100vh;

z-index:1;
   margin:auto;
   padding:50px 100px 0px 100px;
   
   
   @media (max-width:576px){
    display:${props=>(props.ham?"flex":"flex")};
    flex-direction:column;
    margin-left:0px;
    justify-content:flex-start;
    padding:30px 0px 0px 0px;

    width:100%;
    height:150vh;
    align-items:center;
   }
`