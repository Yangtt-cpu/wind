<template>
  <div
    class="font-bold mt-2"
    style="font-family: &quot;华文中宋&quot;, sans-serif; font-size: 20px"
  >
    部件健康度权重占比
  </div>
  <div ref="echartsContainer" class="echarts-container w-full h-[205px]"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "EchartsPieChart",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },

            data: [
              { value: 40, name: "风机轴承1#\n：30%%" },
              { value: 38, name: "风机轴承2#\n：30%" },
              { value: 32, name: "驱动端轴\n承：20%" },
              { value: 30, name: "非驱动端\n轴承：20%" }
            ]
          }
        ]
      };

      const chartDom = this.$refs.echartsContainer;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
    }
  }
};
</script>

<style></style>
