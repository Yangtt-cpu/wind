<script setup lang="tsx">
import { onMounted, ref, onBeforeUnmount, nextTick, defineComponent } from "vue";
import * as echarts from "echarts";
import axios from "axios";
import { addDialog } from "@/components/ReDialog"; // 弹窗组件
import { message } from "@/utils/message";

// 图表实例引用
const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 数据定义：主图表数据
const mainChartData = ref<{ time: string; value: number }[]>([]);

// 后端请求函数：主图表数据（AVG_1YBQXRMS）
async function fetchMainChartData() {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/device/queryPredictPass?measurements=AVG_4YCAQXRMS"
    );
    const fetchedData = response.data?.data || [];
    mainChartData.value = fetchedData.map((item: any) => ({
      time: item.time.replace(" ", "T"),
      value: parseFloat(item.value)
    }));
  } catch (error) {
    console.error("Error fetching main chart data:", error);
  }
}

// 初始化主图表
async function initChart() {
  if (!chartContainer.value) return;

  await fetchMainChartData();

  chartInstance = echarts.init(chartContainer.value);

  const option = {
    title: { text: "振动趋势  mm/s" },
    tooltip: { trigger: "axis" },
    grid: { left: "5%", right: "5%", bottom: "5%", containLabel: true },
    xAxis: { type: "category", data: mainChartData.value.map(item => item.time) },
    yAxis: { type: "value" },
    series: [
      {
        name: "AVG_有效值",
        type: "line",
        data: mainChartData.value.map(item => item.value)
      }
    ]
  };

  chartInstance.setOption(option);
}

// 详细数据页面：x轴有效值和y轴有效值
const ChartContainer = defineComponent({
  setup() {
    const chartRef = ref<HTMLDivElement | null>(null);
    let chartInstance: echarts.ECharts | null = null;

    const fetchDetailedData = async () => {
      try {
        const [xResponse, yResponse] = await Promise.all([
          axios.post(
            "http://localhost:8081/api/device/queryPredictPass?measurements=AVG_4YCAQXRMS"
          ),
          axios.post(
            "http://localhost:8081/api/device/queryPredictPass?measurements=AVG_4YCAQYRMS"
          )
        ]);

        const xData = xResponse.data?.data || [];
        const yData = yResponse.data?.data || [];

        return {
          xAxis: xData.map((item: any) => item.time.replace(" ", "T")),
          xValues: xData.map((item: any) => parseFloat(item.value)),
          yValues: yData.map((item: any) => parseFloat(item.value))
        };
      } catch (error) {
        console.error("Error fetching detailed data:", error);
        return { xAxis: [], xValues: [], yValues: [] };
      }
    };

    const initChart = async () => {
      if (!chartRef.value) return;

      const { xAxis, xValues, yValues } = await fetchDetailedData();

      chartInstance = echarts.init(chartRef.value);

      chartInstance.setOption({
        title: { text: "详细振动趋势数据" },
        tooltip: { trigger: "axis" },
        legend: { data: ["x轴有效值", "y轴有效值"] },
        xAxis: { type: "category", data: xAxis },
        yAxis: { type: "value" },
        series: [
          { name: "x轴有效值", type: "line", data: xValues },
          { name: "y轴有效值", type: "line", data: yValues }
        ]
      });
    };

    onMounted(initChart);
    onBeforeUnmount(() => {
      chartInstance?.dispose();
    });

    return () => <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
  }
});

// 全屏按钮点击事件
function onFullscreenIconClick() {
  addDialog({
    title: "详细数据",
    fullscreenIcon: true,
    fullscreenCallBack: ({ options }: { options: any }) => {
      message(options.fullscreen ? "全屏" : "非全屏");
    },
    contentRenderer: () => <ChartContainer />
  });
}

// 组件挂载时初始化主图表
onMounted(initChart);
onBeforeUnmount(() => {
  chartInstance?.dispose();
});
</script>

<template>
  <div
    class="down-content1 flex justify-center items-center h-full bg-white rounded-md mr-1"
    style="position: relative; height: 100%; width: 100%"
  >
    <!-- 主图表容器 -->
    <div ref="chartContainer" class="chart-container" />
    <!-- 全屏按钮 -->
    <el-button class="fullscreen-btn" @click="onFullscreenIconClick">
      详细数据
    </el-button>
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
  width: 100%;
  height: 100%;
  position: relative;
  flex-grow: 1;
}
.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}
</style>
