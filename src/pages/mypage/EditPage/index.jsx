import React from "react";
import PageTitle from "../../../components/common/layout/PageTitle";
import Sidebar from "../../../components/common/layout/Sidebar";
import Input from "../../../components/common/style/Input";
import Button from "../../../components/common/style/Button";
import UnderLineButton from "../../../components/common/style/UnderLineButton";
import * as styles from "./styles";

export default function EditPage() {
  return (
    <styles.Container>
      <PageTitle title="MY PAGE" />
      <Sidebar />
      <UnderLineButton
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      >
        내 정보 수정
      </UnderLineButton>
      <styles.Div>
        <styles.Form>
          <styles.Ul>
            <styles.Li>
              아이디 <Input type="text" name="id"></Input>
            </styles.Li>
            <styles.Li>
              프로필명 <Input type="text" name="profileName"></Input>
            </styles.Li>
            <styles.Li>
              패스워드 <Input type="password" name="password"></Input>
            </styles.Li>
            <styles.Li>
              패스워드 확인 <Input type="password" name="passwordCheck"></Input>
            </styles.Li>
            <styles.Li>
              <Button type="submit">수정하기</Button>
            </styles.Li>
          </styles.Ul>
        </styles.Form>
      </styles.Div>
    </styles.Container>
  );
}
