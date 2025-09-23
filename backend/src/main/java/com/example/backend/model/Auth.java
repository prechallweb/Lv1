// model/Auth.java
package com.example.backend.model;

public class Auth {
    private String type;    // secretWord, ewhain, sprout
    private boolean verified;

    public Auth(String type, boolean verified) {
        this.type = type;
        this.verified = verified;
    }

    public String getType() { return type; }
    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }
}
