<template>
  <div class="chart-container w-full h-[470px]" ref="chartContainer"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "HealthChart",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chartContainer);
    this.chart.setOption({
      // title: {
      //   text: 'PF设备健康度曲线'
      // },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "value",
        name: "时间"
      },
      yAxis: {
        type: "value",
        name: "健康状况",
        min: 20,
        max: 100,
        axisLabel: {
          formatter: "{value} %"
        }
      },
      series: [
        {
          name: "健康度",
          type: "line",
          smooth: true,
          data: [
            [0, 97],
            [20, 97],
            [25, 97],
            [40, 95],
            [50, 94],
            [75, 94],
            [125, 93.6],
            [130, 92.9],
            [132, 92.3],
            [136, 90.8],
            [140, 89.2],
            [142, 88.8],
            [146, 87.3],
            [148, 86.5],
            [150, 85]
          ],
          lineStyle: {
            width: 3 // 设置线条宽度
          }
        },
        {
          name: "严重健康问题",
          type: "line",
          smooth: true,

          data: [
            [150, 85],
            [170, 72],
            [176, 68],
            [190, 50],
            [200, 25]
          ],
          lineStyle: {
            color: "red", // 红色线条表示警告/危险
            width: 5
          }
        }
      ]
    });
  }
  // beforeDestroy() {
  //   if (this.chart) {
  //     this.chart.dispose();
  //   }
  // }
};
</script>

<style></style>
