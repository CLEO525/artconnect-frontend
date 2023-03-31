import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width || 338}px;
  height: ${(props) => props.height || 81}px;
  margin: ${(props) => props.margin || "20px"};
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || "#1c1c1c"};
  border: ${(props) => props.border || "2px solid #000000"};
  font-family: "SUITE";
  color: ${(props) => props.color || "#ffffff"};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.bgColor || "#ffffff"};
    border: 2px solid ${(props) => props.hoverColor || "#442e68"};
    font-weight: 700;
    color: ${(props) => props.hoverColor || "#442e68"};
  }
`;

export function Button(props) {
  const {
    width,
    height,
    background,
    color,
    bgColor,
    hoverColor,
    margin,
    border,
  } = props;
  return (
    <StyledButton
      width={width}
      height={height}
      background={background}
      color={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      margin={margin}
      border={border}
    >
      {props.bName}
    </StyledButton>
  );
}

export default StyledButton;
