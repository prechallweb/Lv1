"use client";

import Image from "next/image";
import { useState } from "react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [agree, setAgree] = useState(false);
  const canSubmit = title.trim().length > 0 && body.trim().length > 0 && agree;

  return (
    <>
      {/* 배너(목업데이터로 넣음) */}
      <section className="board-banner">
        <div className="banner-title">글 작성</div>
        <div className="banner-illust">
          <Image src="/media/banner_left.png" alt="banner" width={340} height={170} />
        </div>
      </section>

      <div className="page-row" style={{ marginTop: 16 }}>
        <aside className="side">
          <ul>
            <li><span className="active">취업화원</span></li>
            <li><span>비밀화원</span></li>
          </ul>
        </aside>

        <section>
          <div className="form">
            <input
              className="input"
              placeholder="제목을 입력해 주세요."
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />

            <div className="form-row" style={{ gap: 6 }}>
              <button className="btn" title="사진">
                <Image src="/media/icon_logo_symbol.226cce23.svg" alt="" width={16} height={16}/>
              </button>
              <button className="btn" title="이미지">
                <Image src="/media/icon_anonymous.8b99f722.svg" alt="" width={16} height={16}/>
              </button>
            </div>

            <textarea
              className="textarea"
              placeholder="내용을 작성해 주세요."
              value={body}
              onChange={(e)=>setBody(e.target.value)}
            />

            <div className="form-panel" style={{ display:"grid", gap:10 }}>
              <div className="form-row">
                <strong>게시판 정책 동의</strong>
                <span style={{ color:"var(--muted)", fontSize:13 }}> (정책 보기)</span>
              </div>
              <label className="form-row" style={{ userSelect:"none" }}>
                <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
                <span>동의하기</span>
              </label>

              <div className="form-row" style={{ justifyContent:"flex-end", marginTop:4 }}>
                <button className="btn ghost">취소</button>
                <button className="btn primary" disabled={!canSubmit}>등록</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
