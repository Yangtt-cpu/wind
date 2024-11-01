package com.example.cgnprojectbackend.controller;


import com.example.cgnprojectbackend.entity.*;
import com.example.cgnprojectbackend.entity.user.FaultTime;
import com.example.cgnprojectbackend.service.FaultQueryService;
import javax.annotation.Resource;

import com.example.cgnprojectbackend.service.SymptomQueryService;
import lombok.extern.log4j.Log4j2;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "/api/device",method = {RequestMethod.GET,RequestMethod.POST})
@Validated
public class FaultQueryController {
    @Resource
    private FaultQueryService faultQueryService;

    @Resource
    private SymptomQueryService symptomQueryService;

    @PostMapping("/queryFault")
    public RestBean<FaultData> queryFaultData(@RequestParam("device") String device){
        return RestBean.success(faultQueryService.queryFaultData(device));
    }

    @PostMapping("/queryFaultTime")
    public RestBean<FaultTime> queryFaultTime(@RequestParam("device") String device) {
        return RestBean.success(faultQueryService.queryFaultTime(device));
    }

    @PostMapping("/queryFaultCount")
    public RestBean<FaultCount> queryFaultCount(@RequestParam("device") String device) {
        return RestBean.success(faultQueryService.queryFaultCount(device));
    }

    @PostMapping("/querySymptomRelative")
    public  RestBean<List<SymptomRelative>> querySymptomRelative(@RequestParam("device") String device){
        return RestBean.success(symptomQueryService.querySymptomRelative(device));
    }

    @PostMapping("/queryFaultRecord")
    public RestBean<List<FaultRecord>> queryFaultRecord(){
        return RestBean.success(faultQueryService.queryFaultRecord());
    }

}
