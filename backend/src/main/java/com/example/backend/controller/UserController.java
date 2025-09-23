// controller/UserController.java
package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.Auth;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    // 메모리 저장 (나중에 DB 연결)
    private User user = new User("2467001", "hong123", "홍길동", 1, 75);
    private Map<String, Auth> authMap = new HashMap<>();

    public UserController() {
        authMap.put("secretWord", new Auth("secretWord", false));
        authMap.put("ewhain", new Auth("ewhain", false));
        authMap.put("sprout", new Auth("sprout", false));
    }

    // 유저 정보
    @GetMapping
    public User getUserInfo() {
        return user;
    }

    // 인증 상태 전체 조회
    @GetMapping("/auth")
    public Collection<Auth> getAuthStatus() {
        return authMap.values();
    }

    // 비밀단어 인증
    @PostMapping("/auth/secretWord")
    public String verifySecretWord(@RequestParam String word) {
        if (word.equals("메롱")) {
            authMap.get("secretWord").setVerified(true);
            return "비밀단어 인증 성공";
        }
        return "비밀단어 인증 실패";
    }

    // 이화인 인증 (버튼 누르면 무조건 성공)
    @PostMapping("/auth/ewhain")
    public String verifyEwhain() {
        authMap.get("ewhain").setVerified(true);
        return "이화인 인증 성공";
    }

    // 새싹 인증 (버튼 누르면 무조건 성공)
    @PostMapping("/auth/sprout")
    public String verifySprout() {
        authMap.get("sprout").setVerified(true);
        return "새싹 인증 성공";
    }
}
