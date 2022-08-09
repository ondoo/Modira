import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Write from "./pages/Write";
import FirstLogin from "./pages/FirstLogin";
import MyInfo from "./pages/MyInfo";



function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<Write />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/firstlogin" element={<FirstLogin />} />
      </Routes>
    </>
  );
}

export default App;
