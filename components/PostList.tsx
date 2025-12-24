import Image from "next/image";
import Link from "next/link";

export type Post = {
  id: string;
  title: string;
  badge?: string;    // 예: 취업화원 / 비밀화원
  meta: { author: string; time: string; views: number; comments: number };
};

export default function PostList({ items }: { items: Post[] }) {
  return (
    <div className="post-card">
      {items.map((p) => (
        <div className="post-row" key={p.id}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <Image src="/media/icon_check_off.8b768e3a.svg" alt="" width={16} height={16} />
          </div>

          <div>
            <div className="title">
              <span className="badge">{p.badge ?? "게시판"}</span>
              <Link href={`/post/${p.id}`}>{p.title}</Link>
            </div>

            <div className="meta" style={{ marginTop: 6 }}>
              <Image src="/media/icon_anonymous.8b99f722.svg" alt="" width={14} height={14} />
              <span>익명</span>
              <span>·</span>
              <span>{p.meta.time}</span>
              <span>·</span>
              <Image src="/media/icon_comment.1aa424cc.svg" alt="" width={14} height={14} />
              <span>{p.meta.comments}</span>
              <span>·</span>
              <Image src="/media/icon_view.371923f1.svg" alt="" width={16} height={16} />
              <span>{p.meta.views}</span>
            </div>
          </div>

          <div className="right-arrow" style={{ display: "grid", placeItems: "center" }}>
            <Image src="/media/icon_arrow_right_line.c7ae7466.svg" alt="" width={18} height={18} />
          </div>
        </div>
      ))}
    </div>
  );
}
