import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Sidebar from "../../components/common/layout/Sidebar";

const Container = styled.div`
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 75%;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 184px;
  margin: 2rem;
  background-color: #ffffff;
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: left;
  border: none;
  border-bottom: 2px solid #000000;
  cursor: pointer;
`;

export default function BookmarkPage() {
  return (
    <Container>
      <PageTitle title="MY PAGE"></PageTitle>
      <Sidebar />
      <StyledButton>최근 북마크</StyledButton>
      <ContentDiv></ContentDiv>
      <StyledButton>북마크 목록</StyledButton>
      <ContentDiv></ContentDiv>
    </Container>
  );
}
