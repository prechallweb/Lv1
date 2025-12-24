import Image from "next/image";
import PostList, { Post } from "@/components/PostList";
import Pagination from "@/components/Pagination";
import FloatingButton from "@/components/FloatingButton";

const side = [
  "진로화원","취업화원","로준화원","CPA화원","법리사회원",
  "노무사화원","임용화원","변호사회원","행의사회원","공시화원",
  "세무사화원","대학원화원","기타 고시화원","지난화원"
];

const posts: Post[] = [
  { id:"c1", title:"DB) 한국관람 마케팅리서치 인턴 면접 질문", badge:"취업화원", meta:{author:"익명", time:"14분 전", views:201, comments:6}},
  { id:"c2", title:"2025 하반기 삼성 공채 서류 합불 불판", badge:"취업화원", meta:{author:"익명", time:"2시간 전", views:447, comments:7}},
  { id:"c3", title:"삼성 서류떨어졌음...", badge:"취업화원", meta:{author:"익명", time:"어제", views:133, comments:1}},
];

export default function CareerPage() {
  return (
    <>
      {/* 배너 */}
      <section className="board-banner">
        <div className="banner-title">취업화원</div>
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
                <span className={i===1 ? "active" : ""}>{s}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* 오른쪽 본문 */}
        <section>
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
