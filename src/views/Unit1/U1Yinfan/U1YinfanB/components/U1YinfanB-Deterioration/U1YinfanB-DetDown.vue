<template>
  <div class="chart-container w-full h-[470px]" ref="chartContainer"></div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null, // ECharts 实例
      leftHealthData: [], // 左半部分健康度数据
      rightHealthData: [] // 右半部分严重健康问题数据
    };
  },
  mounted() {
    this.fetchData(); // 获取数据并渲染图表
  },
  methods: {
    // 获取健康度和严重健康问题的数据
    async fetchData() {
      try {
        // 获取健康度数据（左侧部分，前50个数据）
        const healthResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=1YBjkd"
        );

        // 获取严重健康问题数据（右侧部分，后50个数据）
        const severeResponse = await axios.post(
          "http://localhost:8081/api/device/queryJiankangdu2?measurements=1YBjkdpredict"
        );

        // 处理左侧健康度数据，取前50个，仅提取 value
        this.leftHealthData = healthResponse.data.data
          .slice(-50)
          .map(item => parseFloat(item.value));

        // 打印左侧健康度数据
        console.log("Left Health Data (Values):", this.leftHealthData);

        // 处理右侧严重健康问题数据，取后50个，仅提取 value
        this.rightHealthData = severeResponse.data.data
          .slice(-50)
          .map(item => parseFloat(item.value));

        // 打印右侧严重健康问题数据
        console.log("Right Health Data (Values):", this.rightHealthData);

        // 渲染图表
        this.renderChart();
      } catch (error) {
        console.error("数据获取失败：", error);
      }
    },

    // 渲染 ECharts 图表
    renderChart() {
      if (!this.$refs.chartContainer) return;

      this.chart = echarts.init(this.$refs.chartContainer);

      // 设置 ECharts 配置
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          formatter: params => {
            return params
              .map(item => `${item.seriesName}: ${item.value.toFixed(2)}`)
              .join("<br/>");
          }
        },
        legend: {
          data: ["历史健康度", "趋势变化"], // 图例名称与 series 的 name 对应
          top: "5%", // 图例的位置（上方）
          left: "center" // 图例居中
        },
        xAxis: {
          type: "category", // 使用分类坐标轴
          name: "数据点",
          boundaryGap: false, // 设置坐标轴起始不留空白
          data: [
            ...Array(
              this.leftHealthData.length + this.rightHealthData.length
            ).keys()
          ], // 按总数据点数量生成 x 轴
          axisLabel: {
            show: false, // 显示横轴标签
            formatter: value => `点${value + 1}` // 标签格式为 点1、点2...
          }
        },
        yAxis: {
          type: "value",
          name: "健康状况",
          min: 0,
          max: 100,
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "历史健康度",
            type: "line",
            smooth: true,
            data: [
              ...this.leftHealthData,
              ...Array(this.rightHealthData.length).fill(null)
            ], // 填补右半部分数据为空值
            lineStyle: {
              color: "blue", // 左侧线条为蓝色
              width: 3 // 设置线条宽度
            },
            itemStyle: {
              color: "blue" // 数据点颜色为蓝色
            },
            showSymbol: true // 显示数据点
          },
          {
            name: "趋势变化",
            type: "line",
            smooth: true,
            data: [
              ...Array(this.leftHealthData.length).fill(null),
              ...this.rightHealthData
            ], // 填补左半部分数据为空值
            lineStyle: {
              color: "red", // 右侧线条为红色
              width: 3
            },
            itemStyle: {
              color: "red" // 数据点颜色为红色
            },
            showSymbol: true // 显示数据点
          }
        ]
      });
    }
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
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
