import styled from "styled-components";


const FirstLogin = () => {
  return (
    <div>
      <Box>
        {" "}
        <button>뒤로가기</button>
        <button>프로필 사진 추가</button>
      </Box>

      <p>이름 </p>
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
`;