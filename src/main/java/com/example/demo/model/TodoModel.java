package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Todos")
public class TodoModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="itemId")
    private Long itemId;

    @Column(name="Name",nullable = false)
    private String name;

}
