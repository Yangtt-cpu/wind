package com.example.cgnprojectbackend.entity;

import lombok.Data;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;

@Data
public class FaultRecord {
    String device;
    String fault_name;
    String last_datetime;
}
