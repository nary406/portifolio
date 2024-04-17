import styled from "styled-components"
// /#1FAOFF

// #12DAFB

// #A7FDCC/ 
export const  Image=styled.img`
   width:50px;
   height:50px;
   
`
export const  Btn=styled.button`
  display:none;
  @media (max-width:576px){
   display:block;
   }
`

export const  Imagdiv=styled.div`
width:100%;

 @media (max-width:576px){
    display:flex;
  flex-direction:row;
  width:100%;
  justify-content:space-between;
  aligh-item:center;
   }
`


export  const  Nav=styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   align-items:center;
   width:100p%;
   height:60px;
   color:white;
   padding-right:20px;
   padding-left:40px;
   margin:0px;
   background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


   @media (max-width:576px){
    flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
   transition:0.3s ease-in-out;
   height:${(props)=>(props.ham&&"250px")};
   }
 
`

export  const  Display=styled.div`
display:flex;
   flex-direction:${props=>(props.display)};
   justify-content:space-between;
   align-items:center;
   width:100%;
   margin:0px;

   margin-left:auto;
   padding-right:30px;
   @media (max-width:576px){
    display:flex;
   
    flex-direction:column;
    margin-left:0px;
    justify-content:space-between;
    padding-left:0px;
   
    margin-top:20px;
    overflow:hidden;
   
    height:${(props)=>(props.ham?"160px":"0px")};
    align-items:flex-start;
   }
`

export const Button=styled.button`

background:transparent;
padding:6px;
font-size:20px;
color: #045799;
border-radius:10px;
font-weight:600;
transition: transform 500ms;
&:hover{
   color:white;
}

` 
