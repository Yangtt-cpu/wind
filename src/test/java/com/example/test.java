package com.example;

import com.alibaba.fastjson.JSONObject;
import com.example.cgnprojectbackend.entity.RestBean;
import com.example.cgnprojectbackend.service.IotDbServer;
import org.apache.iotdb.rpc.IoTDBConnectionException;
import org.apache.iotdb.rpc.StatementExecutionException;

import java.util.ArrayList;
import java.util.List;

public class test {

    private static IotDbServer iotDbServer;

    public static void main(String[] args) throws IoTDBConnectionException, StatementExecutionException {



        List<String> measurements = new ArrayList<>();
        measurements.add("1sdc7a_predict");
        measurements.add("1sdc7b_predict");
        System.out.println(iotDbServer.queryPredictData(measurements));
        System.out.println(RestBean.success(iotDbServer.queryPredictData(measurements)));
        System.out.println(JSONObject.toJSONString(RestBean.success(iotDbServer.queryPredictData(measurements))));
    }
}
