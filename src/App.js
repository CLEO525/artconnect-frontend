import React from "react";
import styled from "styled-components";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import EditPage from "./pages/mypage/EditPage";
import "./App.css";

const Wrap = styled.div`
  width: auto;
  height: auto;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrap>
      <JoinPage />
      <LoginPage />
      <EditPage />
    </Wrap>
  );
}

export default App;
