package com.example.fullstack_app.repository;

import com.example.fullstack_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User deleteById(long id);

}
