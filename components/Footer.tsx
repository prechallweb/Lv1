import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-grid">
      <div>
        <Image src="/media/logo.36958698.svg" alt="logo" width={100} height={22} />
        <div style={{ marginTop: 8 }}>
          © 2001–2025 이화이언. All rights reserved.
        </div>
      </div>

      <div>
        <strong>ABOUT</strong>
        <div style={{ marginTop: 8 }}>
          <Link href="/">이화이언 소개</Link>
        </div>
      </div>

      <div>
        <strong>CONTACT US</strong>
        <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
          <Link href="/">광고·제휴</Link>
          <Link href="/">오류신고</Link>
          <div className="sns" style={{ marginTop: 8 }}>
            <Image src="/media/icon_instagram.b8ef2cad.svg" alt="insta" width={18} height={18} />
            <Image src="/media/icon_facebook.f30ca868.svg" alt="fb" width={18} height={18} />
            <Image src="/media/icon_naver.6109c159.svg" alt="naver" width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
