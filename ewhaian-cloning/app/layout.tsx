import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "이화이언",
  description: "",
  icons: "\logo.ico",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
  <div className="container">
    <header className="site-header">
      
          {/* 로고 */}
          <h1 className="logo">
            <img src="/이화이언 로고.svg" width="65" height="65" alt="이화이언 로고" />
          </h1>

{/* 메뉴바 */}
<nav className="menubar">
  <ul>
       <li className="navItem">
      <a href="/">이화이언</a>
      <div className="previewBox">
        <ul>
      <li><a href="/about">이화이언 소개</a></li>
      <li><a href="/team">운영진 소개</a></li>
      <li><a href="/level">레벨 제도</a></li>
      <li><a href="/ads">광고제휴</a></li>
      <li><a href="/honor">명예의 전당</a></li>
      <li><a href="/event">이벤트</a></li>
    </ul>
    </div>
    </li>

    <li className="navItem">
      <a href="/issue">캠퍼스</a>
      <div className="previewBox">  <ul>
      <li><a href="/lineage">이화 계보</a></li>
    </ul>
  </div>
</li>
    <li className="navItem">
      <a href="/community">벗들의 화원</a>
      <div className="previewBox">비밀화원</div>
    </li>
    <li className="navItem">
      <a href="/life">라이프 화원</a>
      <div className="previewBox">
        <ul>
      <li><a href="/about">알바정보</a></li>
      <li><a href="/team">벼룩시장</a></li>
      <li><a href="/level">주거정보</a></li>
  
    </ul>
    </div>
    </li>

    {/* 진로화원 */}
<li className="navItem">
  <a href="/career">진로화원</a>
  <div className="previewBox compact">
    <ul>
      <li><a href="/hire">취업 화원</a></li>
    </ul>
  </div>
</li>

{/* 공지사항 */}
<li className="navItem">
  <a href="/notice">공지사항</a>
  <div className="previewBox compact">
    <ul>
      <li><a href="/notice">공지사항</a></li>
      <li><a href="/about">FAQ</a></li>
      <li><a href="/about">오류신고</a></li>
    </ul>
  </div>
</li>
  </ul>
</nav>
        </header>

        <main>{children}</main>
        <footer className="site-footer">© 2025 앤티웹스</footer>
      </div>
      </body>
    </html>
  );
}
