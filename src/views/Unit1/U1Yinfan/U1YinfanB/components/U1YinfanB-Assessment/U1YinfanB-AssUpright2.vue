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
  name: "jiankangdu",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        title: {
          left: "",
          text: "部件健康度",
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
          data: ["风机轴承1#", "风机轴承2#", "叶轮前轴承", "叶轮后轴承"],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false // 不显示X轴的轴线
          },
          axisLabel: {
            fontSize: 6.9, // 调整字体大小
            fontWeight: "bold" // 加粗字体
          }
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 100,
          axisLabel: {
            formatter: "{value}%"
          }
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "20%",
            data: [85, 92, 62, 71], // 假设每个值都在90左右
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgb(89, 228, 228)" }, // 柱图顶部为蓝色
                  { offset: 1, color: "rgb(30, 192, 136)" } // 柱图底部为绿色
                ],
                global: false // 缺省为 false
              }
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
