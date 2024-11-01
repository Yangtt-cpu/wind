package com.example.cgnprojectbackend.config;


import com.example.cgnprojectbackend.interceptor.XssFilter;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;


import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;



@Configuration
@EnableWebSecurity

public class SecurityConfiguration {
    //前后端分离
//    @Resource


//    @Resource
//    DataSource dataSource;



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
//                .authorizeHttpRequests()
//                .requestMatchers().permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                .successHandler(this::onAuthenticationSuccess)
//                .failureHandler(this::onAuthenticationFailure)
//                .and()
//                .logout()
//                .logoutUrl("/api/auth/logout")
//                .logoutSuccessHandler(this::onAuthenticationSuccess)
//                .and()
//                .rememberMe()
//                .rememberMeParameter("remember")
//                .tokenRepository(repository)
//                .tokenValiditySeconds(3600*24*3)
//                .and()
                .csrf()
                .disable()
                .cors()
                .configurationSource(this.corsConfigurationSource())
                .and()
                .exceptionHandling()
//                .authenticationEntryPoint(this::onAuthenticationFailure)
                .and()
                .addFilterBefore(new XssFilter(),CsrfFilter.class)
                .build();
    }

    private CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration cors = new CorsConfiguration();
        cors.addAllowedOriginPattern("*");
        cors.setAllowCredentials(true);
//        cors.addAllowedHeader(Arrays.asList("Access-Control-Allow-Origin","Content-Type","Cache-Control").toString());
        cors.addAllowedHeader("*");
//        cors.addAllowedMethod("POST");
        cors.addAllowedMethod("*");
        cors.addExposedHeader("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",cors);
        return  source;
    }



}


