import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 162px;
  margin-bottom: ${(props) => props.marginBottom}rem;
  background-color: #000000;
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export default function PageTitle(props) {
  const { marginBottom } = props;
  return <StyledHeader marginBottom={marginBottom}>{props.title}</StyledHeader>;
}
