// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음
// Kakao 로그인 rest api / REDIRECT_URI 모은 인가코드

// google api key
// AIzaSyB3-1HTnapmoCxqJ60FKz9ykPPIKLsJolY
// CLIENT_ID
// 827259829664-48pjostvlov3n74ua47qfc1eoe4fe4o3.apps.googleusercontent.com
// CLIENT_PW
// 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

const CLIENT_ID = "827259829664-48pjostvlov3n74ua47qfc1eoe4fe4o3.apps.googleusercontent.com";
const REDIRECT_URI =  "http://localhost:3000/";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;