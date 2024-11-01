package com.example.cgnprojectbackend.config;

//import com.example.cgnprojectbackend.interceptor.AuthorizeInterceptor;
import javax.annotation.Resource;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration;

//@Configuration
//public class WebConfiguration implements WebMvcConfigurer {
//
//    @Resource
//    AuthorizeInterceptor authorizeInterceptor;
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(authorizeInterceptor)
//                .addPathPatterns("/**")
//                .excludePathPatterns("/api/auth/**");
//    }
//
//}
