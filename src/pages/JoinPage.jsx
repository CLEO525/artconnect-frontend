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
  margin-top: 1em;
  font-size: 26px;
  width: auto;
  height: auto;
`;

const StyledInput = styled.input`
  width: 460px;
  height: 54px;
  margin: 1rem 5rem;
  background: #ffffff;
  border: 2px solid #000000;
`;

const StyledCheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

const DuplicatedId = styled.button`
  width: 215px;
  height: 54px;
  background: #1c1c1c;
  border: 2px solid #000000;
  font-family: "SUITE";
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
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
          아이디 <StyledInput type="text" name="id"></StyledInput>
          <DuplicatedId type="button">중복확인</DuplicatedId>
          <br />
          프로필명 <StyledInput type="text" name="profileName"></StyledInput>
          <br />
          패스워드 <StyledInput type="password" name="password"></StyledInput>
          <br />
          패스워드 확인{" "}
          <StyledInput type="password" name="passwordCheck"></StyledInput>
          <br />
          <StyledCheckBox type="checkbox" id="joinCheck"></StyledCheckBox>
          <label htmlFor="joinCheck">
            가입 시 입력했던 정보는 탈퇴 시 소멸됩니다.
          </label>
          <br />
          <JoinCheckButton type="submit">가입하기</JoinCheckButton>
        </StyledForm>
      </Container>
    </Wrap>
  );
}
