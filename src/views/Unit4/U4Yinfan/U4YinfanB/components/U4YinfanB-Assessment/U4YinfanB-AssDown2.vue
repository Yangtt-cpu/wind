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
      measurements: [],
      values: [],
      chart: null
    };
  },
  mounted() {
    this.initChart();
    this.fetchData();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.echartsContainer);
      this.updateChart();
    },
    fetchData() {
      fetch("http://localhost:8081/api/device/queryU4YFBxfftamp")
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
            text: "频谱分析  mm/s",
            padding: [10, 10, 10, 10],
            textStyle: {
              fontSize: 15 // 调整字体大小
              // fontWeight: 'bold' // 加粗字体
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
            // boundaryGap: [0, '100%']
          },
          series: [
            {
              name: "Signal Strength",
              type: "line",
              smooth: true,
              data: this.values,
              lineStyle: {
                width: 1,
                color: "rgb(135, 206, 235)"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgb(135, 206, 235)" },
                  { offset: 1, color: "rgb(0, 68, 204)" }
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
