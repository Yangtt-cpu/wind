<template>
  <!-- 频谱图容器 -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
  >
    <p
      class="absolute top-1 left-2 text-black"
      style="font-weight: bold; font-size: 14"
    >
      <!-- 实时状态评价 -->
      设备状态评分
    </p>
    <img
      name="Up-left-bg"
      src="/src/assets/PrimaryFan/Assessment/beijing.png"
      alt=""
      class="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div
    ref="echartsContainer"
    class="flex justify-center items-center w-full h-full"
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
        series: [
          {
            type: "gauge",
            progress: {
              show: true,
              width: 15
            },
            axisLine: {
              lineStyle: {
                width: 15
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 10,
              lineStyle: {
                width: 2,
                color: "#999"
              }
            },
            axisLabel: {
              distance: 25,
              color: "#333",
              fontSize: 6
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 5,
              itemStyle: {
                borderWidth: 10
              }
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 50,
              color: "black",
              fontFamily: "华文中宋",
              offsetCenter: [0, "80%"]
            },
            data: [
              {
                value: 89
              }
            ]
          }
        ]
      };

      let myChart = echarts.init(this.$refs.echartsContainer);
      myChart.setOption(option);
    }
  }
};
</script>
