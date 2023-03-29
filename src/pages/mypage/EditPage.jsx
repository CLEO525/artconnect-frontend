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

const StyledForm = styled.form`
  font-size: 26px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 1rem;

  li:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  li:nth-child(6) {
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

const StyledInput = styled.input`
  width: 460px;
  height: 54px;
  margin-left: 1rem;
  background: #ffffff;
  border: 2px solid #000000;
`;

const EditCheckButton = styled.button`
  width: 338px;
  height: 81px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background: #1c1c1c;
  border: 2px solid #000000;
  font-family: "SUITE";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background-color: #ffffff;
    border: 2px solid #442e68;
    font-weight: 700;
    color: #442e68;
  }
`;

export default function EditPage() {
  return (
    <Container>
      <PageTitle title="MY PAGE" marginBottom={0} />
      <Sidebar />
      <StyledButton>내 정보 수정</StyledButton>
      <ContentDiv>
        <StyledForm>
          <StyledUl>
            <StyledLi>
              아이디 <StyledInput type="text" name="id"></StyledInput>
            </StyledLi>
            <StyledLi>
              프로필명{" "}
              <StyledInput type="text" name="profileName"></StyledInput>
            </StyledLi>
            <StyledLi>
              패스워드{" "}
              <StyledInput type="password" name="password"></StyledInput>
            </StyledLi>
            <StyledLi>
              패스워드 확인{" "}
              <StyledInput type="password" name="passwordCheck"></StyledInput>
            </StyledLi>
            <StyledLi>
              <EditCheckButton type="submit">수정하기</EditCheckButton>
            </StyledLi>
          </StyledUl>
        </StyledForm>
      </ContentDiv>
    </Container>
  );
}
