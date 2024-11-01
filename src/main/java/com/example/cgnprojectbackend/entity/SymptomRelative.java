package com.example.cgnprojectbackend.entity;

import lombok.Data;

@Data
public class SymptomRelative {
    String description;
    double mean;
    double limit_lowest;
}
