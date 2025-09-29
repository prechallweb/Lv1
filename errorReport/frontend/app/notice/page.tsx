'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import NoticeItem from '../../components/NoticeItem';

export default function Page() {
    const [notices, setNotices] = useState<any[]>([]);

  const fetchNotices = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/notices");
      if (!res.ok) throw new Error("공지사항 불러오기 실패");

      const data = await res.json();
      setNotices(data);
    } catch (err) {
      console.error(err);
      alert("공지사항을 불러오는데 실패했습니다.");
    }
  };
    // 페이지 로딩 시 한 번 호출
    useEffect(() => {
      fetchNotices();
    }, []);

  return (
    <>
      <Header />

      <main className="container">
        <div className="inner" data-copy-guard="on">
          <article>
            {/* 네모 상자: 카테고리 박스 */}
            <div className="category-box">
              <div className="category-title">공지사항</div>
              <ul className="tab-list">
                <li className="tab-item">
                 <Link href="/notice">
                   <button className="tab-button active">공지사항</button>
                 </Link>
                </li>
                <li className="tab-item">
                  <button className="tab-button">FAQ</button>
                </li>
                <li className="tab-item">
                  <Link href="/error-report">
                    <button className="tab-button">오류신고</button>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 광고 영역 */}
            <div className="ad-container">
              <ul className="sub-banner-list"></ul>
              <div className="ad">
                <ins
                  className="adsbygoogle"
                  data-ad-format="fluid"
                  data-ad-layout-key="-6t+ed+2i-1n-4w"
                  data-ad-client="ca-pub-5104864980637436"
                  data-ad-slot="4619147415"
                  data-full-width-responsive="true"
                ></ins>
              </div>
              <div className="ad">
                <ins
                  className="adsbygoogle"
                  data-ad-format="fluid"
                  data-ad-layout-key="-6t+ed+2i-1n-4w"
                  data-ad-client="ca-pub-5104864980637436"
                  data-ad-slot="8366820734"
                  data-full-width-responsive="true"
                ></ins>
              </div>
            </div>
          </article>
          <div className="ininner">
            <div className="bannerWrapper">
              <img
                alt="banner"
                src="https://ewhaian.com/api/download/YjNiZGRkNzIwYjlmZWNhMjgwNDRlNmQ5NmNlOWNkODgzNzg3YTVkZTc4ZmJjYzljMjkxNzI3NWE5ZDZhMTA5ODczYjEzNDk2OGNlZTUzMTMwOGYzNWM2MWIwNDFiMjg0Zjg1MTA3OGJkOTcyZjE3NGMxN2MxY2YzZmYxYTI3OWFlMTdkYTA3ZjRhNjQ0YjRjNThkODNjZTdiZWI5ZGI2MDUzYWYyMjU1MGMzYjQ0ZGZiNjBkMWM5OGE3ZDMwNTA1"
                style={{
                  width: '800px',
                  height: '150px',
                  display: 'block',
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  marginTop: '25px',
                }}
                draggable="false"
              />
            </div>
            <div className="headlineWrap">
              <h2 className="headline">공지사항</h2>
              <button type="button" className="searchBtn">
                <img
                  alt="search"
                  src="/icon_search.svg" // public 폴더 기준
                  width={20}
                  height={20}
                  draggable="false"
                />
              </button>
            </div>
            <p className="subTitle">
              이화이언의 새로운 소식과 안내를 확인해 보세요.
            </p>
            <ul className="noticeListPage">
              <li className="noticeItemPage">
                <Link
                  href="https://ewhaian.com/notice/notice/detail/160000188"
                  className="noticeLink"
                  draggable={false}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <div className="noticeIcon">
                    <img
                      alt="megaphone"
                      loading="lazy"
                      width={16}
                      height={16}
                      decoding="async"
                      src="/icon_megaphone.svg" // public 폴더 기준
                      style={{ color: 'transparent' }}
                      draggable={false}
                    />
                  </div>
                  <p className="listTitle">
                    비밀의 화원 입장을 위한 이화인 인증 방법 안내 (2023.01.18~)
                  </p>
                </Link>
              </li>
            </ul>
            {/* 공지사항 리스트 */}
            <ul className="noticeList">
              {notices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
