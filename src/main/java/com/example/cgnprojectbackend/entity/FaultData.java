package com.example.cgnprojectbackend.entity;

import lombok.Data;

@Data
public class FaultData {
    private String fault_name;
    private double degree;
    private String fault_reason;
    private String operation_guide;

}
