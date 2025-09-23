
"use client";
import { useState, useEffect } from "react";

export default function MyInfo() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
  
  if (!user) {
    return <div>로딩띠예...</div>;
  }

  return (
    <div className="mypage-container" style={{
      margin: "0 auto",
      width: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}>
      <h2>내 정보</h2>
      {/*학생 정보 박스*/}
      <div className="card" >
      <ul style={{listStyle:"none", padding:0, lineHeight:"1.8"}}>
      <li><strong>레벨</strong>   Level{user.level} ({user.percent}%)</li>
      <li><strong>아이디</strong> {user.id}</li>
      <li><strong>이름</strong>   {user.name}</li>
      <li><strong>학번</strong>   {user.studentNumber}</li>
      </ul>
      </div>

      {/*인증 정보 박스 3개*/}
    <div className="card">
      <p><strong>비밀단어 인증</strong>   {user.secretWordVerified ? "완료" : "미완료" }</p>
    </div>
    <div className="card">
      <p><strong>이화인 인증</strong>   {user.ewhainVerified ? "완료" : "미완료" }</p>
    </div>
    <div className="card">
      <p><strong>새싹 인증</strong>   {user.sproutVerified ? "완료" : "미완료" }</p>
    </div>

    
    {/* 로그아웃 버튼*/}
    <div className="button"><button>
          로그아웃
        </button>
      </div>
    </div>  
  );
}
