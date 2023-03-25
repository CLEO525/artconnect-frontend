import React from "react";
import styled from "styled-components";

const SideWrap = styled.div`
  width: 25%;
  height: calc(100vh - 162px);
  float: left;
  background-color: #d9d9d9;
`;

const StyledSideCenter = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledSideRight = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  width: 184px;
  margin-bottom: 3rem;
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: left;
  background-color: #d9d9d9;
  border: none;
  border-bottom: 2px solid #000000;
  cursor: pointer;
  :hover {
    font-weight: 700;
    color: #ff4429;
    border: none;
    border-bottom: 3px solid #ff4429;
  }
`;

export default function Sidebar() {
  return (
    <SideWrap>
      <StyledSideCenter>
        <StyledButton>북마크</StyledButton>
        <StyledButton>내 정보 수정</StyledButton>
      </StyledSideCenter>
      <StyledSideRight>
        <StyledButton>탈퇴하기</StyledButton>
      </StyledSideRight>
    </SideWrap>
  );
}
