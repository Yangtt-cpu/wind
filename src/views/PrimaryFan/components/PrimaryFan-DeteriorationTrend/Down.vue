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
            [125, 90],
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
            [170, 75],
            [190, 50],
            [200, 20]
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
