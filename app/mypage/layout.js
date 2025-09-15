"use client";
import { usePathname } from "next/navigation"; //사이드바 선택시 색깔표시 위해 
import "../globals.css";

export default function MypageLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/mypage", label: "내 정보" },
    { href: "/mypage/auth", label: "인증" },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* 좌측 메뉴 */}
      <aside className="sidebar">
        <div className="sidebar-box">
          <h3>마이페이지</h3>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 우측 메인 컨텐츠 */}
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
