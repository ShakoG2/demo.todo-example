

package com.example.demo.controller;
import com.example.demo.model.TodoModel;
import com.example.demo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public List<TodoModel> getTodoitems() {
        return todoService.getAll();
    }

    @PostMapping
    public ResponseEntity<TodoModel> addTodoitem(@RequestBody TodoModel todoModel) {
        return ResponseEntity.status(HttpStatus.CREATED).body(todoService.add(todoModel));
    }
    @GetMapping("{id}")
    public TodoModel getTodoitem( @PathVariable long id){
        return todoService.get(id);
    }

    @PutMapping("{id}")
    public TodoModel updateTodoitem(@PathVariable long id,@RequestBody TodoModel unsafeTodoModel){
        TodoModel todoitem=todoService.get(id);
        todoitem.setName(unsafeTodoModel.getName());
        todoitem.setIsDone(unsafeTodoModel.getIsDone());
        return todoService.update(todoitem);
    }

    @DeleteMapping("{id}")
     public ResponseEntity<Boolean> deleteTodoitem( @PathVariable long id){
        return ResponseEntity.ok(todoService.delete(id));
    }
}

