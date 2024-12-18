<script setup lang="tsx">
import { onMounted, ref, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import axios from "axios"; // 添加 axios 请求后端数据
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import React, { useEffect, useRef } from 'react';

// 图表实例引用
const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 数据定义
const dataSeries = ref<{ name: string; value: [string, number] }[]>([]); // 存储请求到的后端数据

// 后端请求函数
async function fetchData() {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/device/queryPredictPass?measurements=AVG_1YBQXRMS"
    );

    const fetchedData = response.data?.data || [];
    if (Array.isArray(fetchedData)) {
      // 格式化数据
      dataSeries.value = fetchedData.map((item: any) => ({
        name: item.time,
        value: [
          item.time.replace(" ", "T"), // 时间作为横坐标
          parseFloat(item.value) // 数据值作为纵坐标
        ]
      }));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 初始化图表
function initChart() {
  if (!chartContainer.value) return;
  chartInstance = echarts.init(chartContainer.value);

  const option = {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      top: "25%",
      containLabel: true
    },
    title: {
      text: "振动趋势  mm/s",
      textStyle: { fontSize: 15 }
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) =>
        `${params[0].axisValueLabel}: <br/>${params[0].seriesName}: ${params[0].data[1]}`,
      axisPointer: { animation: false }
    },
    // legend: {
    //   data: ["有效值"],
    //   top: "5%",
    //   left: "40%",
    // },
    xAxis: {
      type: "category",
      data: dataSeries.value.map(item => item.value[0])
    },
    yAxis: { type: "value", min: 0 },
    series: [
      {
        name: "有效值",
        type: "line",
        showSymbol: true,
        data: dataSeries.value.map(item => item.value)
      }
    ]
  };

  chartInstance.setOption(option);
}

// 图表内容组件
const ChartContent = () => {
  const chartRef = useRef(null); // 用来引用DOM节点

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Stacked Line"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    // 设置图表的配置项
    if (option) {
      myChart.setOption(option);
    }

    // 清理图表实例
    return () => {
      myChart.dispose();
    };
  }, []); // 空依赖数组，确保只初始化一次

  return <div style={{ width: "100%", height: "400px" }} ref={chartRef} />;
};

// 更新数据并刷新图表
async function updateChart() {
  await fetchData();
  chartInstance?.setOption({
    xAxis: { data: dataSeries.value.map(item => item.value[0]) },
    series: [{ data: dataSeries.value.map(item => item.value) }]
  });
}

onMounted(async () => {
  await updateChart();
  initChart();

  // 每 10 秒从后端拉取最新数据并更新图表
  setInterval(updateChart, 10000);
});

onBeforeUnmount(() => {
  chartInstance?.dispose();
});

// 全屏按钮和全屏事件
function onFullscreenIconClick() {
  addDialog({
    title: "详细数据",
    fullscreenIcon: true,
    fullscreenCallBack: ({ options }: { options: any }) => {
      message(options.fullscreen ? "全屏" : "非全屏");
    },
    contentRenderer: () => <ChartContent />
    //contentRenderer: () => <p>123</p>
  });
}
</script>

<template>
  <div
    class="down-content1 flex justify-center items-center h-full bg-white rounded-md mr-1"
    style="position: relative"
  >
    <!-- 图表容器 -->
    <div ref="chartContainer" class="chart-container" />
    <!-- 全屏按钮 -->
    <el-button class="fullscreen-btn" @click="onFullscreenIconClick"
      >详细数据</el-button
    >
  </div>
</template>

<style scoped>
.down-content1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chart-container {
  width: 100%; /* 自适应父容器宽度 */
  height: 100%; /* 自适应父容器高度 */
  position: relative; /* 使按钮可以相对定位 */
  flex-grow: 1;
}
.fullscreen-btn {
  position: absolute;
  top: 10px; /* 距离顶部 10 像素 */
  right: 10px; /* 距离右侧 10 像素 */
  z-index: 10; /* 确保按钮位于图表之上 */
}
</style>
