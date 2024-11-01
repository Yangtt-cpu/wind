package com.example.cgnprojectbackend.mapper;

import com.example.cgnprojectbackend.entity.FaultData;
import com.example.cgnprojectbackend.entity.auth.Account;
import com.example.cgnprojectbackend.entity.user.AccountUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface UserMapper {

    @Select("select * from db_account where username=#{text}")
    Account findAccountByName(String text);

    @Select("select * from db_account where username=#{text}")
    AccountUser findAccountUserByName(String text);

}
