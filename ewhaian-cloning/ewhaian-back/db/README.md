# Ewhaian Database

## 1. Schema
- schema.sql 실행 → users, posts 테이블 및 ENUM 생성

### users 테이블
- id (UUID, PK)
- username
- userid (Unique)
- password_hash
- student_num
- secret_word_verified (boolean)
- ewha_verified (boolean)
- created_at, updated_at

### posts 테이블
- id (UUID, PK)
- category (ENUM: secret_garden, career_garden, notice, bug_report)
- title
- author_id (FK → users.id)
- content
- created_at, updated_at

## 2. Seed Data
- seed.sql 실행 → 기본 유저 2명, 카테고리별 게시글 1개씩 생성
