import React from "react";
import styled from "styled-components";

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
  flex-direction: column;
  align-items: center;
`;

const JoinHeader = styled.div`
  width: 100%;
  height: 162px;
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

  li:first-child {
    justify-content: flex-start;
    gap: 1.2rem;
  }

  li:first-child input {
    width: 45%;
    margin-left: 70px;
  }

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

const StyledCheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

const DuplicatedId = styled.button`
  width: 157px;
  height: 54px;
  background: #1c1c1c;
  border: 2px solid #000000;
  font-family: "SUITE";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  :hover {
    color: #939393;
  }
`;

const JoinCheckButton = styled.button`
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
  :hover {
    color: #939393;
  }
`;

export default function JoinPage(props) {
  return (
    <Wrap>
      <Container>
        <JoinHeader>
          <span>SIGN UP</span>
        </JoinHeader>
        <StyledForm>
          <StyledUl>
            <StyledLi>
              아이디 <StyledInput type="text" name="id"></StyledInput>
              <DuplicatedId type="button">중복확인</DuplicatedId>
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
              <StyledCheckBox type="checkbox" id="joinCheck"></StyledCheckBox>
              <label htmlFor="joinCheck">
                가입 시 입력했던 정보는 탈퇴 시 소멸됩니다.
              </label>
            </StyledLi>
            <StyledLi>
              <JoinCheckButton type="submit">가입하기</JoinCheckButton>
            </StyledLi>
          </StyledUl>
        </StyledForm>
      </Container>
    </Wrap>
  );
}
