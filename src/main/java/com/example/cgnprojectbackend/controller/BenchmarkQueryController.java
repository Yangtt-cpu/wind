package com.example.cgnprojectbackend.controller;


import com.example.cgnprojectbackend.entity.BenchmarkData;
import com.example.cgnprojectbackend.entity.FaultData;
import com.example.cgnprojectbackend.entity.RestBean;
import com.example.cgnprojectbackend.service.BenchmarkQueryService;
import com.example.cgnprojectbackend.service.FaultQueryService;
import javax.annotation.Resource;
import lombok.extern.log4j.Log4j2;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping(value = "/api/device",method = {RequestMethod.GET,RequestMethod.POST})
@Validated
public class BenchmarkQueryController {
    @Resource
    private BenchmarkQueryService benchmarkQueryService;

    @PostMapping("/queryBenchmark")
    public RestBean<BenchmarkData> queryFaultData(@RequestParam("unitId") int unitId){
        return RestBean.success(benchmarkQueryService.queryBenchmarkData(unitId));
    }
}
