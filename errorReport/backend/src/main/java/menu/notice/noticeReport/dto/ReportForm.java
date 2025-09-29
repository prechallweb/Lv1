package menu.notice.noticeReport.dto;

import org.springframework.web.multipart.MultipartFile;

public class ReportForm {
    private String content;
    private String category;
    private MultipartFile file;

    public ReportForm() {
    }

    public ReportForm(String content, MultipartFile file) {
        this.content = content;
        this.file = file;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public MultipartFile getFile() {
        return this.file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public String toString() {
        return "ReportForm{content='" + content + "', file=" + (file != null ? file.getOriginalFilename() : "null") + "}";
    }
}
