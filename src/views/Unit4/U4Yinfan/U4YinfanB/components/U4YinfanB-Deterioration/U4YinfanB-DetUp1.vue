<!-- <template lang="">
  <div class="bg-blue-200 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712912806484"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="21520"
        width="40"
        height="40"
      >
        <path
          d="M900.495128 0H123.492523C55.571635 0 0 55.571635 0 123.492523v777.014954c0 67.920888 55.571635 123.492523 123.492523 123.492523h777.014954c67.920888 0 123.492523-55.571635 123.492523-123.492523V123.492523C1023.987651 55.571635 968.416015 0 900.495128 0z m4.581572 550.776652a39.357067 39.357067 0 0 1-39.233574 39.233575H678.665509a38.961891 38.961891 0 0 1-8.977906-1.049687 39.381766 39.381766 0 0 1-37.529378-29.144235l-39.233575-148.561505-61.314037 340.382441a38.554366 38.554366 0 0 1-44.642547 31.008972l-1.580705-0.284033a38.282682 38.282682 0 0 1-24.081042-15.066087q-0.605113-0.703907-1.173179-1.432514L256.839749 501.330246l-65.253449 74.49069a39.270622 39.270622 0 0 1-34.170381 13.114906c-0.938543 0.061746-1.877086 0.111143-2.827979 0.111143H75.787361a39.357067 39.357067 0 0 1-39.233574-39.233574 39.357067 39.357067 0 0 1 39.233574-39.233575h68.674192l79.677376-90.964592c0.308731-0.358128 0.629812-0.691558 0.950893-1.037338a34.009841 34.009841 0 0 1 6.384563-6.43396l7.854124-6.038784a34.380318 34.380318 0 0 1 48.07564 6.298118l182.768933 237.784853 75.898505-421.294742a38.554366 38.554366 0 0 1 44.642547-31.008972l1.580704 0.284033a38.443222 38.443222 0 0 1 27.514135 20.684997 38.863097 38.863097 0 0 1 7.298408 14.423927l73.502749 278.352146h165.232996a39.357067 39.357067 0 0 1 39.233574 39.196527z"
          fill="#00A2FF"
          p-id="21521"
        ></path>
      </svg>
      <p class="font-bold ml-3" style="font-family: SimHei; font-size: 25px">
        当前健康度
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: &quot;华文中宋&quot;, sans-serif;
          color: red;
          font-size: 40px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >{{ queryHealthValue }}</span
      >
    </div>
  </div>
  <div class="bg-gray-400 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913120417"
        class="icon mb-1 mr-3"
        viewBox="0 0 1025 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="23471"
        width="40"
        height="40"
      >
        <path
          d="M917.87 200.048C834.542 91.627 713.998 22.152 578.403 4.41c-134.256-17.562-267.326 17.713-375.183 99.3l-38.998-39.053c-11.128-11.14-21.396-7.415-22.82 8.25l-12.801 139.801c-1.432 15.666 10.22 27.342 25.899 25.928l139.805-12.632c15.679-1.41 19.41-11.687 8.277-22.828l-40.457-40.507c88.811-63.64 196.723-90.872 305.587-76.629 113.794 14.886 214.958 73.194 284.882 164.18 69.92 90.979 100.219 203.735 85.333 317.507-10.579 80.801-43.045 155.247-93.566 216.674-20.613 25.051-44.23 47.943-70.61 68.209-90.976 69.924-203.735 100.23-317.52 85.341-113.772-14.886-214.927-73.194-284.856-164.169-68.12-88.626-98.767-198.59-86.307-309.638 2.536-22.596-13.725-42.977-36.328-45.504-22.588-2.544-42.955 13.725-45.48 36.322-14.87 132.33 21.66 263.379 102.832 368.99 83.328 108.419 203.883 177.9 339.463 195.64 135.575 17.732 269.94-18.394 378.375-101.72 31.405-24.125 59.564-51.41 84.128-81.274 60.223-73.185 98.906-161.878 111.512-258.177 17.736-135.587-18.378-269.96-101.7-378.373z"
          p-id="23472"
          fill="#f4ea2a"
        ></path>
        <path
          d="M491.885 178.777c-18.404 0-33.325 14.92-33.325 33.321V544.21l303.723 156.993c4.897 2.538 10.13 3.743 15.273 3.734 12.075 0 23.718-6.57 29.64-18.032 8.46-16.353 2.055-36.458-14.296-44.922L525.23 503.605V212.1c-0.002-18.402-14.925-33.323-33.345-33.323z"
          p-id="23473"
          fill="#f4ea2a"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: &quot;黑体&quot;, sans-serif; font-size: 25px"
      >
        设备剩余寿命
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: &quot;华文中宋&quot;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >20年</span
      >
    </div>
  </div>
  <div class="bg-pink-200 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913170571"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="26626"
        width="40"
        height="40"
      >
        <path
          d="M192 672c19.2 0 32 12.8 32 32v128c0 19.2-12.8 32-32 32s-32-12.8-32-32v-128c0-19.2 12.8-32 32-32zM416 480c19.2 0 32 12.8 32 32v320c0 19.2-12.8 32-32 32s-32-12.8-32-32V512c0-19.2 12.8-32 32-32zM608 608c19.2 0 32 12.8 32 32v192c0 19.2-12.8 32-32 32s-32-12.8-32-32v-192c0-19.2 12.8-32 32-32zM832 448c19.2 0 32 12.8 32 32v352c0 19.2-12.8 32-32 32s-32-12.8-32-32V480c0-19.2 12.8-32 32-32z"
          fill="#597EF7"
          p-id="26627"
        ></path>
        <path
          d="M419.2 323.2l-246.4 246.4c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8l291.2-291.2 192 192 217.6-217.6c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-262.4 262.4-192-192z"
          fill="#50E3C2"
          p-id="26628"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: &quot;黑体&quot;, sans-serif; font-size: 25px"
      >
        预警状态
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: &quot;华文中宋&quot;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >{{ queryAlert }}</span
      >
    </div>
  </div>
  <div class="bg-green-400 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913218671"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="27621"
        width="40"
        height="40"
      >
        <path
          d="M959.825022 191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717zM146.715595 146.66502a63.839021 63.839021 0 0 1 45.372232-18.784682h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129V480.093133s0.0289 0 0 0h-50.527184l-54.764574-54.710387a31.970084 31.970084 0 0 0-52.933067 12.506263L698.078535 556.676838l-93.482694-186.965389a31.970084 31.970084 0 0 0-58.279477 2.423947l-93.269561 233.168483-102.307883-358.086621a31.970084 31.970084 0 0 0-59.330697-5.519807l-119.264671 238.269247L127.880338 480.093133V192.001129A63.777609 63.777609 0 0 1 146.715595 146.66502z m730.43515 730.536299a63.456102 63.456102 0 0 1-45.253022 18.67631H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V544.033302l64.135241-0.180622a32.024271 32.024271 0 0 0 28.538267-17.668439l91.261045-182.395653L417.236696 712.781162a31.977309 31.977309 0 0 0 29.112645 23.144896q0.823636 0.043349 1.64366 0.043349a31.973697 31.973697 0 0 0 29.676186-20.095998l101.560108-253.900269 96.163124 192.322635a31.970084 31.970084 0 0 0 58.926104-4.186816l47.651681-142.951433 27.552072 27.523172a31.970084 31.970084 0 0 0 22.60303 9.352604H895.884854c0.0289 0 0 0 0 0v287.965569a63.398303 63.398303 0 0 1-18.719659 45.209673z"
          fill="#d81e06"
          p-id="27622"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: &quot;黑体&quot;, sans-serif; font-size: 25px"
      >
        设备状态
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: &quot;华文中宋&quot;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >优秀</span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { getqueryAlert, getqueryHealthValue } from '@/api/routes';
import { ref, onMounted, onBeforeUnmount } from "vue";

