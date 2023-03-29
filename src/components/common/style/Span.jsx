import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size || "24px"};
  line-height: 27px;
  align-items: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "#000000"};
`;
export default function Span(props) {
  const { color, size, align } = props;
  return (
    <StyledSpan color={color} size={size} align={align}>
      {props.text}
    </StyledSpan>
  );
}
