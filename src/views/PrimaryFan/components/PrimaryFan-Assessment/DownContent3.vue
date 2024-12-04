<template>
  <div
    ref="echartsContainer"
    class="w-full h-full"
    style="position: relative"
  ></div>
</template>

<!-- <script>
import * as echarts from "echarts";

export default {
  name: "SpectrumChart",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 先初始化 frequencies 和 data
      let frequencies = []; // 频率
      let data = []; // 幅度
      let totalPoints = 200; // 数据点总数
      let maxFrequency = 1000; // 最高频率
      let peakFrequencies = [100, 300, 301, 302, 500, 750]; // 特定的峰值频率

      for (let i = 0; i < totalPoints; i++) {
        let frequency = (maxFrequency / totalPoints) * i;
        frequencies.push(frequency.toFixed(2) + "Hz");

        if (peakFrequencies.includes(Math.round(frequency))) {
          data.push(250 + Math.random() * 50); // 特定频率处的幅度较高
        } else {
          data.push(Math.random() * 10); // 其余频率处模拟噪声
        }
      }

      // 使用 frequencies 和 data 配置 ECharts
      let option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          }
        },
        title: {
          left: "",
          text: "频谱图：FFT / 包络谱",
          padding: [10, 10, 10, 10],
          textStyle: {
            fontSize: 15 // 调整字体大小
            // fontWeight: 'bold' // 加粗字体
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
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
          data: frequencies
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
            data: data,
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
      };

      let myChart = echarts.init(this.$refs.echartsContainer);
      myChart.setOption(option);
    }
  }
};
</script> -->


<!-- <script>
import * as echarts from "echarts";

export default {
  name: "SpectrumChart",
  data() {
    return {
      chart: null, // 用于存储ECharts实例
      measurements: [], // 横坐标数据
      values: [], // 纵坐标数据
    };
  },
  mounted() {
    this.initChart();
    this.fetchData(); // 获取数据
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose(); // 销毁图表实例
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.echartsContainer);
    },
    fetchData() {
      fetch('http://localhost:8080/api/device/queryblpamp') // 替换为您的实际API端点
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(apiResponse => {
          if (Array.isArray(apiResponse.data)) {
           this.measurements = apiResponse.data.map(item => item.measurement);// 假设返回的数据中包含measurement字段
           this.values = apiResponse.data.map(item => parseFloat(item.value)); // 假设返回的数据中包含value字段
           this.updateChart(); // 更新图表
        } else {
          console.error('API返回的数据中不包含data数组');
        }
         })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    updateChart() {
      if (this.chart) {
        this.chart.setOption({
          xAxis: {
            type: 'category',
            data: this.measurements,
          },
          series: [
            {
              name: "Signal Strength",
              type: "line",
              smooth: true,
              data: this.values,
              linestyle: {
                width: 1,
                color: "rgb(255,233,36)"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1[
                  { offset: 0, color: "rgb(255,233,36)" },
                  { offset: 1, color: "rgb(255,127,0)" }
                ])
              }
            }]
        });
      }
    }
  }
};
</script> -->

<!-- <template>
  <div ref="echartsContainer" style="width: 100%; height: 400px;"></div>
</template> -->

<script>
import * as echarts from "echarts";

export default {
  name: "SpectrumChart",
  data() {
    return {
      measurements: [], // 横坐标数据
      values: [], // 纵坐标数据
      chart: null, // 用于存储ECharts实例
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
      fetch('http://localhost:8081/api/device/queryblpamp')
        .then(response => {
          if (!response.ok) {
            throw new Error('回应不ok~');
          }
          return response.json();
        })
        .then(apiResponse => {
          if (apiResponse.state && apiResponse.data) {
            this.measurements = apiResponse.data.map(item => item.measurement);
            this.values = apiResponse.data.map(item => parseFloat(item.value));
            this.updateChart(); // 更新图表
          } else {
            console.error('API返回的数据中不包含data数组或状态不成功!!!');
          }
        })
        .catch(error => {
          console.error('错啦：', error);
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
            text: "频谱图：包络谱",
            padding: [10, 10, 10, 10],
            textStyle: {
              fontSize: 15
            }
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              restore: {},
              saveAsImage: {}
            }
          },
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