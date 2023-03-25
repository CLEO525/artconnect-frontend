import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import PageTitle from "../components/common/layout/PageTitle";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 450px;
  height: 54px;
  margin: 1rem 0rem 1rem;
  padding-left: 10px;
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  background: #ffffff;
  border: 2px solid #000000;
`;

const StyledSpan = styled.span`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  align-items: center;
`;
const ColoredSpan = styled.span`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #ff4429;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 363px;
  height: 81px;
  margin: 20px 0 20px;
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

const SignUpButton = styled.button`
  width: 122px;
  height: 56px;
  margin-left: 26px;
  margin-bottom: 3rem;
  background: #ffffff;
  border: 1px solid #ff4429;
  font-family: "SUITE";
  color: #ff4429;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  cursor: pointer;
  :hover {
    border: 2px solid #442e68;
    font-weight: 700;
    color: #442e68;
  }
`;

export default function LoginPage() {
  return (
    <Container>
      <PageTitle title="LOGIN" marginBottom={3} />
      <div>
        <StyledInput type="text" placeholder="아이디"></StyledInput>
        <br />
        <StyledInput type="password" placeholder="비밀번호"></StyledInput>
        <br />
      </div>
      <div>
        <LoginButton>로그인</LoginButton>
      </div>
      <div>
        <StyledSpan>
          회원이 아니시라면 <ColoredSpan>회원가입</ColoredSpan>을 해주시기
          바랍니다.
          <SignUpButton>회원가입</SignUpButton>
        </StyledSpan>
      </div>
    </Container>
  );
}
