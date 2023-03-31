import React from "react";
import Button from "../../components/common/style/Button";
import Input from "../../components/common/style/Input";
import PageTitle from "../../components/common/layout/PageTitle";
import * as styles from "./styles";

export default function JoinPage() {
  return (
    <styles.Container>
      <PageTitle title="SIGN UP" marginBottom={3} />
      <styles.Form>
        <styles.Ul>
          <styles.Li>
            아이디
            <Input
              type="text"
              name="id"
              margin="0 0 0 100px"
              width="41%"
            ></Input>
            <Button type="button" width={157} height={59} margin="0 16px">
              중복확인
            </Button>
          </styles.Li>
          <styles.Li>
            프로필명
            <Input type="text" name="profileName"></Input>
          </styles.Li>
          <styles.Li>
            패스워드 <Input type="password" name="password"></Input>
          </styles.Li>
          <styles.Li>
            패스워드 확인 <Input type="password" name="passwordCheck"></Input>
          </styles.Li>
          <styles.Li>
            <styles.CheckBox type="checkbox" id="joinCheck"></styles.CheckBox>
            <label htmlFor="joinCheck">
              가입 시 입력했던 정보는 탈퇴 시 소멸됩니다.
            </label>
          </styles.Li>
          <styles.Li>
            <Button type="submit">가입하기</Button>
          </styles.Li>
        </styles.Ul>
      </styles.Form>
    </styles.Container>
  );
}
