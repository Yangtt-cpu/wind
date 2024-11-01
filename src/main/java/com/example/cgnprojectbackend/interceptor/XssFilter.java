package com.example.cgnprojectbackend.interceptor;


import org.springframework.stereotype.Component;

import javax.servlet.*;

import javax.servlet.http.HttpServletRequest;

import java.io.IOException;


/**
 *  XSS防跨站脚本攻击过滤器
 *
 */
@Component
public class XssFilter implements Filter {
    FilterConfig filterConfig = null;
    /**
     * Default constructor.
     */
    public XssFilter() {
    }

    @Override
    public void destroy() {
        this.filterConfig = null;
    }

    @Override
    public void init(FilterConfig fConfig) throws ServletException {
        this.filterConfig = fConfig;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        chain.doFilter(new XssHttpServletRequestWrapper((HttpServletRequest) request), response);
    }


}
