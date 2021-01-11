package com.example.demo.service;


import com.example.demo.model.TodoModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TodoService  {

   List <TodoModel> getAll();

   TodoModel get(long id);

   TodoModel  add(TodoModel todoModel);

   TodoModel update(TodoModel todoModel);

   void delete(long id);
}
