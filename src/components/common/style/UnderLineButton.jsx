import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width || "184px"};
  margin: ${(props) => props.margin || "0 0 3rem 0"};
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size || "32px"};
  text-align: left;
  background-color: ${(props) => props.bgColor || "#d9d9d9"};
  border: none;
  border-bottom: ${(props) => props.borderB || "2px solid #000000"};
  cursor: pointer;
  :hover {
    font-weight: ${(props) => props.hWeight || "700"};
    color: ${(props) => props.hColor || "#ff4429"};
    border: none;
    border-bottom: ${(props) => props.hoverB || "3px solid #ff4429"};
    cursor: ${(props) => props.hCursor || "pointer"};
  }
`;

export function UnderLineButton(props) {
  return <StyledButton></StyledButton>;
}

export default StyledButton;
