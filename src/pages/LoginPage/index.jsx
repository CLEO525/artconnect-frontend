import React from "react";
import Button from "../../components/common/style/Button";
import Input from "../../components/common/style/Input";
import Span from "../../components/common/style/Span";
import PageTitle from "../../components/common/layout/PageTitle";
import * as styles from "./styles";

export default function LoginPage() {
  return (
    <styles.Container>
      <PageTitle title="LOGIN" marginBottom={3} />
      <div>
        <Input type="text" placeholder="아이디" margin="1rem 0rem 1rem"></Input>
        <br />
        <Input
          type="password"
          placeholder="비밀번호"
          margin="1rem 0rem 1rem"
        ></Input>
        <br />
      </div>
      <div>
        <Button>로그인</Button>
      </div>
      <div>
        <Span text="회원이 아니시라면" />
        <Span color="#ff4429" text=" 회원가입 " />
        <Span text="을 해주시기 바랍니다." />
        <Button
          width="122"
          height="56"
          background="#ffffff"
          color="#ff4429"
          hoverColor="#442e68"
          border="1px solid #ff4429"
        >
          회원가입
        </Button>
      </div>
    </styles.Container>
  );
}
