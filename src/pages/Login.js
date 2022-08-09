import React from "react";
import { KAKAO_AUTH_URL } from "../components/Oauth";

// kakao 로그인 참고 : https://data-jj.tistory.com/53

const Login = () => {

  return (
    <div className="login">
      <a className="kakao" href={KAKAO_AUTH_URL}>
        네이버
      </a>
      <button>페이스북</button>
      <button>카카오톡</button>
      <button>구글</button>
    </div>
  )
}
export default Login