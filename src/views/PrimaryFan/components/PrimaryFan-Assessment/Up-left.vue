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
        src="/src/assets/PrimaryFan/Assessment/haifeng3.jpg"
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
      <svg style="position: absolute; top: 50px; left: 800px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <!-- SVG paths here -->
          <svg t="1732688012011" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3722" width="500" height="500"><path d="M1024.769684 559.111055a464.696524 464.696524 0 0 1-464.760664 464.888945H465.466207A464.696524 464.696524 0 0 1 0.577263 559.111055V464.953085A464.888945 464.888945 0 0 1 465.466207 0h94.542813a464.824804 464.824804 0 0 1 464.760664 464.888945v94.22211z" fill="#FE6668" p-id="3723"></path><path d="M512.673473 825.229189a62.60094 62.60094 0 0 1-45.860319-18.79311 60.997432 60.997432 0 0 1-18.85725-44.449233h127.895772a60.805011 60.805011 0 0 1-18.087567 45.090636 61.253993 61.253993 0 0 1-45.090636 18.151707z m192.805763-352.322706v159.645224l64.84585 64.78171v31.557031H255.278422v-31.557031L320.124272 632.423426V472.906483c0-50.22186 12.699781-93.901409 38.355903-131.038647 25.591982-37.137238 60.933292-61.253993 106.088068-72.221986v-22.641528a47.463827 47.463827 0 0 1 13.597745-33.866082 45.154776 45.154776 0 0 1 34.571626-14.303289c14.175008 0 25.591982 4.810523 34.699906 14.303289a47.014845 47.014845 0 0 1 13.533604 33.866082v22.641528c45.090636 11.032133 80.624366 35.148888 106.152208 72.221986 25.527842 37.137238 38.420044 80.816787 38.355904 131.038647z m63.242342-16.61234c-4.938804-86.332853-42.717444-155.027122-113.01522-206.275227l45.154776-45.090635c83.382399 64.140307 127.51093 148.035828 132.449734 251.365862h-64.58929zM371.179956 249.954776c-71.195741 50.22186-109.359223 119.04441-114.362167 206.339367H191.971939c5.002944-103.394175 49.195615-187.225556 132.578014-251.430003l46.630003 45.090636z" fill="#FFFFFF" p-id="3724"></path></svg>

        </svg>
        <div
        style="
          position: absolute;
          top: 75px;
          left: 520px;
          color: rgb(255, 255, 255);
          font-family: &quot;华文中宋&quot;, sans-serif;
          font-size: 25px;
        "
      >
        <div style="margin-bottom: 10px"><span>风机状态实时预警：</span></div>
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
        <div style="margin-bottom: 10px"><span>正常</span></div>
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
