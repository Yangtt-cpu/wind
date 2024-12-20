<template>
  <div
    name="Turbine-AssUpleft"
    class="basis-3/4 flex justify-center items-center rounded-lg bg-white mr-1.5"
  >
    <!-- 设备3维图+设备实时传感器信号：温度、振动位移背景图 -->
    <!-- 创建一个新的容器，将图片和文本包含在内 -->
    <div class="relative h-full w-full rounded-lg bg-blue-50">
      <!-- 主图像 -->
      <img
        name="Turbine-AssUpleft-img"
        src="/src/assets/Turbine/Tur8.png"
        alt=""
        class="object-cover w-full h-full rounded-lg"
      />
      <!-- 相对于图片定位的文本 -->
      <!-- 上左一测点1 -->
      <div
        style="
          position: absolute;
          top: 20px;
          left: 15px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>高压缸前端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <span style="font-weight: bold">{{ queryPredict4Q2XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q2YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 上左二测点4 -->
      <div
        style="
          position: absolute;
          top: 20px;
          left: 260px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>低压缸之间</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q4XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q4YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 上左三测点5 -->
      <div
        style="
          position: absolute;
          top: 20px;
          left: 515px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>低压缸后端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q5XYRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q5YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 上左四测点6 -->
      <div
        style="
          position: absolute;
          top: 20px;
          left: 760px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>励磁机前端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q6XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q6YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 下左一测点2 -->
      <div
        style="
          position: absolute;
          top: 430px;
          left: 15px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>高压缸后端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q1XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q1YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 下左二测点3 -->
      <div
        style="
          position: absolute;
          top: 430px;
          left: 260px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>中压缸后端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q3XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q3YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 下左三测点7 -->
      <div
        style="
          position: absolute;
          top: 430px;
          left: 515px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>励磁机后端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q7XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q7YRMS }}mm/s</span>
        </div>
      </div>
      <!-- 下左四测点8 -->
      <div
        style="
          position: absolute;
          top: 430px;
          left: 760px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>发电机后端</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q8XRMS }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <!-- <span style="font-weight: bold">12.3mm/s</span> -->
          <span style="font-weight: bold">{{ queryPredict4Q8YRMS }}mm/s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getqueryPredictRMS } from "@/api/routes";
import { ref, onMounted, onBeforeUnmount } from "vue";

// 定义响应式数据
const queryPredict4Q1XRMS = ref("0.00");
const queryPredict4Q1YRMS = ref("0.00");
const queryPredict4Q2XRMS = ref("0.00");
const queryPredict4Q2YRMS = ref("0.00");
const queryPredict4Q3XRMS = ref("0.00");
const queryPredict4Q3YRMS = ref("0.00");
const queryPredict4Q4XRMS = ref("0.00");
const queryPredict4Q4YRMS = ref("0.00");
const queryPredict4Q5XRMS = ref("0.00");
const queryPredict4Q5YRMS = ref("0.00");
const queryPredict4Q6XRMS = ref("0.00");
const queryPredict4Q6YRMS = ref("0.00");
const queryPredict4Q7XRMS = ref("0.00");
const queryPredict4Q7YRMS = ref("0.00");
const queryPredict4Q8XRMS = ref("0.00");
const queryPredict4Q8YRMS = ref("0.00");

