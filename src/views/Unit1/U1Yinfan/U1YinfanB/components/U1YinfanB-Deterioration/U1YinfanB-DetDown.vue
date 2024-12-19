<template>
  <div ref="chartContainer" class="chart-container w-full h-[470px]" />
</template>

<script>
import * as echarts from "echarts";
import { markRaw } from "vue";
import axios from "axios";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null, // ECharts 实例
      healthData: [], // 历史健康度数据
      severeHealthData: [], // 严重健康问题数据
      currentTime: Math.floor(Date.now() / 1000) // 当前时间戳
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
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=1YBjkd"
        );
        const severeHealthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=1YBjkdpredict"
        );

        // 当前时间戳
        const currentTime = this.currentTime;

        // 解析历史健康度数据（左半部分）
        this.healthData = healthResponse.data?.data
          .filter(
            item =>
              Math.floor(new Date(item.time).getTime() / 1000) <= currentTime
          )
          .map(item => [
            Math.floor(new Date(item.time).getTime() / 1000),
            parseFloat(item.value)
          ]);
        // 解析严重健康问题数据（右半部分）
        this.severeHealthData = severeHealthResponse.data?.data
          .filter(
            item =>
              Math.floor(new Date(item.time).getTime() / 1000) > currentTime
          )
          .map(item => [
            Math.floor(new Date(item.time).getTime() / 1000),
            parseFloat(item.value)
          ]);
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
        currentTime - 24 * 60 * 60;
      const maxTime =
        Math.max(...this.severeHealthData.map(d => d[0])) ||
        currentTime + 24 * 60 * 60;

      this.chart = markRaw(echarts.init(this.$refs.chartContainer));

      // 下面是开始计算间隔，让他在图表上左右差不多
      const timeDiffBeforeAll = currentTime - minTime;

      const timeDiffAfterAll = maxTime - currentTime;
      const multipleNum = Math.floor(timeDiffAfterAll / timeDiffBeforeAll);

      const dataBefore = this.healthData.map((item, index) => {
        const [time, value] = item;
        const newTime = currentTime - (currentTime - time) * multipleNum;
        return [newTime, value];
      });

      const timestampToDateString = timestamp => {
        const date = new Date(timestamp * 1000); // 将秒级时间戳转换为毫秒级时间戳
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          show: true,
          formatter: params => {
            const { seriesName } = params[0];
            const date = timestampToDateString(params[0].value[0]);
            const value = params[0].value[1];
            return `${date}<br/> ${seriesName}: ${value}`;
          }
        },
        legend: {
          data: ["历史健康度", "严重健康问题"],
          left: "center",
          top: "0%",
          textStyle: { fontSize: 14, color: "#333" }
        },
        xAxis: {
          type: "time",
          axisLabel: {
            formatter: value => {
              const time = value;
              if (time > currentTime) {
                return timestampToDateString(time);
              }
              const beforeTime =
                currentTime - (currentTime - time) / multipleNum;
              return timestampToDateString(beforeTime);
            }
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "历史健康度",
            data: dataBefore,
            type: "line",
            smooth: true,
            xAxisIndex: 0,
            lineStyle: { color: "#00A2FF", width: 3 },
            itemStyle: { color: "#00A2FF" }
          },
          {
            name: "严重健康问题",
            data: this.severeHealthData,
            type: "line",
            smooth: true,
            xAxisIndex: 0,
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
