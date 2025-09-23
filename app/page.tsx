import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 16 }}>이화이언 클론 · 샘플 링크</h2>
      <ul>
        <li><Link href="/secret">비밀화원</Link></li>
        <li><Link href="/career">취업화원</Link></li>
        <li><Link href="/write">글쓰기</Link></li>
      </ul>
    </div>
  );
}
