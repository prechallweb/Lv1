-- 기본 사용자 2명
INSERT INTO users (username, userid, password_hash, student_num, secret_word_verified, ewha_verified)
VALUES
  ('user1', 'id1', 'hashed_pw1', '2371089', TRUE, TRUE),
  ('user2', 'id2', 'hashed_pw2', '2371090', FALSE, TRUE);

-- 게시판별 샘플 글
INSERT INTO posts (category, title, author_id, content)
SELECT 'secret_garden', '비밀화원 첫 글', u.id, '비밀 얘기...' FROM users u WHERE u.userid = 'id1';

INSERT INTO posts (category, title, author_id, content)
SELECT 'career_garden', '진로 고민 글', u.id, '커리어 질문...' FROM users u WHERE u.userid = 'id1';

INSERT INTO posts (category, title, author_id, content)
SELECT 'notice', '공지: 서버 점검', u.id, '오늘 23시 점검합니다.' FROM users u WHERE u.userid = 'id1';

INSERT INTO posts (category, title, author_id, content)
SELECT 'bug_report', '버그: 글 작성 안됨', u.id, '에디터가 안 열려요.' FROM users u WHERE u.userid = 'id2';