// 通用请求函数
const fetchData = async () => {
  try {
    // console.log("开始获取数据...");
    const [res1, res2, res3, res4, res5, res6, res7, res8] = await Promise.all([
      getqueryPredictRMS("4Q1XRMS"),
      getqueryPredictRMS("4Q1YRMS"),
      getqueryPredictRMS("4Q2XRMS"),
      getqueryPredictRMS("4Q2YRMS"),
      getqueryPredictRMS("4Q3XRMS"),
      getqueryPredictRMS("4Q3YRMS"),
      getqueryPredictRMS("4Q4XRMS"),
      getqueryPredictRMS("4Q4YRMS"),
      getqueryPredictRMS("4Q5XRMS"),
      getqueryPredictRMS("4Q5YRMS"),
      getqueryPredictRMS("4Q6XRMS"),
      getqueryPredictRMS("4Q6YRMS"),
      getqueryPredictRMS("4Q7XRMS"),
      getqueryPredictRMS("4Q7YRMS"),
      getqueryPredictRMS("4Q8XRMS"),
      getqueryPredictRMS("4Q8YRMS")
    ]);

    // 更新 4SAQXRMS 数据
    if (res1.data?.length > 0) {
      const lastItem = res1.data[res1.data.length - 1];
      queryPredict4Q1XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q1XRMS.value = "0.00";
    }
    // 更新 4SAQYRMS 数据
    if (res2.data?.length > 0) {
      const lastItem = res2.data[res2.data.length - 1];
      queryPredict4Q1YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q1YRMS.value = "0.00";
    }
    // 更新 4SAFXRMS 数据
    if (res3.data?.length > 0) {
      const lastItem = res3.data[res3.data.length - 1];
      queryPredict4Q2XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q2XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res4.data?.length > 0) {
      const lastItem = res4.data[res4.data.length - 1];
      queryPredict4Q2YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q2YRMS.value = "0.00";
    }
    if (res5.data?.length > 0) {
      const lastItem = res5.data[res5.data.length - 1];
      queryPredict4Q3XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q3XRMS.value = "0.00";
    }
    // 更新 4SAQYRMS 数据
    if (res6.data?.length > 0) {
      const lastItem = res6.data[res6.data.length - 1];
      queryPredict4Q3YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q3YRMS.value = "0.00";
    }
    // 更新 4SAFXRMS 数据
    if (res7.data?.length > 0) {
      const lastItem = res7.data[res7.data.length - 1];
      queryPredict4Q4XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q4XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res8.data?.length > 0) {
      const lastItem = res8.data[res8.data.length - 1];
      queryPredict4Q4YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q4YRMS.value = "0.00";
    }
    // 更新 4SAFXRMS 数据
    if (res9.data?.length > 0) {
      const lastItem = res9.data[res9.data.length - 1];
      queryPredict4Q5XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q5XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res10.data?.length > 0) {
      const lastItem = res10.data[res10.data.length - 1];
      queryPredict4Q5YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q5YRMS.value = "0.00";
    }
    if (res11.data?.length > 0) {
      const lastItem = res11.data[res11.data.length - 1];
      queryPredict4Q6XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q6XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res12.data?.length > 0) {
      const lastItem = res12.data[res12.data.length - 1];
      queryPredict4Q6YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q6YRMS.value = "0.00";
    }
    if (res13.data?.length > 0) {
      const lastItem = res13.data[res13.data.length - 1];
      queryPredict4Q7XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q7XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res10.data?.length > 0) {
      const lastItem = res8.data[res8.data.length - 1];
      queryPredict4Q7YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q7YRMS.value = "0.00";
    }
    if (res13.data?.length > 0) {
      const lastItem = res13.data[res13.data.length - 1];
      queryPredict4Q8XRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q8XRMS.value = "0.00";
    }
    // 更新 4SAFYRMS 数据
    if (res10.data?.length > 0) {
      const lastItem = res8.data[res8.data.length - 1];
      queryPredict4Q8YRMS.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryPredict4Q8YRMS.value = "0.00";
    }

    // console.log("1YBQXRMS 更新值:", queryPredict1YBQXRMS.value);
    // console.log("1YBQYRMS 更新值:", queryPredict1YBQYRMS.value);
    // console.log("警告值:", fetchqueryAlert.value);
  } catch (error) {
    console.error("轮询获取数据失败:", error);
  }
};

// 定时器轮询
let timer: number;

onMounted(() => {
  fetchData(); // 页面加载时获取一次数据
  timer = setInterval(fetchData, 1000); // 每秒轮询获取数据
});

onBeforeUnmount(() => {
  clearInterval(timer); // 清理定时器，避免内存泄漏
});
</script>
