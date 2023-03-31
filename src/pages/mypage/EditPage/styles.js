import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  width: 75%;
  margin-top: 3rem;
  align-items: flex-start;
  flex-direction: column;
`;

export const Form = styled.form`
  font-size: 26px;
  width: auto;
  height: auto;
  margin-left: 150px;
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
    justify-content: center;
    align-items: center;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