// 定义响应式数据
const queryAlert = ref("未获取到数据");
const queryHealthValue = ref("0.0");

// 获取警告数据的函数
const fetchAlertData = async () => {
  try {
    const response = await getqueryAlert("1YBalert"); // 请求后端数据并传入参数
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

const fetchHealthData = async () => {
  try {
    const response = await getqueryHealthValue("1YBjkd");

    // 打印整个响应对象，调试路径
    console.log("完整的后端返回数据：", response);

    if (response.data?.length > 0) {
      const lastItem = response.data[response.data.length - 1];
      queryHealthValue.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryHealthValue.value = "0.00";
    }
  } catch (error) {
    console.error("获取数据失败:", error);
  }
};



/// 定时器轮询
let timer: number;

onMounted(() => {
  fetchAlertData(); // 页面加载时获取一次数据
  fetchHealthData();
  timer = setInterval(fetchAlertData, 1000); // 每秒轮询获取数据
});

onBeforeUnmount(() => {
  clearInterval(timer); // 清理定时器，避免内存泄漏
});
</script>
<style lang=""></style> -->

<template>
  <div class="bg-blue-200 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712912806484"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="21520"
        width="40"
        height="40"
      >
        <path
          d="M900.495128 0H123.492523C55.571635 0 0 55.571635 0 123.492523v777.014954c0 67.920888 55.571635 123.492523 123.492523 123.492523h777.014954c67.920888 0 123.492523-55.571635 123.492523-123.492523V123.492523C1023.987651 55.571635 968.416015 0 900.495128 0z m4.581572 550.776652a39.357067 39.357067 0 0 1-39.233574 39.233575H678.665509a38.961891 38.961891 0 0 1-8.977906-1.049687 39.381766 39.381766 0 0 1-37.529378-29.144235l-39.233575-148.561505-61.314037 340.382441a38.554366 38.554366 0 0 1-44.642547 31.008972l-1.580705-0.284033a38.282682 38.282682 0 0 1-24.081042-15.066087q-0.605113-0.703907-1.173179-1.432514L256.839749 501.330246l-65.253449 74.49069a39.270622 39.270622 0 0 1-34.170381 13.114906c-0.938543 0.061746-1.877086 0.111143-2.827979 0.111143H75.787361a39.357067 39.357067 0 0 1-39.233574-39.233574 39.357067 39.357067 0 0 1 39.233574-39.233575h68.674192l79.677376-90.964592c0.308731-0.358128 0.629812-0.691558 0.950893-1.037338a34.009841 34.009841 0 0 1 6.384563-6.43396l7.854124-6.038784a34.380318 34.380318 0 0 1 48.07564 6.298118l182.768933 237.784853 75.898505-421.294742a38.554366 38.554366 0 0 1 44.642547-31.008972l1.580704 0.284033a38.443222 38.443222 0 0 1 27.514135 20.684997 38.863097 38.863097 0 0 1 7.298408 14.423927l73.502749 278.352146h165.232996a39.357067 39.357067 0 0 1 39.233574 39.196527z"
          fill="#00A2FF"
          p-id="21521"
        ></path>
      </svg>
      <p class="font-bold ml-3" style="font-family: SimHei; font-size: 25px">
        当前健康度
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: &quot;华文中宋&quot;, sans-serif;
          color: red;
          font-size: 40px;
        "
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
        >{{ queryHealthValue }}</span
      >
    </div>
  </div>
  <div class="bg-gray-400 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913120417"
        class="icon mb-1 mr-3"
        viewBox="0 0 1025 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="23471"
        width="40"
        height="40"
      >
        <path
          d="M917.87 200.048C834.542 91.627 713.998 22.152 578.403 4.41c-134.256-17.562-267.326 17.713-375.183 99.3l-38.998-39.053c-11.128-11.14-21.396-7.415-22.82 8.25l-12.801 139.801c-1.432 15.666 10.22 27.342 25.899 25.928l139.805-12.632c15.679-1.41 19.41-11.687 8.277-22.828l-40.457-40.507c88.811-63.64 196.723-90.872 305.587-76.629 113.794 14.886 214.958 73.194 284.882 164.18 69.92 90.979 100.219 203.735 85.333 317.507-10.579 80.801-43.045 155.247-93.566 216.674-20.613 25.051-44.23 47.943-70.61 68.209-90.976 69.924-203.735 100.23-317.52 85.341-113.772-14.886-214.927-73.194-284.856-164.169-68.12-88.626-98.767-198.59-86.307-309.638 2.536-22.596-13.725-42.977-36.328-45.504-22.588-2.544-42.955 13.725-45.48 36.322-14.87 132.33 21.66 263.379 102.832 368.99 83.328 108.419 203.883 177.9 339.463 195.64 135.575 17.732 269.94-18.394 378.375-101.72 31.405-24.125 59.564-51.41 84.128-81.274 60.223-73.185 98.906-161.878 111.512-258.177 17.736-135.587-18.378-269.96-101.7-378.373z"
          p-id="23472"
          fill="#f4ea2a"
        ></path>
        <path
          d="M491.885 178.777c-18.404 0-33.325 14.92-33.325 33.321V544.21l303.723 156.993c4.897 2.538 10.13 3.743 15.273 3.734 12.075 0 23.718-6.57 29.64-18.032 8.46-16.353 2.055-36.458-14.296-44.922L525.23 503.605V212.1c-0.002-18.402-14.925-33.323-33.345-33.323z"
          p-id="23473"
          fill="#f4ea2a"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: &quot;华文中宋&quot;, sans-serif; font-size: 25px"
      >
        设备剩余寿命
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: '华文中宋', sans-serif;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >20年</span
      >
    </div>
  </div>
  <div class="bg-pink-200 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913170571"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="26626"
        width="40"
        height="40"
      >
        <path
          d="M192 672c19.2 0 32 12.8 32 32v128c0 19.2-12.8 32-32 32s-32-12.8-32-32v-128c0-19.2 12.8-32 32-32zM416 480c19.2 0 32 12.8 32 32v320c0 19.2-12.8 32-32 32s-32-12.8-32-32V512c0-19.2 12.8-32 32-32zM608 608c19.2 0 32 12.8 32 32v192c0 19.2-12.8 32-32 32s-32-12.8-32-32v-192c0-19.2 12.8-32 32-32zM832 448c19.2 0 32 12.8 32 32v352c0 19.2-12.8 32-32 32s-32-12.8-32-32V480c0-19.2 12.8-32 32-32z"
          fill="#597EF7"
          p-id="26627"
        ></path>
        <path
          d="M419.2 323.2l-246.4 246.4c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8l291.2-291.2 192 192 217.6-217.6c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-262.4 262.4-192-192z"
          fill="#50E3C2"
          p-id="26628"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: '华文中宋', sans-serif;, sans-serif; font-size: 25px"
      >
        预警状态
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: '华文中宋', sans-serif;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >{{ queryAlert }}</span
      >
    </div>
  </div>
  <div class="bg-green-400 rounded-md w-full h-full flex flex-col items-center">
    <div class="flex items-end basis-1/2">
      <svg
        t="1712913218671"
        class="icon mb-1 mr-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="27621"
        width="40"
        height="40"
      >
        <path
          d="M959.825022 191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717zM146.715595 146.66502a63.839021 63.839021 0 0 1 45.372232-18.784682h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129V480.093133s0.0289 0 0 0h-50.527184l-54.764574-54.710387a31.970084 31.970084 0 0 0-52.933067 12.506263L698.078535 556.676838l-93.482694-186.965389a31.970084 31.970084 0 0 0-58.279477 2.423947l-93.269561 233.168483-102.307883-358.086621a31.970084 31.970084 0 0 0-59.330697-5.519807l-119.264671 238.269247L127.880338 480.093133V192.001129A63.777609 63.777609 0 0 1 146.715595 146.66502z m730.43515 730.536299a63.456102 63.456102 0 0 1-45.253022 18.67631H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V544.033302l64.135241-0.180622a32.024271 32.024271 0 0 0 28.538267-17.668439l91.261045-182.395653L417.236696 712.781162a31.977309 31.977309 0 0 0 29.112645 23.144896q0.823636 0.043349 1.64366 0.043349a31.973697 31.973697 0 0 0 29.676186-20.095998l101.560108-253.900269 96.163124 192.322635a31.970084 31.970084 0 0 0 58.926104-4.186816l47.651681-142.951433 27.552072 27.523172a31.970084 31.970084 0 0 0 22.60303 9.352604H895.884854c0.0289 0 0 0 0 0v287.965569a63.398303 63.398303 0 0 1-18.719659 45.209673z"
          fill="#d81e06"
          p-id="27622"
        ></path>
      </svg>
      <p
        class="font-bold ml-3 mt"
        style="font-family: '华文中宋', sans-serif;, sans-serif; font-size: 25px"
      >
        设备状态
      </p>
    </div>
    <div class="flex basis-1/2 justify-center items-center">
      <span
        v-motion
        class="text-lg font-semibold"
        style="
          font-family: '华文中宋', sans-serif;, sans-serif;
          color: red;
          font-size: 35px;
        "
        :initial="{
          opacity: 0,
          y: 50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000
          }
        }"
        >{{
          queryHealthValue <= 25
            ? "危险"
            : queryHealthValue <= 50
              ? "正常"
              : queryHealthValue <= 75
                ? "良好"
                : "优秀"
        }}</span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { getqueryAlert, getqueryHealthValue } from "@/api/routes";
import { ref, onMounted, onBeforeUnmount } from "vue";

// 定义响应式数据
const queryAlert = ref("未获取到数据");
const queryHealthValue = ref("0.0");

// 获取警告数据的函数
const fetchAlertData = async () => {
  try {
    const response = await getqueryAlert("4YBalert"); // 请求后端数据并传入参数
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

const fetchHealthData = async () => {
  try {
    const response = await getqueryHealthValue("4YBjkd");

    // 打印整个响应对象，调试路径
    console.log("完整的后端返回数据：", response);

    if (response.data?.length > 0) {
      const lastItem = response.data[response.data.length - 1];
      queryHealthValue.value = parseFloat(lastItem.value).toFixed(2);
    } else {
      queryHealthValue.value = "0.00";
    }
  } catch (error) {
    console.error("获取数据失败:", error);
  }
};

/// 定时器轮询
let timer: number;

onMounted(() => {
  fetchAlertData(); // 页面加载时获取一次数据
  fetchHealthData();
  timer = setInterval(fetchAlertData, 1000); // 每秒轮询获取数据
});

onBeforeUnmount(() => {
  clearInterval(timer); // 清理定时器，避免内存泄漏
});
</script>
<style lang=""></style>
