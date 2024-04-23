import styled from "styled-components"

export const SkillBox=styled.div`
border-bottom:5px solid ${props=>(props.color)};
background-color: white;
padding:30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right:40px;
height:100px;
width:100px;
border-radius: 20px;
transition:all 450ms;
&:hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transform: scale(1.1) ;
  }

@media (orientation:portrait){
    height:60px;
width:60px;
border-radius: 10px;
margin-bottom:10px;
padding:10px;
}


`