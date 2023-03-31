import styled from "styled-components";
import selectImg from "../../../assets/selectImg.jpeg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  font-size: 26px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
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

export const Option = styled.option`
  font-family: "SUITE";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  cursor: pointer;
`;
