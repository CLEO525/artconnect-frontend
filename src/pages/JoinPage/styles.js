import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  font-size: 26px;
  width: 690px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
