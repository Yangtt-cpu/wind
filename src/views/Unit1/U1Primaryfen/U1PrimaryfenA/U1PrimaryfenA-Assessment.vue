<script setup lang="ts">
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";
import { defineComponent } from "vue";
import Uprightcontent1 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/UpRightcontent-1.vue";
import Uprightcontent2 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/UpRightcontent-2.vue";
import Uprightcontent3 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/UpRightcontent-3.vue";
import DownContent1 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/DownContent1.vue";
import DownContent2 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/DownContent2.vue";
import DownContent3 from "@/views/PrimaryFan/components/PrimaryFan-Assessment/DownContent3.vue";

import U1PrimaryfenAAssDown1 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssDown1.vue";
import U1PrimaryfenAAssUpleft from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssUpleft.vue";
import U1PrimaryfenAAssDown2 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssDown2.vue";
import U1PrimaryfenAAssDown3 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssDown3.vue";
import U1PrimaryfenAAssUpright1 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssUpright1.vue";
import U1PrimaryfenAAssUpright2 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssUpright2.vue";
import U1PrimaryfenAAssUpright3 from "./components/U1PrimaryfenA-Assessment/U1PrimaryfenA-AssUpright3.vue";

//各组件的定义
defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssDown1,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssDown2,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssUpleft,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssDown3,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssUpright1,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssUpright2,
    // eslint-disable-next-line vue/no-unused-components
    U1PrimaryfenAAssUpright3
  }
});

defineOptions({
  name: "U1PrimaryFanA-Assessment"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<!-- 排版完成 -->
<template>
  <div
    name="dashboard"
    class="flex flex-col justify-center items-center h-[775px] rounded-lg"
  >
    <div name="Up" class="flex w-full h-3/4 rounded-lg p-1">
      <!-- Up 内容 -->
      <U1PrimaryfenAAssUpleft />
      <div
        name="Up-right"
        class="flex basis-1/4 flex-col justify-center items-center h-full rounded-lg"
      >
        <!-- 上半部分右侧内容 -->
        <div
          name="Up-right-content1"
          class="flex basis-5/12 justify-center items-center w-full bg-white rounded-lg relative"
        >
          <!-- 实时状态评价 -->
          <U1PrimaryfenAAssUpright1 />
        </div>
        <div
          name="Up-right-content2"
          class="flex basis-4/12 justify-center items-center w-full bg-white rounded-lg mt-1"
        >
          <!-- 各部件健康度 -->
          <U1PrimaryfenAAssUpright2 />
        </div>
        <div
          name="Up-right-content3"
          class="grid grid-cols-2 gap-0.5 basis-3/12 justify-center items-center w-full rounded-lg mt-0.5"
        >
          <!-- 设备铭牌基本信息 -->
          <U1PrimaryfenAAssUpright3 />
        </div>
      </div>
    </div>
    <div name="Down" class="flex w-full h-1/4 rounded-lg mt-0 p-1">
      <!-- Down 内容 -->
      <div
        ref="downContent1"
        class="down-content1 basis-1/2 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="
          transition: width 0.3s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
          position: relative;
        "
      >
        <!-- 频率曲线图，横轴为时间，纵轴为幅值，通频、基频、半频 -->
        <U1PrimaryfenAAssDown1 />
      </div>
      <div
        name="down-content2"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md mr-1"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，一倍、二倍频谱 -->
        <U1PrimaryfenAAssDown2 />
      </div>
      <div
        name="down-content3"
        class="basis-1/4 flex justify-center items-center h-full bg-white rounded-md"
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px"
      >
        <!-- 频谱图，横轴为频率，纵轴为幅值，FFT、包络谱 -->
        <U1PrimaryfenAAssDown3 />
      </div>
    </div>
  </div>
</template>
