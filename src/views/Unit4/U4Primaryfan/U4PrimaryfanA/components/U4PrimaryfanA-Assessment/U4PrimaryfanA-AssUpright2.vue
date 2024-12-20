

<!-- <script>
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
</script> -->
<template>
  <!-- 频谱图容器 -->
  <div
    ref="echartsContainer"
    class="w-full h-full"
    style="position: relative; display: flex; align-items: center; justify-content: center;"
  >
    <!-- 文字容器 -->
    <div
      style="display: flex; align-items: center; justify-content: center; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 35px; text-align: center;"
    >
      <span>风机状态：</span>
      <span style="color: red;">{{ queryAlert }}</span>
    </div>

    <!-- SVG 图标，放置在文字的右边 -->
    <svg
      t="1732776281414"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2462"
      style="position: absolute; right: 8px; width: 50px; height: auto;"
    >
      <path
        d="M85.333333 810.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h42.666667v-192c0-187.733333 153.6-341.333333 341.333333-341.333333s341.333333 153.6 341.333333 341.333333v192h42.666667c23.466667 0 42.666667 19.2 42.666667 42.666667v149.333333c0 23.466667-19.2 42.666667-42.666667 42.666667H128c-23.466667 0-42.666667-19.2-42.666667-42.666667v-149.333333z m85.333334 42.666666v64h682.666666v-64H170.666667z m85.333333-277.333333v192h512v-192c0-140.8-115.2-256-256-256s-256 115.2-256 256zM469.333333 64v85.333333c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V64c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667M119.466667 183.466667c-17.066667 17.066667-17.066667 42.666667 0 59.733333l59.733333 59.733333c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866666-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333L181.333333 183.466667c-17.066667-17.066667-44.8-17.066667-61.866666 0M844.8 183.466667l-59.733333 59.733333c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8 10.666667 0 21.333333-4.266667 29.866667-12.8l59.733333-59.733333c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-44.8-17.066667-59.733333 0"
        fill="#d81e06"
        p-id="2463"
      ></path>
      <path
        d="M648.533333 439.466667c-19.2-19.2-44.8-34.133333-70.4-44.8-21.333333-8.533333-46.933333 4.266667-55.466666 25.6s4.266667 46.933333 25.6 55.466666c14.933333 4.266667 27.733333 12.8 38.4 25.6 10.666667 10.666667 19.2 23.466667 25.6 38.4 6.4 17.066667 23.466667 27.733333 40.533333 27.733334 4.266667 0 10.666667 0 14.933333-2.133334 21.333333-8.533333 34.133333-32 25.6-55.466666-10.666667-25.6-25.6-49.066667-44.8-70.4"
        fill="#d81e06"
        p-id="2464"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { getqueryAlert } from '@/api/routes';
import { ref, onMounted, onBeforeUnmount } from "vue";

// 定义响应式数据
const queryAlert = ref("未获取到数据");

// 获取警告数据的函数
const fetchAlertData = async () => {
  try {
    const response = await getqueryAlert("4YCAalert"); // 请求后端数据并传入参数
    //console.log("后端返回的数据：", response);

    // 检查响应数据
    if (response?.data?.length > 0) {
      const alert = response.data[0]; // 获取第一个数据对象
      queryAlert.value = alert.value || "无数据"; // 提取 "value" 字段
    } else {
      queryAlert.value = "未获取到数据";
    }
  } catch (error) {
    console.error("获取数据失败:", error);
    queryAlert.value = "数据请求失败";
  }
};

/// 定时器轮询
let timer: number;

onMounted(() => {
  fetchAlertData(); // 页面加载时获取一次数据
  timer = setInterval(fetchAlertData, 1000); // 每秒轮询获取数据
});

onBeforeUnmount(() => {
  clearInterval(timer); // 清理定时器，避免内存泄漏
});
</script>

