import styled from "styled-components"

export const  Image=styled.img`
   width:50px;
   height:50px;
   
`
export const  Btn=styled.button`
  display:none;
  @media  (orientation:portrait){
   display:block;
   border:none;
   background-color:transparent;
   }
`

export const  Imagdiv=styled.div`
width:100%;

 @media  (orientation:portrait){
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
   width:100%;
   height:60px;
   color:white;
   padding-right:20px;
   padding-left:20px;
   margin:0px;
   z-index:2;
   position:fixed;
  
  
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
background: rgba( 243, 248, 253, 0.35 );
   
    backdrop-filter: blur( 14.5px );
    -webkit-backdrop-filter: blur( 10.5px );
   
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition:height 420ms;
   @media (orientation:portrait){
    flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;

  
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
list-style:none;
   margin-left:auto;
   
   padding-right:30px;
   @media (orientation:portrait){
    display:flex;
   
    flex-direction:column;
    margin-left:0px;
    justify-content:space-between;
    padding-left:0px;
   
    margin-top:20px;
    overflow:hidden;
   transition:height 420ms;
    height:${(props)=>(props.ham?"160px":"0px")};
    align-items:flex-start;
   }
`

export const Button=styled.button`

background:transparent;
padding:6px;
font-size:20px;
color: #045799;
border:none;
font-weight:600;
transition: transform 500ms;

` 
