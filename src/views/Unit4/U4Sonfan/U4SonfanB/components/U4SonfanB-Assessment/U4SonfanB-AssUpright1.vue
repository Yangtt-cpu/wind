<template>
  <!-- 频谱图容器 -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
  >
    <p
      class="absolute top-1 left-2 text-black"
      style="font-weight: bold; font-size: 14px"
    >
      <!-- 实时状态评价 -->
      健康度评分
    </p>
    <img
      name="U4SonfanBAss-Upleftright-bg"
      src="/src/assets/PrimaryFan/Assessment/beijing.png"
      alt=""
      class="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div
    ref="echartsContainer"
    class="flex justify-center items-center w-full h-full"
    style="position: relative"
  />
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "jiankangdu",
  data() {
    return {
      value: 0, // 初始数值
      apiUrl:
        "http://localhost:8081/api/device/queryJiankangdu?measurements=4SBjkd"
    };
  },
  mounted() {
    this.fetchData(); // 组件挂载时获取数据
    this.initChart();
  },
  methods: {
    // 从后端获取数据
    fetchData() {
      axios
        .post(this.apiUrl)
        .then(response => {
          const apiResponse = response.data;
          if (apiResponse.state && apiResponse.data.length > 0) {
            // 获取后端返回的第一个数值，并保留两位小数
            this.value = parseFloat(apiResponse.data[0].value).toFixed(2);
            this.updateChart(); // 更新图表
          } else {
            console.error("API返回数据为空或状态错误");
          }
        })
        .catch(error => {
          console.error("获取后端数据失败:", error);
        });
    },

    // 初始化图表
    initChart() {
      this.myChart = echarts.init(this.$refs.echartsContainer);
      this.updateChart();
    },

    // 更新图表
    updateChart() {
      const option = {
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
                value: this.value // 动态赋值，保留两位小数
              }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
