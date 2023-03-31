import React from "react";
import PageTitle from "../../../components/common/layout/PageTitle";
import Input from "../../../components/common/style/Input";
import Button from "../../../components/common/style/Button";

// CK에디터로 전시 내용 텍스트에리어 설정
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as styles from "./styles";

export default function WritePage() {
  return (
    <styles.Container>
      <PageTitle title="전시 등록" marginBottom={3} />
      <styles.Form>
        <styles.Ul>
          <styles.Li>
            <label htmlFor="category">카테고리</label>
            <styles.Select name="category" id="category">
              <styles.Option value="planned">예정</styles.Option>
              <styles.Option value="progress">진행</styles.Option>
              <styles.Option value="free">무료</styles.Option>
            </styles.Select>
            <label htmlFor="exhibitionName">전시명</label>
            <Input
              type="text"
              width="400px"
              id="exhibitionName"
              margin="0 0 0 2rem"
              padding="0 3rem 0 0"
            />
          </styles.Li>
          <styles.Li>
            <label htmlFor="exhibitionSdate">전시기간</label>
            <Input
              type="date"
              id="exhibitionSdate"
              width="270px"
              margin="0 0 0 2rem"
              padding="0 3rem 0 0"
              align="center"
            />
            <label htmlFor="exhibitionEdate" />
            <Input
              type="date"
              id="exhibitionEdate"
              width="270px"
              margin="0 0 0 2rem"
              padding="0 3rem 0 0"
              align="center"
            />
          </styles.Li>
          <styles.Li>
            <label htmlFor="thumbNail">썸네일</label>
            <input type="file" id="thumbNail" className="upload" />
          </styles.Li>
          <styles.Li>
            <label htmlFor="contents">관람안내</label>
            <CKEditor
              id="contents"
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </styles.Li>
          <styles.Li>
            <label htmlFor="upload">전시파일</label>
            <input type="file" id="upload" className="upload" />
          </styles.Li>

          <styles.Li>
            <Button
              width="200"
              height="73"
              background="#ffffff"
              border="2px solid #442e68"
              color="#442e68"
              bgColor="#1c1c1c"
              hoverColor="#ffffff"
            >
              CONFIRM
            </Button>
            <Button
              width="200"
              height="73"
              background="#ffffff"
              border="2px solid #442e68"
              color="#442e68"
              bgColor="#1c1c1c"
              hoverColor="#ffffff"
            >
              CANCEL
            </Button>
          </styles.Li>
        </styles.Ul>
      </styles.Form>
    </styles.Container>
  );
}
