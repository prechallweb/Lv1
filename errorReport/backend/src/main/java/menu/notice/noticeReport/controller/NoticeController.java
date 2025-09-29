package menu.notice.noticeReport.controller;

import menu.notice.noticeReport.entity.Notice;
import menu.notice.noticeReport.entity.PostCategory;
import menu.notice.noticeReport.repository.NoticeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/notices")
@CrossOrigin(origins = "*")
public class NoticeController {
    private final NoticeRepository noticeRepository;

    public NoticeController(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    // 전체 공지사항 조회
    @GetMapping
    public List<Notice> getAllNotices() {
        return noticeRepository.findByCategory(PostCategory.notice);
    }

    // 특정 공지사항 조회 (선택 사항)
    @GetMapping("/{id}")
    public Notice getNotice(@PathVariable UUID id) {
        return noticeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("공지사항을 찾을 수 없습니다."));
    }
}
