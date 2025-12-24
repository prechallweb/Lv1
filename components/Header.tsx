"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = ["이화이언", "캠퍼스", "벗들의 화원", "라이프화원", "진로화원", "공지사항"];

export default function Header() {
  const [q, setQ] = useState("");

  return (
    <>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Image src="/media/logo.36958698.svg" alt="logo" width={92} height={20} />
      </Link>

      <nav className="header-nav">
        {nav.map((n) => (
          <Link key={n} href="/" aria-label={n}>{n}</Link>
        ))}
      </nav>

      <div className="header-fill" />

      <label className="search" aria-label="검색">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="검색어를 입력하세요."
          style={{ border: "none", outline: "none", background: "transparent", flex: 1 }}
        />
      </label>

      <button className="icon-btn" aria-label="알림">
        <Image src="/media/icon_bell.397872af.svg" alt="bell" width={18} height={18} />
      </button>

      <button className="icon-btn" aria-label="프로필">
        <Image src="/media/icon_anonymous.8b99f722.svg" alt="me" width={18} height={18} />
      </button>
    </>
  );
}
