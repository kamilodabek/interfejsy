package com.politechnika.interfejsy;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/test")
    public int test(){
        return 1;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(
            @RequestBody AddUserRequest request
    ){
        return ResponseEntity.ok(userService.add(request));
    }

    @GetMapping("/read/{id}")
    public ResponseEntity<User> checkUser(

    )

    @PostMapping("/update/{id}")
    public ResponseEntity<String> updateUser(

    )

    @PostMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(

    )

    @GetMapping("/viewAllUsers")
    public ResponseEntity<User> viewAllUsers(

    )
}
