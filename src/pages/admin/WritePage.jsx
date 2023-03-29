import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/common/layout/PageTitle";
import Input from "../../components/common/style/Input";
import Button from "../../components/common/style/Button";
import selectImg from "../../assets/selectImg.jpeg";
// CK에디터로 전시 내용 텍스트에리어 설정
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  li:last-child {
    display: flex;
    justify-content: flex-end;
    margin: 2rem -200px 3rem 0;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  width: 100px;
  height: 58px;
  border: 2px solid #000000;
  padding-left: 1.5rem;
  margin-right: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${selectImg});
  background-size: 50px;
  background-repeat: no-repeat;
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  ::-ms-expand {
    display: none;
  }
`;

const StyledOption = styled.option`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  cursor: pointer;
`;

export default function WritePage() {
  return (
    <Container>
      <PageTitle title="전시 등록" marginBottom={3} />
      <StyledForm>
        <StyledUl>
          <StyledLi>
            <label htmlFor="category">카테고리</label>
            <StyledSelect name="category" id="category">
              <StyledOption value="planned">예정</StyledOption>
              <StyledOption value="progress">진행</StyledOption>
              <StyledOption value="free">무료</StyledOption>
            </StyledSelect>
            <label htmlFor="exhibitionName">전시명</label>
            <Input
              type="text"
              width="400px"
              id="exhibitionName"
              margin="0 0 0 2rem"
              padding="0 3rem 0 0"
            />
          </StyledLi>
          <StyledLi>
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
          </StyledLi>
          <StyledLi>
            <label htmlFor="thumbNail">썸네일</label>
            <input type="file" id="thumbNail" className="upload" />
          </StyledLi>
          <StyledLi>
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
          </StyledLi>
          <StyledLi>
            <label htmlFor="upload">전시파일</label>
            <input type="file" id="upload" className="upload" />
          </StyledLi>

          <StyledLi>
            <Button
              bName="CONFIRM"
              width="200"
              height="73"
              background="#ffffff"
              border="2px solid #442e68"
              color="#442e68"
              bgColor="#1c1c1c"
              hoverColor="#ffffff"
            />
            <Button
              bName="CANCEL"
              width="200"
              height="73"
              background="#ffffff"
              border="2px solid #442e68"
              color="#442e68"
              bgColor="#1c1c1c"
              hoverColor="#ffffff"
            />
          </StyledLi>
        </StyledUl>
      </StyledForm>
    </Container>
  );
}
