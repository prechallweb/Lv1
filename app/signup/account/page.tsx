'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupAccountPage() {
  const [form, setForm] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
    nickname: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleNext() {
    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    window.location.href = '/signup/complete';
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
      <main className="styles__Container-sc-1e766077-0 gAuNrX">
        <div className="formInner">
          <h2 className="headline">회원가입</h2>
          <ul className="stepList">
            <li className="title-sm active"><div className="stepCheck" />약관동의</li>
            <li className="title-sm active"><div className="stepCheck" />계정 정보 입력</li>
            <li className="title-sm"><div className="stepCheck" />회원가입 완료</li>
          </ul>

          <form className="styles__Container-sc-90353e60-0 cABONO">
            <fieldset>
              <legend className="title-lg">계정 정보 입력</legend>
              <p className="essentialText body-md">필수 입력 항목입니다.</p>
              <ul className="inputList">
                <li className="inputItem">
                  <label htmlFor="id" className="title-md required">아이디</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input id="id" name="id" value={form.id} onChange={handleChange} placeholder="ex)ewha01" className="body-md" />
                    </div>
                    <button type="button" className="styles__Button-sc-163293cd-0 bNUQQg title-md">중복확인</button>
                  </div>
                  <p className="guideText caption">영문 소문자, 숫자를 포함하여 5~12자로 입력해 주세요.</p>
                </li>

                <li className="inputItem">
                  <label htmlFor="password" className="title-md required">비밀번호</label>
                  <div className="input">
                    <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="ex)ewha123!" className="body-md" />
                  </div>
                  <p className="guideText caption">영문, 숫자, 특수기호를 포함하여 8자 이상 입력해 주세요.</p>
                </li>

                <li className="inputItem">
                  <label htmlFor="confirmPassword" className="title-md required">비밀번호 확인</label>
                  <div className="input">
                    <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="비밀번호를 다시 입력해 주세요." className="body-md" />
                  </div>
                </li>

                <li className="inputItem">
                  <label htmlFor="email" className="title-md required">이메일</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="ex)ewha1886@ewhain.net" className="body-md" />
                    </div>
                    <button type="button" className="styles__Button-sc-163293cd-0 bNUQQg title-md">메일 발송</button>
                  </div>
                </li>

                <li className="inputItem">
                  <label htmlFor="name" className="title-md required">이름</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="ex)김이화" className="body-md" />
                    </div>
                  </div>
                </li>

                <li className="inputItem">
                  <label htmlFor="nickname" className="title-md required">닉네임</label>
                  <div className="inputWrap">
                    <div className="input">
                      <input id="nickname" name="nickname" value={form.nickname} onChange={handleChange} placeholder="닉네임을 작성해 주세요." className="body-md" />
                    </div>
                    <button type="button" className="styles__Button-sc-163293cd-0 bNUQQg title-md">확인</button>
                  </div>
                </li>
              </ul>

              <div className="nextBtn">
                <button type="button" onClick={handleNext} className="styles__Button-sc-163293cd-0 bNUQQg title-md">다음</button>
              </div>
            </fieldset>
          </form>
        </div>
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
      </main>
    </>
  );
}
