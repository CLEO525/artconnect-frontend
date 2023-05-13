import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => props.width || "450px"};
  height: ${(props) => props.height || "54px"};
  margin: ${(props) => props.margin || "0 1rem 0 1rem"};
  padding: ${(props) => props.padding || "0px"};
  background: ${(props) => props.background || "#ffffff"};
  border: 2px solid ${(props) => props.borderColor || "#000000"};
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: ${(props) => props.align || "left"};
  line-height: 27px;
  padding-left: 12px;
  display: ${(props) => props.display};
`;

export function Input(props) {
  return <StyledInput></StyledInput>;
}
export default StyledInput;
