"use client";
import { useEffect, useState } from "react";

export default function AuthPage() {
  const [selectedTab, setSelectedTab] = useState("ewhain"); //기본탭은 이화인으로. 
  const [status, setStatus]=useState({
    ewha:false,
    secret:false,
    sprout:false,
  });
  const [code, setCode] = useState(""); // 인증번호 입력값
  const [message, setMessage]=useState("");

    // 1. 인증 상태 불러오기
  const loadStatus = () => {
    fetch("http://localhost:8080/api/user/auth")
      .then((res) => res.json())
      .then((data) => {
        // data = [{type:"ewhain", verified:false}, ...]
        const newStatus = { ewhin: false, secret: false, sprout: false };
        data.forEach((a) => {
          if (a.type === "ewhain") newStatus.ewhain = a.verified;
          if (a.type === "secretWord") newStatus.secret = a.verified;
          if (a.type === "sprout") newStatus.sprout = a.verified;
        });
        setStatus(newStatus);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadStatus();
  }, []);


  const handleSecretSubmit = () => {
    if (code.trim() === "") {
      alert("비밀단어를 입력하세요!");
      return;
    } 
    fetch(
      `http://localhost:8080/api/user/auth/secretWord?word=${encodeURIComponent(
        code
      )}`,
      { method: "POST" }
    )
      .then((res) => res.text())
      .then((msg) => {
        setMessage(msg);
        loadStatus();
      });
  };

// 3. 이화인 인증
  const handleEwhain = () => {
    fetch("http://localhost:8080/api/user/auth/ewhain", { method: "POST" })
      .then((res) => res.text())
      .then((msg) => {
        setMessage(msg);
        loadStatus();
      });
  };

   // 4. 새싹 인증
  const handleSprout = () => {
    fetch("http://localhost:8080/api/user/auth/sprout", { method: "POST" })
      .then((res) => res.text())
      .then((msg) => {
        setMessage(msg);
        loadStatus();
      });
  };


  const renderContent = () => {
    switch(selectedTab) {
      case "ewhain":
        return (
          <div style={{textAlign:"center"}}>
            <img src="/images/ewhaininfo.png" width="50px" height="50"/>
            {status.ewhain ? (
              <p>인증 완료~</p>
            ) : (
              <button onClick={handleEwhain}>이화인 인증 신청</button>
            )}
            </div>
        );
      case "secret":
        return(
          <div style={{textAlign:"center"}}>
            <img src="/images/secretwordinfo.png" width="50px" height="50"/>
            {status.secret ? (
              <p>인증 완료</p>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="비밀단어 입력"
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
            <img src="/images/sproutinfo.png" width="50px" height="50"/>
            {status.sprout ? (
              <p>인증 완료</p>
            ) : (
              <button onClick={handleSprout}>
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
        <button onClick={() => setSelectedTab("ewhain")}>이화인 인증</button>
        <button onClick={() => setSelectedTab("secret")}>비밀단어 입력</button>
        <button onClick={() => setSelectedTab("sprout")}>새싹 인증</button>
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="card">{renderContent()}</div>

      {/* 결과 메시지 */}
      {message && <p>{message}</p>}
      
    </div>
  );
}
