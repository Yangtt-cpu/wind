<script setup lang="tsx">
import { onMounted, ref, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";

// 图表实例引用
const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 数据定义
const now = ref(new Date(2024, 4, 10));
const oneDay = 24 * 3600 * 1000;
const dataSeries = ref([[], [], []]); // 三组数据

function randomData(seriesNumber: number) {
  now.value = new Date(+now.value + oneDay);
  const randomValue = Math.random() * 21 - 10;
  const result = {
    name: now.value.toString(),
    value: [
      `${now.value.getFullYear()}/${now.value.getMonth() + 1}/${now.value.getDate()}`,
      Math.round(randomValue)
    ]
  };
  return result;
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
      text: "有效值",
      textStyle: { fontSize: 15 }
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) =>
        `${params[0].axisValueLabel}: <br/>${params[0].seriesName}: ${params[0].data[1]}`,
      axisPointer: { animation: false }
    },
    legend: {
      data: ["时间"],
      top: "5%",
      left: "40%"
    },
    xAxis: { type: "category" },
    yAxis: { type: "value", min: 0, max: 8 },
    series: [
      {
        name: "时间",
        type: "line",
        showSymbol: false,
        data: dataSeries.value[0]
      }
    ]
  };

  chartInstance.setOption(option);

  // 每 10 秒更新一次数据
  setInterval(() => {
    dataSeries.value[0].push(randomData(1));
    chartInstance?.setOption({ series: [{ data: dataSeries.value[0] }] });
  }, 1000);
}

onMounted(initChart);
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
    contentRenderer: () => <p>弹框内容-全屏按钮和全屏事件</p>
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
