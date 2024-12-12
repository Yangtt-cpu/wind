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
        src="/src/assets/PrimaryFan/Assessment/fengji2a.png"
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
          ><span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span
          ><span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span>
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
          ><span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span>
        </div>
        <div>
          <span style="margin-right: 40px">Y轴位移</span
          ><span style="font-weight: bold">{{ queryPredictPass2 }}mm/s</span>
        </div>
      </div>
      <svg style="position: absolute; top: 75px; left: 800px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <!-- SVG paths here -->
          <svg t="1732776281414" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2462" width="200" height="200"><path d="M85.333333 810.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h42.666667v-192c0-187.733333 153.6-341.333333 341.333333-341.333333s341.333333 153.6 341.333333 341.333333v192h42.666667c23.466667 0 42.666667 19.2 42.666667 42.666667v149.333333c0 23.466667-19.2 42.666667-42.666667 42.666667H128c-23.466667 0-42.666667-19.2-42.666667-42.666667v-149.333333z m85.333334 42.666666v64h682.666666v-64H170.666667z m85.333333-277.333333v192h512v-192c0-140.8-115.2-256-256-256s-256 115.2-256 256zM469.333333 64v85.333333c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V64c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667M119.466667 183.466667c-17.066667 17.066667-17.066667 42.666667 0 59.733333l59.733333 59.733333c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866666-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333L181.333333 183.466667c-17.066667-17.066667-44.8-17.066667-61.866666 0M844.8 183.466667l-59.733333 59.733333c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8 10.666667 0 21.333333-4.266667 29.866667-12.8l59.733333-59.733333c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-44.8-17.066667-59.733333 0" fill="#d81e06" p-id="2463"></path><path d="M648.533333 439.466667c-19.2-19.2-44.8-34.133333-70.4-44.8-21.333333-8.533333-46.933333 4.266667-55.466666 25.6s4.266667 46.933333 25.6 55.466666c14.933333 4.266667 27.733333 12.8 38.4 25.6 10.666667 10.666667 19.2 23.466667 25.6 38.4 6.4 17.066667 23.466667 27.733333 40.533333 27.733334 4.266667 0 10.666667 0 14.933333-2.133334 21.333333-8.533333 34.133333-32 25.6-55.466666-10.666667-25.6-25.6-49.066667-44.8-70.4" fill="#d81e06" p-id="2464"></path></svg>

        </svg>
        
        <div
        style="
          position: absolute;
          top: 75px;
          left: 620px;
          color: rgb(255, 255, 255);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 25px;
        "
      >
        <div style="margin-bottom: 10px"><span>风机状态：</span></div>
        </div>
        <div
        style="
          position: absolute;
          top: 75px;
          left: 740px;
          color: rgb(178, 0, 0);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 25px;
        "
      >
        <div style="margin-bottom: 10px"><span>{{ queryAlert }}</span></div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { getqueryPredictPass2 } from "@/api/routes";
import { ref } from "vue";
import { array } from "vue-types";
// const queryPredictPass2 = ref("");
// const fetchqueryPredictPass2 = async () => {
//   const res = await getqueryPredictPass2();
//   // device.value = res.data;
//   //queryPredictPass2.value = res.data.map(item=>item.value)
//   // 使用 reduce 方法累加到最后一个元素
//   queryPredictPass2.value = res.data.reduce((acc, item) => item.value, "");
//   console.log(res, "res");
// };
// fetchqueryPredictPass2();
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
fetchqueryPredictPass2(); 


import { getqueryAlert } from "@/api/routes";
const queryAlert = ref("");
const fetchqueryAlert = async () => {
  const res = await getqueryAlert();
  queryAlert.value = res.data.reduce((acc, item) => item.value, "");
  console.log(res, "res");
};
fetchqueryAlert();
</script>
