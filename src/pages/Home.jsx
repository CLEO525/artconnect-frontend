import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h1>example</h1>
      <p>예시용 인덱스 페이지</p>
      <ul>
        <li>
          <Link to="/login">로그인 페이지</Link>
        </li>
      </ul>
    </div>
  );
}
