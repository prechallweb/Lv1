"use client";
import { useState } from "react";

export default function AuthPage() {
  const [selectedTab, setSelectedTab] = useState("ewha"); //기본탭은 이화인으로. 

  const [status, setStatus]=useState({
    ewha:false,
    secret:false,
    sprout:false,
  })
  const [code, setCode] = useState(""); // 인증번호 입력값

  const handleSecretSubmit = () => {
    if (code.trim() !== "") {
      setStatus({ ...status, secret: true });
    } else {
      alert("비밀단어를 입력하세요!");
    }
  };

  const renderContent = () => {
    switch(selectedTab) {
      case "ewha":
        return (
          <div style={{textAlign:"center"}}>
            <img src="/images/ewhain.png" width="200px"/>
            {status.ewha ? (
              <p>인증 완료</p>
            ) : (
              <button onClick={() => setStatus({...status, ewha:true})}>
                이화인 인증 신청
              </button>
            )}
            </div>
        );
      case "secret":
        return(
          <div style={{textAlign:"center"}}>
            <img src="/images/secretword.png" width="200px"/>
            {status.secret ? (
              <p>인증 완료</p>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="인증번호 입력"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button onClick={handleSecretSubmit}>인증하기</button>
              </div>
            )}
          </div>
        );
      case "sprout":
        return(
          <div style={{textAlign:"center"}}>
            <img src="/images/sprout.png" width="200px"/>
            {status.sprout ? (
              <p>인증 완료</p>
            ) : (
              <button onClick={() => setStatus({...status, sprout:true})}>
                새싹 인증 신청
              </button>
            )}
          </div>
        );
      default:
        return null;
    }
  };


   return (
    <div style={{ backgroundColor: "#hsl", // 박스 배경 흰색
    border: "1px solid #e0e0e0", // 테두리
    borderRadius: "8px", // 모서리 둥글게
    padding: "20px",
    marginBottom: "20px", }}>
      <h2>인증</h2>
      {/* 탭 버튼 */}
      <div className="button">
        <button onClick={() => setSelectedTab("ewha")}>이화인 인증</button>
        <button onClick={() => setSelectedTab("secret")}>비밀단어 입력</button>
        <button onClick={() => setSelectedTab("sprout")}>새싹 인증</button>
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="card">
        {renderContent()}
      </div>
      
    </div>
  );
}
