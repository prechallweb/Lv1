"use client";

export default function FloatingButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="fab" aria-label="글쓰기" onClick={onClick}>
      <span style={{ fontSize: 28, lineHeight: 1 }}>＋</span>
    </button>
  );
}
