import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Sidebar from "../../components/common/layout/Sidebar";
import Input from "../../components/common/style/Input";
import Button from "../../components/common/style/Button";
import UnderLineButton from "../../components/common/style/UnderLineButton";

const Container = styled.div`
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 75%;
  margin-top: 3rem;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledForm = styled.form`
  font-size: 26px;
  width: auto;
  height: auto;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 1rem;

  li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function EditPage() {
  return (
    <Container>
      <PageTitle title="MY PAGE" />
      <Sidebar />
      <UnderLineButton
        bName="내 정보 수정"
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      />
      <ContentDiv>
        <StyledForm>
          <StyledUl>
            <StyledLi>
              아이디 <Input type="text" name="id"></Input>
            </StyledLi>
            <StyledLi>
              프로필명 <Input type="text" name="profileName"></Input>
            </StyledLi>
            <StyledLi>
              패스워드 <Input type="password" name="password"></Input>
            </StyledLi>
            <StyledLi>
              패스워드 확인 <Input type="password" name="passwordCheck"></Input>
            </StyledLi>
            <StyledLi>
              <Button type="submit" bName="수정하기" />
            </StyledLi>
          </StyledUl>
        </StyledForm>
      </ContentDiv>
    </Container>
  );
}
