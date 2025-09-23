'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ id: '', password: '', rememberId: false, stayLogin: false });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('로그인 데이터:', form);
    // TODO: 실제 로그인 API 호출로 교체
  }

  return (
    <>
      <header className="styles__Container-sc-ea066d6e-0 btJhKA">
        <div className="inner">
          <h1>
            <Link href="/" className="logo">
              <img src="/icons/logo.svg" alt="logo" width={90} height={28} />
            </Link>
          </h1>
          <ul className="menuList">
            <li className="menuItem"><button className="depth01 title-md">이화이언</button></li>
            <li className="menuItem"><button className="depth01 title-md">캠퍼스</button></li>
            <li className="menuItem"><button className="depth01 title-md">벗들의 화원</button></li>
            <li className="menuItem"><button className="depth01 title-md">라이프화원</button></li>
            <li className="menuItem"><button className="depth01 title-md">진로화원</button></li>
            <li className="menuItem"><button className="depth01 title-md">공지사항</button></li>
          </ul>
          <div className="search">
            <label htmlFor="allSearch" className="sr-only">검색</label>
            <input id="allSearch" placeholder="검색어를 입력하세요." className="body-md" />
          </div>
        </div>
      </header>

      <main className="styles__Container-sc-c23802dd-0 bHaHiZ">
        <div className="formInner">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="headline">로그인</legend>

              <ul className="inputList">
                <li>
                  <div className="styles__Container-sc-4b4c6b6b-0 hESagk">
                    <label htmlFor="id" className="title-md">아이디</label>
                    <div className="inputWrap">
                      <div className="input">
                        <input
                          autoComplete="off"
                          id="id"
                          name="id"
                          placeholder="아이디를 입력해 주세요."
                          className="body-md"
                          type="text"
                          value={form.id}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="styles__Container-sc-9c817c56-0 wQPGZ">
                    <label htmlFor="password" className="title-md">비밀번호</label>
                    <div className="input">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력해 주세요."
                        className="body-md"
                        type="password"
                        value={form.password}
                        onChange={onChange}
                      />
                      <button type="button" className="visibilityBtn" aria-label="비밀번호 표시 토글">
                        {/* 아이콘이 없으면 텍스트로 대체 */}
                        <img src="/icons/icon_visibility_off.svg" alt="visibility" width="18" height="18" />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="checkList">
                <div className="checkItem">
                  <input
                    id="rememberId"
                    name="rememberId"
                    type="checkbox"
                    checked={form.rememberId}
                    onChange={onChange}
                  />
                  <label htmlFor="rememberId">
                    <span className="checkBox"></span>
                    <span className="checkText title-sm">아이디 기억</span>
                  </label>
                </div>

                <div className="checkItem">
                  <input
                    id="stayLogin"
                    name="stayLogin"
                    type="checkbox"
                    checked={form.stayLogin}
                    onChange={onChange}
                  />
                  <label htmlFor="stayLogin">
                    <span className="checkBox"></span>
                    <span className="checkText title-sm">로그인 유지</span>
                  </label>
                </div>
              </div>

              <div className="loginBtn">
                <button type="submit" className="styles__Button-sc-163293cd-0 bNUQQg title-md">로그인</button>
              </div>

              <ul className="linkList">
                <li><Link className="caption" href="/find/id">아이디 찾기</Link></li>
                <li><Link className="caption" href="/find/pw">비밀번호 찾기</Link></li>
                <li><Link className="caption" href="/signup">회원가입</Link></li>
              </ul>
            </fieldset>
          </form>
        </div>

        {/* 간단한 footer (원본 일부) */}
        <footer className="styles__Container-sc-1f3a1427-0 euOJDo">
          <div className="footerTop">
            <div className="inner">
              <div className="logo"><img alt="logo" src="/icons/logo02.svg" width="111" height="22" /></div>
              <div className="info title-sm">
                <p>이화이언 후원하기</p>
                <p>신한 100-026-784849 이화이언</p>
              </div>
              <div className="footerBottom">
                <div className="inner">
                  <p className="copyright body-md">© 2001-2025 이화이언. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

    </>
  );
}
