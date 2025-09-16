import styles from "./page.module.css";

export default function Home() {
  return (

    
    <div className={styles.layout}>
      {/* 왼쪽 열 */}
      <aside className={styles.sidebar}>
        {/* 1. 프로필 카드 */}
        <div className={styles.profileCard}>
          {/* 1. 프로필 사진 + 닉네임 */}
          <div className={styles.profileTop}>
            <img src="/profile.png" alt="프로필" className={styles.avatar} />
            <span className={styles.nickname}>User name</span>
            <span className={styles.loginText}>로그인 &gt;</span>
          </div>

          {/* 2. 레벨과 퍼센트 (양쪽 끝 배치) */}
          <div className={styles.levelRow}>
            <span className={styles.levelTag}>Level 4</span>
            <span className={styles.levelPercent}>0%</span>
          </div>

          {/* 3. 텍스트 탭 */}
          <nav className={styles.profileTabs}>
            <span className={styles.tab}>내가 쓴 글</span>
            <span className={styles.tab}>공감글</span>
            <span className={styles.tab}>스크랩 글</span>
          </nav>
        </div>

        {/* 2. 사이드 메뉴 */}
        <div className={styles.sideMenu}>
          <ul>
            <li><span className={styles.icon}>💬</span> 쪽지</li>
            <li><span className={styles.icon}>👤</span> 마이페이지</li>
            <li><span className={styles.icon}>🏫</span> 학교 홈페이지</li>
            <li><span className={styles.icon}>💻</span> 사이버캠퍼스</li>
            <li><span className={styles.icon}>🎓</span> 유레카</li>
            <li><span className={styles.icon}>🚌</span> 셔틀버스</li>
            <li><span className={styles.icon}>📖</span> 열람실 현황</li>
          </ul>
        </div>
      </aside>

      {/* 오른쪽 열 */}
      <main className={styles.main}>
        {/* 3. 상단 배너 */}
        <div className={styles.banner}>
          <h2>이화이언 신규 사이트 이용 안내</h2>
        </div>

    {/* 4. 메인 콘텐츠 */}
<div className={styles.contentBox}>
  <div className={styles.twoCol}>
    {/* 왼쪽 칸 */}
    <div className={styles.col}>
      <h3>실시간 이슈글</h3>
      <p>지금 공감을 얻고 있는 이슈글을 확인해 보세요.</p>
    </div>

    {/* 오른쪽 칸 */}
    <div className={styles.col}>
      <h3>벗들의 화원</h3>
      <nav className={styles.subTabs}>
        <span>비밀화원</span>
        <span>졸업화원</span>
        <span>광고홍보</span>
        <span>새싹화원</span>
        <span>쉐어화원</span>
        <span>공동구매</span>
      </nav>
    </div>
  </div>
</div>

   </main>
    </div>
  );
}