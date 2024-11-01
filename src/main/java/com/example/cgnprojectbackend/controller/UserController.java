package com.example.cgnprojectbackend.controller;

import com.example.cgnprojectbackend.entity.RestBean;
import com.example.cgnprojectbackend.entity.user.AccountUser;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/me")
    public RestBean<AccountUser> me(@SessionAttribute("account") AccountUser user){
        return RestBean.success(user);
    }

    @GetMapping("/login")
    public RestBean<AccountUser> login(){
        AccountUser user = new AccountUser();
        return RestBean.success(user);
    }

}
