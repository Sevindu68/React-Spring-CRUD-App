package com.example.fullstack_app.controller;


import com.example.fullstack_app.exeption.UserNotFoundException;
import com.example.fullstack_app.model.User;
import com.example.fullstack_app.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api/v1")
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class UserController {

    private final UserRepository userRepository;

    @PostMapping("/add")
    User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/get")
    List<User> updateUser() {
        return userRepository.findAll();
    }

    @PutMapping("/update/{id}")
    User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userRepository.findById(id).map(
                user1 -> {
                    user1.setName(user.getName());
                    user1.setEmail(user.getEmail());
                    user1.setUsername(user.getUsername());
                    return userRepository.save(user1);
                }).orElseThrow(
                        () -> new UserNotFoundException(id));
    }

    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User deleted";
    }

    @GetMapping("/get/{id}")
    User updateUser(@PathVariable long id) {
        return userRepository.findById(id).
                orElseThrow(() -> new UserNotFoundException( id ));
    }
}
