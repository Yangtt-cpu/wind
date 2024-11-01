package com.example.cgnprojectbackend.service.impl;

import com.example.cgnprojectbackend.entity.FaultCount;
import com.example.cgnprojectbackend.entity.FaultData;
import com.example.cgnprojectbackend.entity.FaultRecord;
import com.example.cgnprojectbackend.entity.user.FaultTime;
import com.example.cgnprojectbackend.mapper.FaultMapper;
import com.example.cgnprojectbackend.mapper.UserMapper;
import com.example.cgnprojectbackend.service.FaultQueryService;
import javax.annotation.Resource;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class FaultQueryServiceImpl implements FaultQueryService {

    @Resource
    FaultMapper mapper;
    @Override
    public FaultData queryFaultData(String device) {
        return mapper.findFaultDataByDeviceID(device);
    }

    @Override
    public FaultTime queryFaultTime(String device) {
        return mapper.findFaultTimeByDeviceID(device);
    }

    @Override
    public FaultCount queryFaultCount(String device) {
        return mapper.findFaultCountByDeviceID(device);
    }

    @Override
    public List<FaultRecord> queryFaultRecord(){return mapper.findFaultRecord();};


}
