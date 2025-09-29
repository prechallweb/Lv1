package menu.notice.noticeReport.repository;

import menu.notice.noticeReport.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
    // 필요하면 추가 쿼리 메서드 작성 가능
}