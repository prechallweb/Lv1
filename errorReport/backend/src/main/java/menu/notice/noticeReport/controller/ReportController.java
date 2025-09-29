package menu.notice.noticeReport.controller;

import lombok.extern.slf4j.Slf4j;
import menu.notice.noticeReport.dto.ReportForm;
import menu.notice.noticeReport.entity.Post;
import menu.notice.noticeReport.entity.PostCategory;
import menu.notice.noticeReport.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.UUID;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/report")
public class ReportController {

    @Autowired
    private PostRepository repository;

    @PostMapping("/create")
    public String createReport(@ModelAttribute ReportForm form) throws IOException {
        log.info("오류 내용: {}", form.getContent());

        MultipartFile file = form.getFile();
        String fileName = null;
        String filePath = null;

        if (file != null && !file.isEmpty()) {
            fileName = file.getOriginalFilename();
            String uploadDir = new File(System.getProperty("user.dir"), "uploads").getAbsolutePath();
            File dest = new File(uploadDir, fileName);
            dest.getParentFile().mkdirs(); // 폴더 없으면 생성
            file.transferTo(dest);

            filePath = dest.getAbsolutePath();
            log.info("첨부 파일 저장: {} ({} bytes)", fileName, file.getSize());
        }

        Post post = Post.builder()
                .title("오류 신고")
                .category(PostCategory.valueOf(form.getCategory().toLowerCase()))
                .authorId(UUID.fromString("8747d55c-cdf9-4acc-8782-20903d1f129b")) // ✅ 실제 존재하는 UUID -> 추후 수정해야함
                .content(form.getContent())
                .fileName(fileName)
                .fileData(filePath) // 경로 저장
                .createdAt(OffsetDateTime.now())
                .updatedAt(OffsetDateTime.now())
                .build();

        repository.save(post);

        log.info("신고 저장 완료: id={}", post.getId());

        return "신고 완료";
    }
}
