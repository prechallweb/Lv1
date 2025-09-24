package menu.notice.errorReport.dto;

import java.util.Arrays;
import org.springframework.web.multipart.MultipartFile;

public class ReportForm {
    private String content;
    private MultipartFile[] files;

    public ReportForm() {
    }

    public ReportForm(String content, MultipartFile[] files) {
        this.content = content;
        this.files = files;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public MultipartFile[] getFiles() {
        return this.files;
    }

    public void setFiles(MultipartFile[] files) {
        this.files = files;
    }

    public String toString() {
        String var10000 = this.content;
        return "ReportForm{content='" + var10000 + "', files=" + Arrays.toString(this.files) + "}";
    }
}
