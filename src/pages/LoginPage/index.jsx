import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../features/auth/authSlice";

import Button from "../../components/common/style/Button";
import Input from "../../components/common/style/Input";
import Span from "../../components/common/style/Span";
import PageTitle from "../../components/common/layout/PageTitle";
import * as styles from "./styles";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const resultAction = await dispatch(loginAsync({ id, pwd }));
      if (loginAsync.fulfilled.match(resultAction)) {
        localStorage.setItem("token", resultAction.payload.accessToken);
        navigate("/");
      } else if (loginAsync.rejected.match(resultAction)) {
        setError(resultAction.payload.data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputId = (e) => {
    setId(e.target.value);
  };

  const inputPwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <styles.Container>
      <PageTitle title="LOGIN" marginBottom={3} />
      <form>
        <Input
          type="text"
          placeholder="아이디"
          id="id"
          margin="1rem 0rem 1rem"
          value={id}
          onChange={inputId}
        ></Input>
        <br />
        <Input
          type="password"
          placeholder="비밀번호"
          id="pwd"
          margin="1rem 0rem 1rem"
          value={pwd}
          onChange={inputPwd}
        ></Input>
        <br />
        <Button
          type="submit"
          margin="0 0 0 55px"
          onClick={clickLogin}
          disabled={isLoading}
        >
          로그인
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
      {error && (
        <Span color="#ff4429" margin="15px" size="20px">
          {error}
        </Span>
      )}
      <div>
        <Span>회원이 아니시라면</Span>
        <Link to="/join" style={{ textDecoration: "none" }}>
          <Span color="#ff4429" hover="#442e68">
            {" "}
            회원가입{" "}
          </Span>
        </Link>
        <Span>을 해주시기 바랍니다.</Span>
        <Link to="/join">
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
        </Link>
      </div>
    </styles.Container>
  );
}

export default LoginPage;
