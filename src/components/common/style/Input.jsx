import { type } from "@testing-library/user-event/dist/type";
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

export default function Input(props) {
  const {
    width,
    height,
    background,
    margin,
    padding,
    borderColor,
    placeholder,
    type,
    align,
    display,
  } = props;
  return (
    <StyledInput
      type={type || "text"}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      align={align}
      background={background}
      borderColor={borderColor}
      placeholder={placeholder}
      display={display}
    ></StyledInput>
  );
}
