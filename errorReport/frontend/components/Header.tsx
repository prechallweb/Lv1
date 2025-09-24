'use client';

import { useState } from 'react';
import React from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className="container">
      <div className="inner" data-copy-guard="on">
        <h1>
          <a className="logo" href="/" draggable={false}>
            <img
              alt="logo"
              loading="lazy"
              width={88}
              height={28}
              decoding="async"
              src="/logo.svg"
              draggable={false}
              style={{ color: 'transparent' }}
            />
          </a>
        </h1>

        <ul className="menuList">
          <li className="menuItem">
            <button className="depth01 title-md">이화이언</button>
          </li>
          <li className="menuItem">
            <button className="depth01 title-md">캠퍼스</button>
          </li>
          <li className="menuItem">
            <button className="depth01 title-md">벗들의 화원</button>
          </li>
          <li className="menuItem">
            <button className="depth01 title-md">라이프화원</button>
          </li>
          <li className="menuItem">
            <button className="depth01 title-md">진로화원</button>
          </li>
          <li className="menuItem">
            <button className="depth01 title-md">공지사항</button>
          </li>
        </ul>

        <div className="search">
          <div className="search-container">
            <label htmlFor="allSearch" className="sr-only">
              검색
            </label>
            <input
              id="allSearch"
              autoComplete="off"
              placeholder="검색어를 입력하세요."
              className="body-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ul className="utilList">
          <li className="utilItem">
            <button type="button">
              <img
                alt="alarm"
                loading="lazy"
                width={20}
                height={20}
                decoding="async"
                src="/icon_bell.svg"
                draggable={false}
                style={{ color: 'transparent' }}
              />
            </button>
          </li>
          <li className="utilItem">
            <a href="/message" draggable={false}>
              <img
                alt="message"
                loading="lazy"
                width={20}
                height={20}
                decoding="async"
                src="/icon_chat.svg"
                draggable={false}
                style={{ color: 'transparent' }}
              />
            </a>
          </li>
          <li className="utilItem">
            <a href="/mypage/my-info" draggable={false}>
              <img
                alt="mypage/my-info"
                loading="lazy"
                width={20}
                height={20}
                decoding="async"
                src="/icon_user.svg"
                draggable={false}
                style={{ color: 'transparent' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
