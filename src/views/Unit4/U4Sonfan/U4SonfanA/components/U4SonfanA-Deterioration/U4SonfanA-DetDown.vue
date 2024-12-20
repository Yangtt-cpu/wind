<template>
  <div ref="chartContainer" class="chart-container w-full h-[470px]"/>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null, // ECharts 实例
      healthData: [], // 历史健康度数据
      severeHealthData: [], // 严重健康问题数据
      currentTime: Date.now() // 当前时间戳
    };
  },
  mounted() {
    this.fetchChartData();
    window.addEventListener("resize", this.resizeChart);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeChart);
    if (this.chart) this.chart.dispose();
  },
  methods: {
    // 获取健康度和严重健康问题数据
    async fetchChartData() {
      try {
        const healthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=4SAjkd"
        );
        const severeHealthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=4SAjkdpredict"
        );

        // 当前时间戳
        const currentTime = this.currentTime;

        // 解析历史健康度数据（左半部分）
        this.healthData = healthResponse.data?.data
          .filter(item => new Date(item.time).getTime() <= currentTime)
          .map(item => [new Date(item.time).getTime(), parseFloat(item.value)]);

        // 解析严重健康问题数据（右半部分）
        this.severeHealthData = severeHealthResponse.data?.data
          .filter(item => new Date(item.time).getTime() > currentTime)
          .map(item => [new Date(item.time).getTime(), parseFloat(item.value)]);

        // 初始化图表
        this.$nextTick(() => {
          this.initChart();
        });
      } catch (error) {
        console.error("获取数据失败：", error);
      }
    },

    // 初始化 ECharts 图表
    initChart() {
      if (!this.$refs.chartContainer) return;

      const currentTime = this.currentTime;

      // 确定左右半边的时间范围
      const minTime =
        Math.min(...this.healthData.map(d => d[0])) ||
        currentTime - 24 * 60 * 60 * 1000;
      const maxTime =
        Math.max(...this.severeHealthData.map(d => d[0])) ||
        currentTime + 24 * 60 * 60 * 1000;

      this.chart = echarts.init(this.$refs.chartContainer);

      this.chart.setOption({
        tooltip: { trigger: "axis" },
        legend: {
          data: ["历史健康度", "趋势"],
          left: "center",
          top: "0%",
          textStyle: { fontSize: 14, color: "#333" }
        },
        xAxis: {
          type: "time",
          splitNumber: 10,
          min: minTime,
          max: maxTime,
          axisLabel: {
            formatter: value => {
              const date = new Date(value);
              return `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date
                .getDate()
                .toString()
                .padStart(2, "0")}`;
            }
          },
          markLine: {
            silent: true,
            symbol: "none",
            label: { show: true, position: "start", formatter: "当前时间" },
            lineStyle: { color: "#FF5733", type: "dashed" },
            data: [{ xAxis: currentTime }]
          }
        },
        yAxis: {
          type: "value",
          name: "健康状况",
          axisLabel: { formatter: "{value}" }
        },
        series: [
          {
            name: "历史健康度",
            type: "line",
            smooth: true,
            data:
              this.healthData.length > 0 ? this.healthData : [[Date.now(), 0]],
            lineStyle: { color: "#00A2FF", width: 3 },
            itemStyle: { color: "#00A2FF" }
          },
          {
            name: "趋势",
            type: "line",
            smooth: true,
            data:
              this.severeHealthData.length > 0
                ? this.severeHealthData
                : [[Date.now(), 0]],
            lineStyle: { color: "red", width: 3 },
            itemStyle: { color: "red" }
          }
        ]
      });
    },

    // 调整图表大小
    resizeChart() {
      if (this.chart) this.chart.resize();
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 470px;
}
</style>
