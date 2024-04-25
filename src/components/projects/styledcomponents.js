import styled from "styled-components";

export const Extra = styled.div`
  position: absolute;
  background-color: white;
  width: 100px;
  z-index: 0;
  border-radius: 20px;
  height: 50px;
  transition: all 350ms;
  left: calc(${props => props.left} * 1%);
`;

// Usage:
// <Extra left={colorTab} className="float"></Extra>

// 6, 2//  16.5, 14// 27.5,26// 38.5, 38//