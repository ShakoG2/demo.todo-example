package com.example.demo.model;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Todos_items")
public class TodoModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="item_Id")
    private Long id;

    @Column(name="Name",nullable = false)
    private String name;

}
