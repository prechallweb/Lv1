package menu.notice.noticeReport.repository;

import menu.notice.noticeReport.entity.Notice;
import menu.notice.noticeReport.entity.PostCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, UUID> {
    List<Notice> findByCategory(PostCategory category);
}
