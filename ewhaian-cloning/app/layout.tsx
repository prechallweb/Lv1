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
      <div className="previewBox">이화이언 소개</div>
    </li>
    <li className="navItem">
      <a href="/issue">캠퍼스</a>
      <div className="previewBox">이화 계보</div>
    </li>
    <li className="navItem">
      <a href="/community">벗들의 화원</a>
      <div className="previewBox">비밀화원</div>
    </li>
    <li className="navItem">
      <a href="/life">라이프화원</a>
      <div className="previewBox">알바 정보</div>
    </li>
    <li className="navItem">
      <a href="/career">진로화원</a>
      <div className="previewBox">취업 화원</div>
    </li>
    <li className="navItem">
      <a href="/notice">공지사항</a>
      <div className="previewBox">공지사항</div>
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
