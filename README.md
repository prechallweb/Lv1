---

## Database

- **DBMS**: PostgreSQL
- **주요 테이블**
  - `users`: 회원 정보 (로그인 ID, 비밀번호 해시, 학번, 인증 여부 등)
  - `posts`: 게시글 (카테고리 ENUM, 제목, 내용, 작성자 FK)
- **카테고리 ENUM**: `secret_garden`, `career_garden`, `notice`, `bug_report`

👉 자세한 구조는 `db/schema.sql` 참고

---

## 실행 방법

### 1. DB 초기화
```bash
psql -U postgres -d ewhaian -f db/schema.sql
psql -U postgres -d ewhaian -f db/seed.sql
2. 서버 실행
bash
코드 복사
cd server
npm install
npm run start:dev
3. 프론트엔드 실행
bash
코드 복사
cd frontend
npm install
npm run dev
