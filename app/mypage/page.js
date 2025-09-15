
"use client";
import { useState, useEffect } from "react";

export default function MyPage() {
  const [student, setStudent] = useState(null);
  
   useEffect(() => {
    // 지금은 백엔드가 없으니까 임시 데이터 사용
    const mockData = {
      id: "하하",
      name: "박지예",
      studentId: "2467013",
      level:3,
      percent:21,
      secretWord:true,
      ewhaAuth:true,
      sproutAuth:false,
    };
    setStudent(mockData);
  }, []);
  
  if (!student) {
    return <div>Loading...</div>;
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
      <li><strong>레벨</strong>   Level{student.level} ({student.percent}%)</li>
      <li><strong>아이디</strong> {student.id}</li>
      <li><strong>이름</strong>   {student.name}</li>
      <li><strong>학번</strong>   {student.studentId}</li>
      </ul>
      </div>

      {/*인증 정보 박스 3개*/}
    <div className="card">
      <p><strong>비밀단어 인증</strong>   {student.secretWord ? "완료" : "미완료" }</p>
    </div>
    <div className="card">
      <p><strong>이화인 인증</strong>   {student.ewhaAuth ? "완료" : "미완료" }</p>
    </div>
    <div className="card">
      <p><strong>새싹 인증</strong>   {student.sproutAuth ? "완료" : "미완료" }</p>
    </div>

    
    {/* 로그아웃 버튼*/}
    <div className="button"><button>
          로그아웃
        </button>
      </div>
    </div>  
  );
}
