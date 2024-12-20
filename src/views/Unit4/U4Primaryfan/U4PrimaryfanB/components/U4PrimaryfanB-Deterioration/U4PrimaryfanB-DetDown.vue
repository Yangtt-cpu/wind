<!-- <template>
  <div ref="chartContainer" class="chart-container w-full h-[470px]"/>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chartContainer);
    this.chart.setOption({
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "value",
        name: "时间"
      },
      yAxis: {
        type: "value",
        name: "健康状况",
        min: 20,
        max: 100,
        axisLabel: {
          formatter: "{value} %"
        }
      },
      series: [
        {
          name: "健康度",
          type: "line",
          smooth: true,
          data: [
            [0, 97],
            [20, 97],
            [25, 97],
            [40, 95],
            [50, 94],
            [75, 94],
            [125, 93.6],
            [130, 92.9],
            [132, 92.3],
            [136, 90.8],
            [140, 89.2],
            [142, 88.8],
            [146, 87.3],
            [148, 86.5],
            [150, 85]
          ],
          lineStyle: {
            width: 3 // 设置线条宽度
          }
        }
        // {
        //   name: "严重健康问题",
        //   type: "line",
        //   smooth: true,

        //   data: [
        //     [150, 85],
        //     [170, 72],
        //     [176, 68],
        //     [190, 50],
        //     [200, 25]
        //   ],
        //   lineStyle: {
        //     color: "red", // 红色线条表示警告/危险
        //     width: 5
        //   }
        // }
      ]
    });
  }
};
</script>

<style></style> -->
<template>
  <div ref="chartContainer" class="chart-container w-full h-[470px]" />
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null, // ECharts 实例
      healthData: [], // 健康度数据
      severeHealthData: [] // 严重健康问题数据
    };
  },
  mounted() {
    this.fetchChartData(); // 获取数据并初始化图表
  },
  methods: {
    // 获取健康度和严重健康问题数据
    async fetchChartData() {
      try {
        // 获取健康度数据
        const healthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=4YCBjkd"
        );

        // 获取严重健康问题数据
        const severeHealthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=4YCBjkdpredict"
        );

        // 解析健康度数据
        if (healthResponse.data?.data?.length > 0) {
          this.healthData = healthResponse.data.data.map(item => [
            new Date(item.time).getTime(), // 将时间转换为时间戳
            parseFloat(item.value) // 转换为浮点数
          ]);
        }

        // 解析严重健康问题数据
        if (severeHealthResponse.data?.data?.length > 0) {
          const currentTime = Date.now(); // 获取系统当前时间戳

          this.severeHealthData = severeHealthResponse.data.data
            .filter(item => new Date(item.time).getTime() > currentTime) // 筛选出时间晚于当前时间的数据
            .map(item => [
              new Date(item.time).getTime(), // 时间戳
              parseFloat(item.value) // 浮点数
            ]);
        }

        // 初始化图表
        this.initChart();
      } catch (error) {
        console.error("获取数据失败：", error);
      }
    },

    // 初始化 ECharts 图表
    initChart() {
      this.chart = echarts.init(this.$refs.chartContainer);
      this.chart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["历史健康度", "趋势变化"],
          left: "center", // 居中显示
          top: "0%", // 放在底部
          textStyle: {
            fontSize: 14,
            color: "#333"
          }
        },
        xAxis: {
          type: "time", // 时间轴
          name: "时间",
          axisLabel: {
            formatter: value => {
              const date = new Date(value);
              return `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date
                .getDate()
                .toString()
                .padStart(2, "0")} ${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;
            }
          }
        },
        yAxis: {
          type: "value",
          name: "健康状况",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "历史健康度",
            type: "line",
            smooth: true,
            data: this.healthData,
            lineStyle: {
              color: "#00A2FF",
              width: 3
            },
            itemStyle: {
              color: "#00A2FF"
            }
          },
          {
            name: "趋势变化",
            type: "line",
            smooth: true,
            data: this.severeHealthData,
            lineStyle: {
              color: "red", // 红色线条表示警告/危险
              width: 3
            },
            itemStyle: {
              color: "red"
            }
          }
        ]
      });
    }
  }
};
</script>

<style></style>
