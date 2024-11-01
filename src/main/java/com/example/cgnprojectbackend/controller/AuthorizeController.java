package com.example.cgnprojectbackend.controller;

import com.example.cgnprojectbackend.entity.RestBean;
import com.example.cgnprojectbackend.service.AuthorizeService;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Validated
@RestController
@RequestMapping("/api/auth")
public class AuthorizeController {

    @Resource
    AuthorizeService authorizeService;




}
