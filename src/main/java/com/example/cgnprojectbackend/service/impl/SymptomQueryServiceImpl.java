package com.example.cgnprojectbackend.service.impl;

import com.example.cgnprojectbackend.entity.SymptomRelative;
import com.example.cgnprojectbackend.mapper.FaultMapper;
import com.example.cgnprojectbackend.service.SymptomQueryService;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


@Log4j2
@Service
public class SymptomQueryServiceImpl implements SymptomQueryService {

    @Resource
    FaultMapper mapper;
    @Override
    public List<SymptomRelative> querySymptomRelative(String device) {
        return  mapper.findSymptomRelativeByDeviceId(device);
    }
}
