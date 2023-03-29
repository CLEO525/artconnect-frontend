import React from "react";
import styled from "styled-components";
import Button from "../components/common/style/Button";
import Input from "../components/common/style/Input";
import PageTitle from "../components/common/layout/PageTitle";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  font-size: 26px;
  width: 690px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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

const StyledCheckBox = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default function JoinPage() {
  return (
    <Container>
      <PageTitle title="SIGN UP" marginBottom={3} />
      <StyledForm>
        <StyledUl>
          <StyledLi>
            아이디
            <Input
              type="text"
              name="id"
              margin="0 0 0 100px"
              width="41%"
            ></Input>
            <Button
              type="button"
              width={157}
              height={59}
              bName="중복확인"
              margin="0 16px"
            />
          </StyledLi>
          <StyledLi>
            프로필명
            <Input type="text" name="profileName"></Input>
          </StyledLi>
          <StyledLi>
            패스워드 <Input type="password" name="password"></Input>
          </StyledLi>
          <StyledLi>
            패스워드 확인 <Input type="password" name="passwordCheck"></Input>
          </StyledLi>
          <StyledLi>
            <StyledCheckBox type="checkbox" id="joinCheck"></StyledCheckBox>
            <label htmlFor="joinCheck">
              가입 시 입력했던 정보는 탈퇴 시 소멸됩니다.
            </label>
          </StyledLi>
          <StyledLi>
            <Button type="submit" bName="가입하기" />
          </StyledLi>
        </StyledUl>
      </StyledForm>
    </Container>
  );
}
