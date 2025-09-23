// model/User.java
package com.example.backend.model;

public class User {
    private String studentNumber;
    private String id;
    private String name;
    private int level;
    private int percent;

    public User(String studentNumber, String id, String name, int level, int percent) {
        this.studentNumber = studentNumber;
        this.id = id;
        this.name = name;
        this.level = level;
        this.percent = percent;
    }

    public String getStudentNumber() { return studentNumber; }
    public String getId() { return id; }
    public String getName() { return name; }
    public int getLevel() { return level; }
    public int getPercent() { return percent; }
}
