package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Todo_Table_Items")
public class TodoModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="itemId")
    private Long itemId;

    @Column(name="Name",nullable = false)
    private String Name;

    @Column(name="Done",nullable = false)
    private Boolean isDone = false;

    @Column(name="Date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date createdAt = new Date();

}
