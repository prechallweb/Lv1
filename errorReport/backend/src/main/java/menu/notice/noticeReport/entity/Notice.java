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
public class Notice {

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

    @Transient
    private String label; // optional

    @Column(nullable = false)
    private OffsetDateTime createdAt;

    @Column(nullable = false)
    private OffsetDateTime updatedAt;
}
