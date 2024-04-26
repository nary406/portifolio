import styled from "styled-components";

export const Extra = styled.div`
  position: absolute;
  background-color: white;
  z-index: 0;
  border-radius: 20px;
  height: 50px;
  transition: all 350ms;
  

  @media(max-width:768px){
    width: ${(props) => {
        if (props.width === "dynamic" || props.width === "responsive") {
          return "100px";
        } else {
          return "50px";
        }
      }};
  }
`;

// Usage:
// <Extra left={colorTab} className="float"></Extra>

// 6, 2//  16.5, 14// 27.5,26// 38.5, 38//