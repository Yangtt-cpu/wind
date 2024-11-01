<template>
  <!-- 频谱图容器 -->
  <div
    ref="echartsContainer"
    class="w-full h-full"
    style="position: relative"
  ></div>
</template>

<script>
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
</script>
