// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음
// Kakao 로그인 rest api / REDIRECT_URI 모은 인가코드

// kakao 인가코드
// 틀 : "https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code"
// 다 넣은거 : "https://kauth.kakao.com/oauth/authorize?client_id={ddb938f8fed6079e90564fca875e2903}&redirect_uri={localhost:3000/oauth/callback/kakao}&response_type=code"

const CLIENT_ID = "9USIXCYT8MOvNYRxfZVs";
const CALLBACK_URL = "http://localhost:3000/"
const STATE = 'state'

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${CALLBACK_URL}`;