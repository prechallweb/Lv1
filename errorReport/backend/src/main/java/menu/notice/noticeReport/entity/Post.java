package menu.notice.noticeReport.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "posts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PostCategory category;

    @Column(nullable = false)
    private String title;

    @Column(name = "author_id", nullable = false)
    private UUID authorId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String fileName;

    private String fileData; // 파일 경로 저장

    @Column(nullable = false)
    private OffsetDateTime createdAt;

    @Column(nullable = false)
    private OffsetDateTime updatedAt;
}
