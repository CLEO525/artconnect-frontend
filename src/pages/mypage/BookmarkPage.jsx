import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Sidebar from "../../components/common/layout/Sidebar";
import UnderLineButton from "../../components/common/style/UnderLineButton";

const Container = styled.div`
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 75%;
  min-height: 250px;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function BookmarkPage() {
  return (
    <Container>
      <PageTitle title="MY PAGE"></PageTitle>
      <Sidebar />
      <UnderLineButton
        bName="최근 북마크"
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      />
      <ContentDiv></ContentDiv>
      <UnderLineButton
        bName="북마크 목록"
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      />
      <ContentDiv></ContentDiv>
    </Container>
  );
}
