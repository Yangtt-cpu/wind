<template>
  <div
    name="Up-left"
    class="basis-3/4 flex justify-center items-center rounded-lg bg-white mr-1.5"
  >
    <!-- 设备3维图+设备实时传感器信号：温度、振动位移背景图 -->
    <!-- 创建一个新的容器，将图片和文本包含在内 -->
    <div class="relative h-full w-full rounded-lg bg-blue-50">
      <!-- 主图像 -->
      <img
        name="Up-left-img"
        src="/src/assets/PrimaryFan/Assessment/zong2.png"
        alt=""
        class="object-cover w-full h-full rounded-lg"
      />
      <!-- 相对于图片定位的文本 -->
      <div
        style="
          position: absolute;
          top: 20px;
          left: 31px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <span style="margin-right: 9px">前轴承温度</span>
        <span style="margin-right: 9px">后轴承温度</span>
        <span>推力轴承温度</span>
      </div>
      <div
        style="
          position: absolute;
          top: 50px;
          left: 55px;
          color: rgb(0, 0, 0);
          font-weight: bold;
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>
      <div
        style="
          position: absolute;
          top: 50px;
          left: 150px;
          color: rgb(0, 0, 0);
          font-weight: bold;
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>
      <div
        style="
          position: absolute;
          top: 50px;
          left: 250px;
          color: rgb(0, 0, 0);
          font-weight: bold;
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>
      <div
        style="
          position: absolute;
          top: 450px;
          left: 70px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>非驱动端轴承</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span
          ><span style="font-weight: bold">{{ queryPredictPass2 }}</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">1.203mm/s</span>
        </div>
      </div>
      <!-- <div
        style="position: absolute; top: 450px; left: 282px; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div style="margin-bottom: 10px;"><span>风机轴承2#</span></div>
        <div><span style="margin-right: 40px;">X轴位移</span><span style="font-weight: bold;">1.203mm/s</span></div>
        <div><span style="margin-right: 40px;">Y轴位移</span><span style="font-weight: bold;">1.203mm/s</span></div>
      </div>
      <div
        style="position: absolute; top: 435px; left: 528px; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div style="margin-bottom: 10px;"><span>驱动端轴承</span></div>
        <div><span style="margin-right: 40px;">X轴位移</span><span style="font-weight: bold;">1.203mm/s</span></div>
        <div><span style="margin-right: 40px;">Y轴位移</span><span style="font-weight: bold;">1.203mm/s</span></div>
      </div> -->
      <div
        style="
          position: absolute;
          top: 440px;
          left: 670px;
          color: rgb(0, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 18px;
        "
      >
        <div style="margin-bottom: 10px"><span>驱动端轴承</span></div>
        <div>
          <span style="margin-right: 40px">X轴位移</span
          ><span style="font-weight: bold">1.203mm/s</span>
        </div>
        <div>
          <span style="margin-right: 40px">Y轴位移</span
          ><span style="font-weight: bold">1.203mm/s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getqueryPredictPass2 } from "@/api/routes";
import { ref } from "vue";
import { array } from "vue-types";
const queryPredictPass2 = ref("");
const fetchqueryPredictPass2 = async () => {
  const res = await getqueryPredictPass2();
  // device.value = res.data;
  //queryPredictPass2.value = res.data.map(item=>item.value)
  // 使用 reduce 方法累加到最后一个元素
  queryPredictPass2.value = res.data.reduce((acc, item) => item.value, "");
  console.log(res, "res");
};

fetchqueryPredictPass2();
</script>
