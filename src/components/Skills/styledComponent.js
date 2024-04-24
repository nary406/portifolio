import styled from "styled-components"

export const SkillBox=styled.div`
border-bottom:5px solid ${props=>(props.color)};
background-color: white;
padding:30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right:15px;

min-height:80px;
min-width:80px;
max-height:100px;
max-width:100px;
border-radius: 20px;
transition:all 450ms;
&:hover {
   box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: scale(1.1) ;
  }

@media (orientation:portrait){
  
border-radius: 10px;
margin-bottom:10px;
padding:10px;
}


`