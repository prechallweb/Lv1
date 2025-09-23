import Image from "next/image";
import PostList, { Post } from "@/components/PostList";
import Pagination from "@/components/Pagination";
import FloatingButton from "@/components/FloatingButton";

const side = [
  "비밀화원","졸업화원","광고홍보","새싹화원","쉐어화원","공동구매","스터디룸",
  "교내뉴스","정보화원","의류산업학과 게시판","신앙대 벗들","커미벗들 COME ON-",
  "체육과학부 벗들","이움이들","낙생대 벗들루","응온 벗들루","벗들의 미술사학",
  "비상추적","인지·데싸 벗들의 화원","경제학도 벗들의 화원","최강정의"
];

const posts: Post[] = [
  { id: "s1", title: "책 추천｜비밀화원", badge:"비밀화원", meta:{author:"익명", time:"1시간 전", views:120, comments:3}},
  { id: "s2", title: "목걸이 추천", badge:"비밀화원", meta:{author:"익명", time:"5시간 전", views:98, comments:5}},
  { id: "s3", title: "형제자매한테 배우는 사회성", badge:"비밀화원", meta:{author:"익명", time:"어제", views:76, comments:1}},
];

export default function SecretPage() {
  return (
    <>
      {/* 배너 */}
      <section className="board-banner">
        <div className="banner-title">비밀화원</div>
        <div className="banner-illust">
          <Image src="/media/banner_left.png" alt="banner" width={340} height={170} />
        </div>
      </section>

      <div className="page-row" style={{ marginTop: 16 }}>
        {/* 왼쪽 메뉴 */}
        <aside className="side">
          <ul>
            {side.map((s, i) => (
              <li key={s}>
                <span className={i===0 ? "active" : ""}>{s}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* 오른쪽 본문 */}
        <section>
          {/* 공지 카드 */}
          <div className="notice-card">
            <Image src="/media/icon_megaphone.d08c3fa4.svg" alt="" width={18} height={18}/>
            <div style={{ fontWeight: 700 }}>필독! 이화이언 비밀의 화원 운영 정책</div>
          </div>

          {/* 툴바 */}
          <div className="board-toolbar">
            <div className="toolbar-left">
              <span className="tag">최신순 <Image src="/media/icon_arrow_down.f66e12e9.svg" alt="" width={14} height={14}/></span>
              <span className="tag">전체 <Image src="/media/icon_arrow_down.f66e12e9.svg" alt="" width={14} height={14}/></span>
              <span className="tag">공감글</span>
              <span className="tag">스크랩글</span>
            </div>
            <div className="toolbar-right">
              <button className="more-btn" aria-label="더보기">
                <Image src="/media/icon_more.9df2d117.svg" alt="" width={16} height={16}/>
              </button>
            </div>
          </div>

          {/* 리스트 */}
          <PostList items={posts} />

          {/* 페이지네이션 */}
          <Pagination total={10} initial={1} />
        </section>
      </div>

      <FloatingButton />
    </>
  );
}
