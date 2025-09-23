export default function main() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>메인</h1>
      <p style={{ fontSize: "1.2rem" }}>어쩌구(나중에추가).</p>
      <a href="/mypage/myinfo" style={{ marginTop: "1rem", color: "blue" }}>
        마이페이지로 이동
      </a>
    </div>
  );
}
