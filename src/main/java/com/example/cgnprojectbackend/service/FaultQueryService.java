package com.example.cgnprojectbackend.service;

import com.example.cgnprojectbackend.entity.*;
import com.example.cgnprojectbackend.entity.user.FaultTime;

import java.util.List;

public interface FaultQueryService {
    public FaultData queryFaultData(String device);
    public FaultTime queryFaultTime(String device);

    public FaultCount queryFaultCount(String device);

    public List<FaultRecord> queryFaultRecord();
}
