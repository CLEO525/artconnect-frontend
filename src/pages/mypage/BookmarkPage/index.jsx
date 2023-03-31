import React from "react";
import PageTitle from "../../../components/common/layout/PageTitle";
import Sidebar from "../../../components/common/layout/Sidebar";
import UnderLineButton from "../../../components/common/style/UnderLineButton";
import * as styles from "./styles";

export default function BookmarkPage() {
  return (
    <styles.Container>
      <PageTitle title="MY PAGE"></PageTitle>
      <Sidebar />
      <UnderLineButton
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      >
        최근 북마크
      </UnderLineButton>
      <styles.ContentDiv></styles.ContentDiv>
      <UnderLineButton
        bgColor="#ffffff"
        margin="2rem"
        hWeight="400"
        hColor="#000000"
        hoverB="2px solid #000000"
        hCursor="default"
      >
        북마크 목록
      </UnderLineButton>
      <styles.ContentDiv></styles.ContentDiv>
    </styles.Container>
  );
}
