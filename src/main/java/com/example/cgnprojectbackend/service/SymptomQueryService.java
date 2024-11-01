package com.example.cgnprojectbackend.service;

import com.example.cgnprojectbackend.entity.SymptomRelative;

import java.util.List;

public interface SymptomQueryService {
    public List<SymptomRelative> querySymptomRelative(String device);
}
