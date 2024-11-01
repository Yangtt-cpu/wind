package com.example.cgnprojectbackend.entity;

import lombok.Data;

@Data
public class RestBean<T> {

    private boolean state;
    private String msg;
    private int ercode;
    private T data;

    private RestBean(boolean state, String msg, int ercode, T data) {
        this.state = state;
        this.msg = msg;
        this.ercode = ercode;
        this.data = data;
    }

    public static <T> RestBean<T> success(){
        return new RestBean<>(true,"success",200,null);
    }
    public static <T> RestBean<T> success(T data){
        return new RestBean<>(true,"success",200,data);
    }

    public static <T> RestBean<T> failure(){
        return new RestBean<>(false,"failure",500,null);
    }

    public static <T> RestBean<T> failure(int ercode){
        return new RestBean<>(false,"failure",ercode,null);
    }

    public static <T> RestBean<T> failure(int ercode,T data){
        return new RestBean<>(false,"failure",ercode,data);
    }




}
