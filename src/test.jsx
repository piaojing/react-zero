import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [message, setMessage]=useState('My background');
    const [bg, setBg] = useState("powderblue"); // 초기 배경색설정

  const onClickFunc = () => {
    if (bg === "powderblue") {
      setBg("salmon"); // 배경을 쌜몬 색으로 변환
      const timer = setTimeout(() => {
        setBg("green"); // 배경색을 풀색으로 설정
      }, 2000);
      return () => clearTimeout(timer); //timer를 초기값으로
    }
    
  return (
    <h1 className={bg} onClick={onClickFunc}>
      {message}
    </h1>
  );
};

export default App;
