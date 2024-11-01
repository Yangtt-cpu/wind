package com.example.cgnprojectbackend.service;

import com.example.cgnprojectbackend.entity.BenchmarkData;
import com.example.cgnprojectbackend.entity.FaultData;

public interface BenchmarkQueryService {
    public BenchmarkData queryBenchmarkData(int unit_id);
}
