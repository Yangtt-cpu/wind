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
      <!-- 上左一测点 -->
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
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 上左二测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 上左三测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 上左四测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 下左一测点 -->
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
          <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 下左二测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 下左三测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
      <!-- 下左四测点 -->
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
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">12.3mm/s</span>
          <!-- <span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { getqueryPredictPass2 } from "@/api/routes";
import { ref } from "vue";
import { array } from "vue-types";
const queryPredictPass2 = ref("");
const fetchqueryPredictPass2 = async () => {
  const res = await getqueryPredictPass2();
  // 检查数组是否非空
  if (res.data.length > 0) {
    // 直接获取数组中的最后一个元素，并保留两位小数
    const lastItem = res.data[res.data.length - 1];
    queryPredictPass2.value = parseFloat(lastItem.value).toFixed(2);
  } else {
    queryPredictPass2.value = "0.00"; // 如果数组为空，可以设置为 "0.00" 或其他默认值
  }
  console.log(res, "res"); 
};
fetchqueryPredictPass2();  -->

</script>
