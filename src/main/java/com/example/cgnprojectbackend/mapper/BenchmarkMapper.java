package com.example.cgnprojectbackend.mapper;


import com.example.cgnprojectbackend.entity.BenchmarkData;
import com.example.cgnprojectbackend.entity.FaultData;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BenchmarkMapper {

    @Select("select S_Mean_fe_z,S_Mean_fe_ly1S1S,S_Mean_fe_1Sr1S1S,S_Mean_fe_g1S,S_Mean_fe_jx1S1S,S_Mean_fe_fd " +
            "from economic where unit_id=#{unit_id}")
    BenchmarkData findBenchmarkDataByUnitID(int unit_id);
}
