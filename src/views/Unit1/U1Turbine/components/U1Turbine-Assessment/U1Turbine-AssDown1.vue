<template>
  <div ref="chartContainer" class="w-full h-full" />
</template>

<script>
import * as echarts from "echarts";
import { getqueryPredictPass2 } from "@/api/routes";

export default {
  name: "DynamicDataChart",
  data() {
    return {
      chartInstance: null,
      now: new Date(1900, 4, 10),
      oneDay: 24 * 3600 * 1000,
      value: Math.random() * 1,
      data: [[], [], []], // 为三条曲线准备三组数据集
      // 添加额外状态以跟踪每条曲线的当前值
      valueSeries1: (Math.random() * 1000) / 10000,
      valueSeries2: (Math.random() * 1000 + 500) / 10000, // 确保与系列1的起始值有所不同
      valueSeries3: (Math.random() * 1000 + 2000) / 10000 // 再次确保与前两个系列的起始值不同
    };
  },
  mounted() {
    this.initChart();
  },
  beforeUnmount() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  },

  methods: {
    // 修改randomData方法以根据曲线编号生成不同的数据
    randomData(seriesNumber) {
      this.now = new Date(+this.now + this.oneDay);

      // 根据系列号更新和返回不同的值
      if (seriesNumber === 1) {
        this.valueSeries1 = this.valueSeries1 + Math.random() * 21 - 10;
        return {
          name: this.now.toString(),
          value: [
            [
              this.now.getFullYear(),
              this.now.getMonth() + 1,
              this.now.getDate()
            ].join("/"),
            Math.round(this.valueSeries1)
          ]
        };
      } else if (seriesNumber === 2) {
        this.valueSeries2 = this.valueSeries2 + Math.random() * 21 - 10;
        return {
          name: this.now.toString(),
          value: [
            [
              this.now.getFullYear(),
              this.now.getMonth() + 1,
              this.now.getDate()
            ].join("/"),
            Math.round(this.valueSeries2)
          ]
        };
      } else {
        // 默认为系列3
        this.valueSeries3 = this.valueSeries3 + Math.random() * 21 - 10;
        return {
          name: this.now.toString(),
          value: [
            [
              this.now.getFullYear(),
              this.now.getMonth() + 1,
              this.now.getDate()
            ].join("/"),
            Math.round(this.valueSeries3)
          ]
        };
      }
    },

    getDBData() {
      this.now = new Date(+this.now + this.oneDay);
      fetch(
        "http://localhost:8081/api/device/queryPredictPass2?measurements=RMS"
      )
        .then(resp => resp.json())
        .then(data => {
          if (data) {
            console.log("getDBData()...");
            console.log(data);
            console.log(this.now);
            console.log(data.data[0].value);

            this.data[0].length = 0;

            for (var i = 0; i < data.data.length; i++) {
              this.data[0].push([
                data.data[i].time,
                parseFloat(data.data[i].value)
              ]);
            }
            console.log(this.data[0]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    initChart() {
      // 初始化数据数组为三个系列，每个系列1000个数据点
      this.data = [[], [], []]; // 修改部分：为三个系列初始化数据数组

      this.chartInstance = echarts.init(this.$refs.chartContainer);
      const option = {
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "25%",
          containLabel: true
        },
        title: {
          left: "",
          text: "有效值",
          padding: [10, 10, 10, 10],
          textStyle: {
            fontSize: 15 // 调整字体大小
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let res = `${params[0].axisValueLabel}: `;
            params.forEach(param => {
              res += `<br/>${param.seriesName}: ${param.data[1]}`;
            });
            return res;
          },
          axisPointer: { animation: false }
        },
        legend: {
          data: ["时间"],
          top: "5%",
          left: "40%"
        },
        xAxis: { type: "category", splitLine: { show: false } },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          min: 0, // 设置Y轴的最小值为0
          max: 8 // 设置Y轴的最大值为6
        },
        series: [
          {
            name: "时间",
            type: "line",
            showSymbol: false,
            data: this.data[0],
            itemStyle: { color: "blue" }
          }
        ]
      };

      this.chartInstance.setOption(option);

      setInterval(() => {
        for (let i = 0; i < 3; i++) {
          let obj = this.getDBData();
          //this.data[0].push([obj.obj, obj.value]); // 更新第一条曲线
          //console.log(this.data[0]);
          // this.data[1].shift();
          // this.data[1].push(this.randomData(2)); // 更新第二条曲线
          // this.data[2].shift();
          // this.data[2].push(this.randomData(3)); // 更新第三条曲线
        }
        this.chartInstance.setOption({
          series: [{ data: this.data[0] }]
        });
      }, 10000);
    }
  }
};
</script>

<style>
/* 可以在这里添加一些样式 */
</style>
