package com.example.cgnprojectbackend.interceptor;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.*;
import java.util.regex.Pattern;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;


import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.struts2.dispatcher.StrutsRequestWrapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.CollectionUtils;


public class XssHttpServletRequestWrapper extends StrutsRequestWrapper {

    HttpServletRequest orgRequest = null;
    private final static HTMLFilter htmlFilter = new HTMLFilter();

    public XssHttpServletRequestWrapper(HttpServletRequest servletRequest) {
        super(servletRequest);
        orgRequest = servletRequest;
    }

    /**
     * 重写getParameterValues方法
     * 通过循环取出每一个请求结果
     * 再对请求结果进行过滤
     * */
    @Override
    public String[] getParameterValues(String parameter) {
        String[] values = super.getParameterValues(parameter);
        if (values == null) {
            return null;
        }
        int count = values.length;
        String[] encodedValues = new String[count];
        for (int i = 0; i < count; i++) {
            encodedValues[i] = cleanXSS(values[i]);
        }
        return encodedValues;
    }

    /**
     * 重写getParameter方法
     * 对请求结果进行过滤
     * */
    @Override
    public String getParameter(String parameter) {
        String value = super.getParameter(parameter);
        if (value == null) {
            return null;
        }
        return cleanXSS(value);
    }

    @Override
    public String getHeader(String name) {
        String value = super.getHeader(name);
        if (value == null)
            return null;
        return cleanXSS(value);
    }
    /**
     * 获取最原始的request
     *
     * @return
     */
//    public HttpServletRequest getOrgRequest() {
//        return orgRequest;
//    }

    /**
     * 获取最原始的request的静态方法
     *
     * @return
     */
//    public static HttpServletRequest getOrgRequest(HttpServletRequest req) {
//        if (req instanceof XssHttpServletRequestWrapper) {
//            return ((XssHttpServletRequestWrapper) req).getOrgRequest();
//        }
//        return req;
//    }

    @Override
    public Enumeration<String> getParameterNames() {
        Enumeration<String> names = super.getParameterNames();
        while(names.hasMoreElements()){
            String name = names.nextElement();
            name = cleanXSS(name);
        }
        return names;
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        String contentType = super.getHeader(HttpHeaders.CONTENT_TYPE);
        //非json类型，直接返回
        if(!(MediaType.APPLICATION_JSON_VALUE.
                equalsIgnoreCase(contentType) ||
                MediaType.APPLICATION_JSON_UTF8_VALUE.
                        equalsIgnoreCase(contentType))){
            return super.getInputStream();
        }

        //为空，直接返回
        String json = IOUtils.toString(super.getInputStream(), "utf-8");
        if (StringUtils.isBlank(json)) {
            return super.getInputStream();
        }

        //xss过滤
        json =xssEncode(json);
        json = StringEscapeUtils.unescapeHtml4(json);

        final ByteArrayInputStream bis =
                new ByteArrayInputStream(json.getBytes("utf-8"));

        return new ServletInputStream() {
            @Override
            public boolean isFinished() {
                return true;
            }

            @Override
            public boolean isReady() {
                return true;
            }

            @Override
            public void setReadListener(ReadListener readListener) {
            }

            @Override
            public int read() throws IOException {
                return bis.read();
            }
        };
    }

    private String xssEncode(String input) {
        return htmlFilter.filter(input);
    }


    @Override
    public Map getParameterMap() {

        Map paramMap = super.getParameterMap();
        if (CollectionUtils.isEmpty(paramMap)) {
            return paramMap;
        }

        for (Object value : paramMap.values()) {
            String[] str = (String[])value;
            if (str != null) {
                for (int i = 0; i < str.length; i++) {

                    str[i] = cleanXSS(str[i]);
                }
            }
        }
        return paramMap;
    }

    private String cleanXSS(String value) {
        if (value != null) {
            value = value.replaceAll("\0", "");
            // Avoid anything between script tags
            Pattern scriptPattern = Pattern.compile("<script>(.*?)</script>",
                    Pattern.CASE_INSENSITIVE);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid anything in a src='...' type of expression
            scriptPattern = Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");
            // Avoid anything in a href='...' type of expression
            scriptPattern = Pattern.compile("href[\r\n]*=[\r\n]*\\\"(.*?)\\\"",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");

            // Remove any lonesome </script> tag
            scriptPattern = Pattern.compile("</script>",
                    Pattern.CASE_INSENSITIVE);
            value = scriptPattern.matcher(value).replaceAll("");

            // Remove any lonesome <script ...> tag
            scriptPattern = Pattern.compile("<script(.*?)>",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid eval(...) expressions
            scriptPattern = Pattern.compile("eval\\((.*?)\\)",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid expression(...) expressions
            scriptPattern = Pattern.compile("expression\\((.*?)\\)",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid javascript:... expressions
            scriptPattern = Pattern.compile("javascript:",
                    Pattern.CASE_INSENSITIVE);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid vbscript:... expressions
            scriptPattern = Pattern.compile("vbscript:",
                    Pattern.CASE_INSENSITIVE);
            value = scriptPattern.matcher(value).replaceAll("");

            // Avoid onload= expressions
            scriptPattern = Pattern.compile("onload(.*?)=",
                    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE
                            | Pattern.DOTALL);
            value = scriptPattern.matcher(value).replaceAll("");
        }

        System.out.println(value);
        return value;
    }
}

//        value = value.replaceAll("<", "& lt;").replaceAll(">", "& gt;");
//        //先暂时去除 英文括号的拦截
//        value = value.replaceAll("\\(", "& #40;").replaceAll("\\)", "& #41;");
//        value = value.replaceAll("'", "& #39;");
//        value = value.replaceAll("eval\\((.*)\\)", "");
//        value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']","\"\"");
//        value = value.replaceAll("script", "");
//        value = value.replaceAll("alert", "");

