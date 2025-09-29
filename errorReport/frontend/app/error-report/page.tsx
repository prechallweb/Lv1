'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Link from "next/link";

export default function Page() {
  const [errorContent, setErrorContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("bug_report");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFile(e.target.files[0]); // 한 파일만 선택
  }
};

const handleFileRemove = () => {
  setFile(null);
    const input = document.getElementById('fileUpload') as HTMLInputElement;
    if (input) input.value = ''; // input 값 초기화
};

const handleSubmit = async () => {
  if (!errorContent.trim()) {
    alert('오류 내용을 입력해주세요!');
    return;
  }

  // FormData 객체 생성 (multipart/form-data 형식)
  const formData = new FormData();
  formData.append("content", errorContent);
  formData.append("category", selectedCategory);

    if (file) {
      formData.append("file", file); // 한 파일만 추가
    }

  try {
    const res = await fetch("http://localhost:8080/api/report/create", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("서버 요청 실패");
    }

    const msg = await res.text();
    alert(msg);

    // 입력값 초기화
    setErrorContent("");
    setFile(null);
  } catch (err) {
    console.error(err);
    alert("오류 신고에 실패했습니다.");
  }
};

  // 사용자가 제출 버튼을 누르면 텍스트박스와 state가 함께 초기화되도록
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
                    <button className="tab-button">공지사항</button>
                  </Link>
                </li>
                <li className="tab-item">
                  <button className="tab-button">FAQ</button>
                </li>
                <li className="tab-item">
                <Link href = "/error-report">
                  <button className="tab-button active">오류신고</button>
                </Link>
                </li>
              </ul>
            </div>
          </article>

          <div className="contentInner">
            <div className="styles-container">
              <div className="stitle">
                <h2 className="headline">오류신고</h2>
                <p className="title-sm subTitle">
                사이트 이용 중 불편한 점이 있다면 알려주세요. 빠르게 확인할게요.
                </p>
              </div>
              {/* 오류 내용 입력 */}
              <div className="errorReport">
                <div className="styles-container2">
                  <label className="title-md required">오류 내용</label>
                  <textarea
                    autoComplete="off"
                    placeholder="오류 내용을 구체적으로 적어주시기 바랍니다."
                    className="body-md"
                    value={errorContent}
                    onChange={(e) => setErrorContent(e.target.value)}
                  />
                </div>
              </div>

              {/* 파일 업로드 */}
              <div className="fileUpload">
                <p className="fileUploadTitle title-md">파일첨부</p>
                <div className="styles-Container3">
                  <div className="uploadBtn">
                    <label
                      htmlFor="fileUpload"
                      className="styles-Button title-sm small secondary"
                    >
                      파일 첨부
                    </label>
                  </div>
                  <input
                    id="fileUpload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                    {/* 선택한 파일 표시 영역 */}
                    {file && (
                      <div className="file-item">
                        {file.name}
                        <button
                          type="button"
                          className="file-remove-btn"
                          onClick={handleFileRemove}
                        >
                          X
                        </button>
                      </div>
                    )}
                </div>
              </div>

              {/* 신고 버튼 */}
              <div className="reportBtn">
                <button
                  type="button"
                  className="styles-Button2 title-md"
                  onClick={handleSubmit}
                >
                  신고
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
