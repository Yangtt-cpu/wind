<script setup lang="ts">
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";
import { defineComponent } from "vue";
import TurbineAssDown1 from "./components/Turbine-Assessment/Turbine-AssDown1.vue";
import TurbineAssDown2 from "./components/Turbine-Assessment/Turbine-AssDown2.vue";
import TurbineAssDown3 from "./components/Turbine-Assessment/Turbine-AssDown3.vue";
import TurbineAssUpleft from "./components/Turbine-Assessment/Turbine-AssUpleft.vue";
import TurbineAssUpright1 from "./components/Turbine-Assessment/Turbine-AssUpright1.vue";
import TurbineAssUpright2 from "./components/Turbine-Assessment/Turbine-AssUpright2.vue";
import TurbineAssUpright3 from "./components/Turbine-Assessment/Turbine-AssUpright3.vue";

//各组件的定义
defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssDown1,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssDown2,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssDown3,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssUpleft,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssUpright1,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssUpright2,
    // eslint-disable-next-line vue/no-unused-components
    TurbineAssUpright3
  }
});

defineOptions({
  name: "Turbine-Assessment"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<!-- 排版完成 -->
<template>
  <div
    name="Turbine-Assessment-dashboard"
    class="flex flex-col justify-center items-center h-[775px] rounded-lg"
  >
    <div name="Turbine-AssUpleft" class="flex w-full h-3/4 rounded-lg p-1">
      <!-- Up 内容 -->
      <TurbineAssUpleft />
      <div
        name="Turbine-AssUpleft-right"
        class="flex basis-1/4 flex-col justify-center items-center h-full rounded-lg"
      >
        <!-- 上半部分右侧内容 -->
        <div
          name="Turbine-AssUpright1"
          class="flex basis-5/12 justify-center items-center w-full bg-white rounded-lg relative"
        >
          <!-- 实时状态评价 -->
          <TurbineAssUpright1 />
        </div>
        <div
          name="Turbine-AssUpright2"
          class="flex basis-4/12 justify-center items-center w-full bg-white rounded-lg mt-1"
        >
          <!-- 各部件健康度 -->
          <TurbineAssUpright2 />
        </div>
        <div
          name="Turbine-AssUpright3"
          class="grid grid-cols-2 gap-0.5 basis-3/12 justify-center items-center w-full rounded-lg mt-0.5"
        >
          <!-- 设备铭牌基本信息 -->
          <TurbineAssUpright3 />
        </div>
      </div>
    </div>
    <div name="Turbine-AssDown" class="flex w-full h-1/4 rounded-lg mt-0 p-1">
      <!-- Down 内容 -->
      <div
        ref="Turbine-AssDown1"
        class="down-content1 basis-1/2 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="
          transition: width 0.3s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
          position: relative;
        "
      >
        <!-- 频率曲线图，横轴为时间，纵轴为幅值，通频、基频、半频 -->
        <TurbineAssDown1 />
      </div>
      <div
        name="Turbine-AssDown2"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，一倍、二倍频谱 -->
        <TurbineAssDown2 />
      </div>
      <div
        name="Turbine-AssDown3"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，FFT、包络谱 -->
        <TurbineAssDown3 />
      </div>
    </div>
  </div>
</template>
