import React from "react";
import styled from "styled-components";

const FirstLogin = () => {
  //https://velog.io/@jahommer/React-%EA%B2%80%EC%83%89%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0
  
  // 검색창에 검색어 변화
  const [search, setSearch] = React.useState("");
  // 변화된 value값을 변경
  const onChange = (e) => {
    setSearch(e.target.value);
    //  검색값 걸러내기
    //  const filterTitle = movies.filter((p) => {
    //    return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    //  });
  };
  return (
    <div>
      <Box>
        {" "}
        <button>뒤로가기</button>
        <input type="file" accept="image/*" />
      </Box>
      <LoginBox>
        <InputBox>
          <p>이름</p>
          <Input type="text" placeholder="김아무개"></Input>
        </InputBox>
        <InputBox>
          {" "}
          <p>전화번호 </p>
          <Input type="text" placeholder="010.0000.0000"></Input>
        </InputBox>
        <InputBox>
          <p>닉네임 </p>
          <Input type="text" placeholder="3~6자 이내로 입력해주세요."></Input>
        </InputBox>
        <InputBox>
          <p>나이대 </p>
          {/* https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-select-box-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-a20e2bf082b2 */}
          <select>
			<option>
				선택하기
			</option>
			<option key="apple" value="apple">80년대생</option>
			<option key="orange" value="orange">90년대생</option>
      <option key="orange" value="orange">00년대생</option>
		</select>
        </InputBox>
        <InputBox>
          <p>성별 </p>
            <input type="radio" name="gener" checked="checked" /> <span class="up">남자</span>&nbsp;&nbsp; <input type="radio"     name="gener"/> <span class="up">여자</span>
        </InputBox>
        <InputBox>
        {/* https://intrepidgeeks.com/tutorial/0213-registered-member-next-zip-code-api */}
          <p>주소 </p>
          <input type="text" placeholder="주소검색" value={search} onChange={onChange} />🔍︎
        </InputBox>
        <input type="checkbox"></input>
        <label for="cheese">(필수) 개인정보 취급방침에 동의합니다.</label>
        <div>보기</div>
        <button>등록완료</button>
      </LoginBox>
    </div>
  );
};
export default FirstLogin;

const Box = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
`;

const LoginBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const InputBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  border: 0.1px solid #e5e7eb;
  padding: 12px 16px;
  &:focus {
    outline: none;
  }
`;
