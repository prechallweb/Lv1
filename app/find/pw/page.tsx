'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FindPwPage() {
  const [form, setForm] = useState({ id: '', email: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('비밀번호 찾기 요청:', form);
    // TODO: 비밀번호 찾기 API 연결
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

      <main className="styles__Container-sc-7069b3c5-0 hnjHY">
        <div className="formInner">
          <ul className="tabList">
            <li><Link className="title-md" href="/find/id">아이디 찾기</Link></li>
            <li><Link className="title-md active" href="/find/pw">비밀번호 찾기</Link></li>
          </ul>

          <form className="styles__Container-sc-f57bafe6-0 eyBybS" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="sr-only">비밀번호 찾기</legend>

              <ul className="inputList">
                <li>
                  <label htmlFor="id" className="title-md">아이디</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input
                        id="id"
                        name="id"
                        placeholder="아이디를 입력해 주세요."
                        className="body-md"
                        value={form.id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <label htmlFor="email" className="title-md">이메일</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input
                        id="email"
                        name="email"
                        placeholder="이메일을 입력해 주세요."
                        className="body-md"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </li>
              </ul>

              <div className="btnWrap">
                <button type="submit" className="styles__Button-sc-163293cd-0 bNUQQg title-md">비밀번호 찾기</button>
                <Link href="/login">
                  <button type="button" className="styles__Button-sc-163293cd-0 bNUQQg title-md secondary">로그인</button>
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </main>

      <footer className="styles__Container-sc-1f3a1427-0 euOJDo">
        <div className="footerTop">
          <div className="inner">
            <div className="logo">
              <img src="/icons/logo02.svg" alt="logo" width={111} height={22} />
            </div>
            <div className="info title-sm">
              <p>이화이언 후원하기</p>
              <p>신한 100-026-784849 이화이언</p>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="inner">
            <p className="copyright body-md">© 2001-2025 이화이언. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
