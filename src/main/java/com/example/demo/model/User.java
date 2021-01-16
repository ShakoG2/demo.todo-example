package com.example.demo.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    private Long id;

    @Column(nullable = false)
    private String usarname;

    @Column(nullable = false,columnDefinition = "text")
    private String password;

    @Column(nullable = false)
    private Boolean active;
}
