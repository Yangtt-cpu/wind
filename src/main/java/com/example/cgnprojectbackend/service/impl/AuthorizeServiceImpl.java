package com.example.cgnprojectbackend.service.impl;
import com.example.cgnprojectbackend.entity.auth.Account;
import com.example.cgnprojectbackend.mapper.UserMapper;
import com.example.cgnprojectbackend.service.AuthorizeService;
import javax.annotation.Resource;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class AuthorizeServiceImpl implements AuthorizeService {
        @Resource
        UserMapper mapper;

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Account account = mapper.findAccountByName(username);
            if(username==null){
                throw new UsernameNotFoundException("用户名不能为空");
            }
            if(account == null){
                throw new UsernameNotFoundException("用户名或密码错误");
            }

            return User.withUsername(account.getUsername())
                    .password(account.getPassword())
                    .roles("user").build();
        }

}
