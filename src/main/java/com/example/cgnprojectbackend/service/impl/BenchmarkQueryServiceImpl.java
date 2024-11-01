package com.example.cgnprojectbackend.service.impl;

import com.example.cgnprojectbackend.entity.BenchmarkData;
import com.example.cgnprojectbackend.entity.FaultData;
import com.example.cgnprojectbackend.mapper.BenchmarkMapper;
import com.example.cgnprojectbackend.mapper.FaultMapper;
import com.example.cgnprojectbackend.service.BenchmarkQueryService;
import com.example.cgnprojectbackend.service.FaultQueryService;
import javax.annotation.Resource;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class BenchmarkQueryServiceImpl implements BenchmarkQueryService {

    @Resource
    BenchmarkMapper mapper;
    @Override
    public BenchmarkData queryBenchmarkData(int unit_id) {
        return mapper.findBenchmarkDataByUnitID(unit_id);
    }
}
