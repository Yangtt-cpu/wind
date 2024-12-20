<template>
  <div
    ref="echartsContainer"
    class="w-full h-full"
    style="position: relative"
  />
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "SpectrumChart",
  data() {
    return {
      measurements: [], // 横坐标数据
      values: [], // 纵坐标数据
      chart: null // 用于存储ECharts实例
    };
  },
  mounted() {
    this.initChart();
    this.fetchData(); // 获取数据
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.echartsContainer);
      this.updateChart(); // 初始化图表
    },
    fetchData() {
      fetch("http://localhost:8081/api/device/queryU4YFBxblpamp")
        .then(response => {
          if (!response.ok) {
            throw new Error("回应不ok~");
          }
          return response.json();
        })
        .then(apiResponse => {
          if (apiResponse.state && apiResponse.data) {
            this.measurements = apiResponse.data.map(item => item.measurement);
            this.values = apiResponse.data.map(item => parseFloat(item.value));
            this.updateChart(); // 更新图表
          } else {
            console.error("API返回的数据中不包含data数组或状态不成功!!!");
          }
        })
        .catch(error => {
          console.error("错啦：", error);
        });
    },
    updateChart() {
      if (this.chart) {
        this.chart.setOption({
          tooltip: {
            trigger: "axis",
            position: function (pt) {
              return [pt[0], "10%"];
            }
          },
          title: {
            left: "",
            text: "包络谱  mm/s",
            padding: [10, 10, 10, 10],
            textStyle: {
              fontSize: 15
            }
          },
          // toolbox: {
          //   feature: {
          //     dataZoom: {
          //       yAxisIndex: "none"
          //     },
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          grid: {
            left: "5%",
            right: "5%",
            bottom: "5%",
            top: "25%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.measurements
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "Signal Strength",
              type: "line",
              smooth: true,
              data: this.values,
              lineStyle: {
                width: 1,
                color: "rgb(255, 233, 36)"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgb(255, 233, 36)" },
                  { offset: 1, color: "rgb(255, 127, 0)" }
                ])
              }
            }
          ]
        });
      }
    }
  }
};
</script>

<style>
/* 可以在这里添加一些样式 */
</style>
