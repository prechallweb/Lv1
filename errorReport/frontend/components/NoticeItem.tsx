import React from 'react';
import Link from 'next/link';

interface NoticeItemProps {
  id: string;
  title: string;
  author?: string;
  content: string;
  category: string; // optional
  createdAt: string;
  url?: string;
  label?: string;
}

const NoticeItem: React.FC<NoticeItemProps> = ({
  id,
  title,
  author = '관리자',
  content,
  category,
  createdAt,
  url = '#', // 기본 링크
  label,
}) => {
  const date = new Date(createdAt).toLocaleDateString();
  const displayLabel = label || '공지사항';

  return (
    <li className="noticeItem">
      <Link href={url} draggable={false} className="noticeLink">
        <div className="noticeContainer">
          <div className="detail">
            <div className="nameTag">
              <div className="nameTagInner small body-sm">
                <div className="nameTagIcon">
                  <img
                    alt="certified"
                    width={20}
                    height={20}
                    src="/icon_certified.svg"
                    draggable={false}
                  />
                </div>
                <p className="nickname">{author}</p>
              </div>
            </div>
            <div className="titleWrap">
              <p className="title title-sm">{title}</p>
              <div className="boardTitle">
                <div className="boardLabel caption">
                  <span className="ck-content">{displayLabel}</span>
                </div>
              </div>
            </div>
            <p className="desc body-md">{content}</p>
            <div className="listBottom caption">
              <p className="date">{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NoticeItem;
