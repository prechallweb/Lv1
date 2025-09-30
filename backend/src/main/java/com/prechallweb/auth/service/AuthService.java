package com.prechallweb.auth.service;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.prechallweb.auth.dto.LoginRequest;
import com.prechallweb.auth.dto.SignupRequest;
import com.prechallweb.auth.entity.User;
import com.prechallweb.auth.repository.UserRepository;
import com.prechallweb.auth.security.JwtUtil;
import com.prechallweb.auth.exception.UserAlreadyExistsException;
import com.prechallweb.auth.exception.InvalidCredentialsException;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    // 회원가입: 새 사용자 저장 후 id 리턴
    public Long register(SignupRequest req) {
        Optional<User> existing = userRepository.findByUsername(req.getUsername());
        if (existing.isPresent()) {
            throw new UserAlreadyExistsException("username already exists");
        }
        User u = new User();
        u.setUsername(req.getUsername());
        u.setPasswordHash(passwordEncoder.encode(req.getPassword()));
        u.setEmail(req.getEmail());
        u.setRole("ROLE_USER");
        User saved = userRepository.save(u);
        return saved.getId();
    }

    // 로그인: 인증 성공 시 JWT 반환
    public String login(LoginRequest req) {
        User user = userRepository.findByUsername(req.getUsername())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid username or password"));
        if (!passwordEncoder.matches(req.getPassword(), user.getPasswordHash())) {
            throw new InvalidCredentialsException("Invalid username or password");
        }
        return jwtUtil.generateToken(user.getUsername());
    }
}
