import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size || "24px"};
  line-height: 27px;
  margin: ${(props) => props.margin || "0px"};
  align-items: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "#000000"};
  :hover {
    color: ${(props) => props.hover || "#000000"};
  }
`;
export function Span(props) {
  return <StyledSpan></StyledSpan>;
}

export default StyledSpan;
