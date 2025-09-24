package menu.notice.errorReport.controller;

import lombok.extern.slf4j.Slf4j;
import menu.notice.errorReport.dto.ReportForm;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/report")
public class ReportController {

    @PostMapping("/create")
    public String createReport(
            @RequestPart("content") String content,          // 오류 내용
            @RequestPart(value = "files", required = false) List<MultipartFile> files // 첨부 파일
    ) {
        log.info("오류 내용: {}", content);

        if (files != null) {
            for (MultipartFile file : files) {
                log.info("첨부 파일: {} ({} bytes)", file.getOriginalFilename(), file.getSize());
            }
        }

        return "신고 완료";
    }
}
