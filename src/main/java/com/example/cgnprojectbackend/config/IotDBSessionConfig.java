package com.example.cgnprojectbackend.config;

import lombok.extern.log4j.Log4j2;
import org.apache.iotdb.rpc.IoTDBConnectionException;
import org.apache.iotdb.rpc.StatementExecutionException;
import org.apache.iotdb.session.Session;
import org.apache.iotdb.session.SessionDataSet;
import org.apache.iotdb.tsfile.file.metadata.enums.TSDataType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;


import java.rmi.ServerException;
import java.util.ArrayList;
import java.util.List;

@Log4j2
@Configuration
@Component
public class IotDBSessionConfig {

//    @Value("${Spring.iotdb.ip}")
//    private static final String LOCAL_HOST = "10.78.34.61";
//    private static final String LOCAL_HOST = "127.0.0.1";


//    private static final String LOCAL_HOST = "192.168.1.104";
    private static final String LOCAL_HOST = "10.18.18.200";

//    private static final String LOCAL_HOST = "10.78.34.61";
//    @Value("${Spring.iotdb.port}")
//    private int port;
    private static Session session;

    @Bean
    public Session getSession() throws IoTDBConnectionException {
        if (session == null) {
            log.info("正在连接iotdb....");
            session = new Session.Builder()
                    .host(LOCAL_HOST)
                    .port(6667)
                    .username("root")
                    .password("root")
//                    .username("snp_ciia")
//                    .password("ciia#2203*0117")
                    .build();
            session.open(false);
            session.setFetchSize(1000);
            log.info("iotdb连接成功~");
        }
        return session;
    }

    //带有数据类型的添加操作
    public void insertRecordType(String deviceId, Long time, List<String> measurementsList, TSDataType type, List<Object> valuesList)
            throws ServerException, IoTDBConnectionException, StatementExecutionException {
        if (measurementsList.size() != valuesList.size()) {
            throw new ServerException("measurementsList与valuesList值不对应");
        }
        List<TSDataType> types = new ArrayList<>();
        measurementsList.forEach(item -> {
            types.add(type);
        });
        session.insertRecord(deviceId, time, measurementsList, types, valuesList);
    }

    //不带有数据类型的添加操作
    public void insertRecord(String deviceId, Long time, List<String> measurementsList, List<String> valuesList)
            throws IoTDBConnectionException, StatementExecutionException {
        if (measurementsList.size() == valuesList.size()) {
            session.insertRecord(deviceId, time, measurementsList, valuesList);
        } else {
            log.error("measurementsList与valuesList值不对应");
        }
    }


    //根据SQL查询
    public SessionDataSet query(String sql) throws IoTDBConnectionException, StatementExecutionException {
        return session
                .executeQueryStatement(sql);
    }
}
