package com.prechallweb.auth.controller;

import com.prechallweb.auth.dto.AuthResponse;
import com.prechallweb.auth.dto.LoginRequest;
import com.prechallweb.auth.dto.SignupRequest;
import com.prechallweb.auth.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signup(@Valid @RequestBody SignupRequest req) {
        Long id = authService.register(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("userId", id));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest req) {
        String token = authService.login(req);
        return ResponseEntity.ok(new AuthResponse("Bearer " + token));
    }
}
