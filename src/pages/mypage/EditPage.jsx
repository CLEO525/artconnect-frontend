import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Sidebar from "../../components/common/layout/Sidebar";

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 75%;
  background-color: beige;
`;
export default function EditPage() {
  return (
    <Container>
      <PageTitle title="MY PAGE" marginBottom={0} />
      <Sidebar />
      <ContentDiv>
        <span>content</span>
      </ContentDiv>
    </Container>
  );
}
