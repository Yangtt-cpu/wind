package com.example.cgnprojectbackend.mapper;


import com.example.cgnprojectbackend.entity.FaultCount;
import com.example.cgnprojectbackend.entity.FaultData;
import com.example.cgnprojectbackend.entity.FaultRecord;
import com.example.cgnprojectbackend.entity.SymptomRelative;
import com.example.cgnprojectbackend.entity.user.FaultTime;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface FaultMapper {

    @Select("select fault.fault_name,fault.degree,know.fault_reason,know.operation_guide " +
            "from diagnosis_list fault,knowledge_base know where fault.device=#{device} " +
            "and know.fault_id = fault.fault_id")
    FaultData findFaultDataByDeviceID(String device);


    @Select("select fault.change_time from device_status_changes fault where fault.device_name=#{device} limit 1")
    FaultTime findFaultTimeByDeviceID(String device);

    @Select("select fault.change_count from device_change_count_origin fault where fault.device=#{device} limit 1")
    FaultCount findFaultCountByDeviceID(String device);

    @Select("select device,fault_name,last_datetime from device_change_count")
    List<FaultRecord> findFaultRecord();

    @Select("SELECT DISTINCT symptom.description,limit_list.limit_lowest,limit_list.mean " +
            "FROM diagnosis_list fault JOIN symptom_list symptom ON fault.fault_id = symptom.related_fault_id " +
            "JOIN limit_list ON " +
            "symptom.kks = limit_list.kks " +
            "WHERE fault.device=#{device} ")
    List<SymptomRelative> findSymptomRelativeByDeviceId(String device);
}
