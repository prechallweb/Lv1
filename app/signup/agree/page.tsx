'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupAgreePage() {
  const [checked, setChecked] = useState({
    terms: false,
    privacy: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked: isChecked } = e.target;
    setChecked(prev => ({ ...prev, [id]: isChecked }));
  }

  function handleNext() {
    if (!checked.terms || !checked.privacy) {
      alert('모든 약관에 동의해야 합니다.');
      return;
    }
    window.location.href = '/signup/account'; // Next.js 라우팅
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
            <li className="title-sm"><div className="stepCheck" />계정 정보 입력</li>
            <li className="title-sm"><div className="stepCheck" />회원가입 완료</li>
          </ul>

          <form className="styles__Container-sc-8675cbf-0 jqQdeH">
            <fieldset>
              <legend className="title-lg">약관동의</legend>
              <p className="essentialText body-md">필수 동의 사항입니다.</p>
              <ul className="termsList">
                <li className="termsItem">
                  <p className="title-md title">이용약관</p>
                  <Link href="/terms/terms-of-use" target="_blank" className="link body-md">전문 보기</Link>
                  <div className="check">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={checked.terms}
                      onChange={handleChange}
                    />
                    <label htmlFor="terms">
                      <span className="checkBox"></span>
                      <span className="checkText title-sm">이용약관 동의</span>
                    </label>
                  </div>
                </li>

                <li className="termsItem">
                  <p className="title-md title">개인정보 보호정책</p>
                  <Link href="/terms/privacy-policy" target="_blank" className="link body-md">전문 보기</Link>
                  <div className="check">
                    <input
                      id="privacy"
                      type="checkbox"
                      checked={checked.privacy}
                      onChange={handleChange}
                    />
                    <label htmlFor="privacy">
                      <span className="checkBox"></span>
                      <span className="checkText title-sm">개인정보 보호정책 동의</span>
                    </label>
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
