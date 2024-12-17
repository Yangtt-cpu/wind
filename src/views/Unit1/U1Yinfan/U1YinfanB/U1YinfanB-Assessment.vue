<script setup lang="ts">
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";
import { defineComponent } from "vue";
import U1YinfanBAssDown1 from "./components/U1YinfanB-Assessment/U1YinfanB-AssDown1.vue";
import U1YinfanBAssUpleft from "./components/U1YinfanB-Assessment/U1YinfanB-AssUpleft.vue";
import U1YinfanBAssDown2 from "./components/U1YinfanB-Assessment/U1YinfanB-AssDown2.vue";
import U1YinfanBAssDown3 from "./components/U1YinfanB-Assessment/U1YinfanB-AssDown3.vue";
import U1YinfanBAssUpright1 from "./components/U1YinfanB-Assessment/U1YinfanB-AssUpright1.vue";
import U1YinfanBAssUpright2 from "./components/U1YinfanB-Assessment/U1YinfanB-AssUpright2.vue";
import U1YinfanBAssUpright3 from "./components/U1YinfanB-Assessment/U1YinfanB-AssUpright3.vue";

//各组件的定义
defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssDown1,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssDown2,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssUpleft,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssDown3,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssUpright1,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssUpright2,
    // eslint-disable-next-line vue/no-unused-components
    U1YinfanBAssUpright3
  }
});

defineOptions({
  name: "U1YinfanB-Assessment"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<!-- 排版完成 -->
<template>
  <div
    name="U1YinfanB-Assessment-dashboard"
    class="flex flex-col justify-center items-center h-[775px] rounded-lg"
  >
    <div name="U1YinfanB-AssUpleft" class="flex w-full h-3/4 rounded-lg p-1">
      <!-- Up 内容 -->
      <U1YinfanBAssUpleft />
      <div
        name="U1YinfanB-AssUpleft-right"
        class="flex basis-1/4 flex-col justify-center items-center h-full rounded-lg"
      >
        <!-- 上半部分右侧内容 -->
        <div
          name="U1YinfanB-AssUpright1"
          class="flex basis-5/12 justify-center items-center w-full bg-white rounded-lg relative"
        >
          <!-- 实时状态评价 -->
          <U1YinfanBAssUpright1 />
        </div>
        <div
          name="U1YinfanB-AssUpright2"
          class="flex basis-4/12 justify-center items-center w-full bg-white rounded-lg mt-1"
        >
          <!-- 各部件健康度 -->
          <U1YinfanBAssUpright2 />
        </div>
        <div
          name="U1YinfanB-AssUpright3"
          class="grid grid-cols-2 gap-0.5 basis-3/12 justify-center items-center w-full rounded-lg mt-0.5"
        >
          <!-- 设备铭牌基本信息 -->
          <U1YinfanBAssUpright3 />
        </div>
      </div>
    </div>
    <div name="U1YinfanB-AssDown" class="flex w-full h-1/4 rounded-lg mt-0 p-1">
      <!-- Down 内容 -->
      <div
        ref="U1YinfanBAssDown1"
        class="down-content1 basis-1/2 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="
          transition: width 0.3s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
          position: relative;
        "
      >
        <!-- 频率曲线图，横轴为时间，纵轴为幅值，通频、基频、半频 -->
        <U1YinfanBAssDown1 />
      </div>
      <div
        name="U1YinfanB-AssDown2"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，一倍、二倍频谱 -->
        <U1YinfanBAssDown2 />
      </div>
      <div
        name="U1YinfanB-AssDown3"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，FFT、包络谱 -->
        <U1YinfanBAssDown3 />
      </div>
    </div>
  </div>
</template>
