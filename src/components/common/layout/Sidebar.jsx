import React from "react";
import styled from "styled-components";
import UnderLineButton from "../style/UnderLineButton";

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

export default function Sidebar() {
  return (
    <SideWrap>
      <StyledSideCenter>
        <UnderLineButton>북마크</UnderLineButton>
        <UnderLineButton>내 정보 수정</UnderLineButton>
      </StyledSideCenter>
      <StyledSideRight>
        <UnderLineButton>탈퇴하기</UnderLineButton>
      </StyledSideRight>
    </SideWrap>
  );
}
