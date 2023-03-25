import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Sidebar from "../../components/common/layout/Sidebar";

const Wrap = styled.div`
  width: auto;
  height: auto;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentDiv = styled.div`
  display: flex;
  float: right;
`;
export default function Edit() {
  return (
    <Wrap>
      <PageTitle title="MY PAGE" />
      <Container>
        <Sidebar />
        <ContentDiv>
          <span>content</span>
        </ContentDiv>
      </Container>
    </Wrap>
  );
}
