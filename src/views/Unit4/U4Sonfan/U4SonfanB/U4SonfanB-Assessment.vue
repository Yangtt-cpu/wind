<script setup lang="ts">
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";
import { defineComponent } from "vue";
import U4SonfanBAssDown1 from "./components/U4SonfanB-Assessment/U4SonfanB-AssDown1.vue";
import U4SonfanBAssUpleft from "./components/U4SonfanB-Assessment/U4SonfanB-AssUpleft.vue";
import U4SonfanBAssDown2 from "./components/U4SonfanB-Assessment/U4SonfanB-AssDown2.vue";
import U4SonfanBAssDown3 from "./components/U4SonfanB-Assessment/U4SonfanB-AssDown3.vue";
import U4SonfanBAssUpright1 from "./components/U4SonfanB-Assessment/U4SonfanB-AssUpright1.vue";
import U4SonfanBAssUpright2 from "./components/U4SonfanB-Assessment/U4SonfanB-AssUpright2.vue";
import U4SonfanBAssUpright3 from "./components/U4SonfanB-Assessment/U4SonfanB-AssUpright3.vue";

//各组件的定义
defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssDown1,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssDown2,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssUpleft,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssDown3,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssUpright1,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssUpright2,
    // eslint-disable-next-line vue/no-unused-components
    U4SonfanBAssUpright3
  }
});

defineOptions({
  name: "U4SonfanB-Assessment"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<!-- 排版完成 -->
<template>
  <div
    name="U4SonfanB-Assessment-dashboard"
    class="flex flex-col justify-center items-center h-[775px] rounded-lg"
  >
    <div name="U4SonfanB-AssUpleft" class="flex w-full h-3/4 rounded-lg p-1">
      <!-- Up 内容 -->
      <U4SonfanBAssUpleft />
      <div
        name="U4SonfanB-AssUpleft-right"
        class="flex basis-1/4 flex-col justify-center items-center h-full rounded-lg"
      >
        <!-- 上半部分右侧内容 -->
        <div
          name="U4SonfanB-AssUpright1"
          class="flex basis-5/12 justify-center items-center w-full bg-white rounded-lg relative"
        >
          <!-- 实时状态评价 -->
          <U4SonfanBAssUpright1 />
        </div>
        <div
          name="U4SonfanB-AssUpright2"
          class="flex basis-4/12 justify-center items-center w-full bg-white rounded-lg mt-1"
        >
          <!-- 各部件健康度 -->
          <U4SonfanBAssUpright2 />
        </div>
        <div
          name="U4SonfanB-AssUpright3"
          class="grid grid-cols-2 gap-0.5 basis-3/12 justify-center items-center w-full rounded-lg mt-0.5"
        >
          <!-- 设备铭牌基本信息 -->
          <U4SonfanBAssUpright3 />
        </div>
      </div>
    </div>
    <div name="U4SonfanB-AssDown" class="flex w-full h-1/4 rounded-lg mt-0 p-1">
      <!-- Down 内容 -->
      <div
        ref="U4SonfanBAssDown1"
        class="down-content1 basis-1/2 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="
          transition: width 0.3s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
          position: relative;
        "
      >
        <!-- 频率曲线图，横轴为时间，纵轴为幅值，通频、基频、半频 -->
        <U4SonfanBAssDown1 />
      </div>
      <div
        name="U4SonfanB-AssDown2"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，一倍、二倍频谱 -->
        <U4SonfanBAssDown2 />
      </div>
      <div
        name="U4SonfanB-AssDown3"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，FFT、包络谱 -->
        <U4SonfanBAssDown3 />
      </div>
    </div>
  </div>
</template>
