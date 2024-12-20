<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import U4SonfanBDetDown from "./components/U4SonfanB-Deterioration/U4SonfanB-DetDown.vue";
import U4SonfanBDetUp1 from "./components/U4SonfanB-Deterioration/U4SonfanB-DetUp1.vue";
import U4SonfanBDetUp2 from "./components/U4SonfanB-Deterioration/U4SonfanB-DetUp2.vue";
import U4SonfanBDetUp3 from "./components/U4SonfanB-Deterioration/U4SonfanB-DetUp3.vue";

//各组件的定义
defineComponent({
  components: {
    U4SonfanBDetDown,
    U4SonfanBDetUp1,
    U4SonfanBDetUp2,
    U4SonfanBDetUp3
  }
});

defineOptions({
  name: "U4SonfanB-Deterioration"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<template>
  <div name="U4SonfanB-Deterioration" class="flex flex-col h-[775px] p-1">
    <div class="flex basis-1/3 h-full rounded-lg">
      <div
        class="basis-5/12 bg-white h-full rounded-lg mr-2 shadow-si grid grid-cols-2 gap-4 p-3"
      >
        <U4SonfanBDetUp1 />
      </div>
      <div
        class="flex flex-col items-center basis-3/12 bg-white h-full rounded-lg mr-2 shadow-si"
      >
        <U4SonfanBDetUp2 />
      </div>
      <div class="flex basis-4/12 bg-white h-full rounded-lg shadow-si">
        <U4SonfanBDetUp3 />
      </div>
    </div>

    <div
      class="flex basis-2/3 bg-white h-full rounded-lg shadow-si mt-2 flex-col"
    >
      <div class="flex items-center mt-2 ml-3">
        <svg
          t="1712909891541"
          class="icon"
          viewBox="0 0 1194 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="19475"
          width="30"
          height="30"
        >
          <path
            d="M625.084457 88.862453a346.135265 346.135265 0 0 1 470.306004 9.953566 329.214203 329.214203 0 0 1 0 470.803683L654.447477 1000.36028a80.126208 80.126208 0 0 1-112.972977 0L191.855487 658.952959a39.067747 39.067747 0 0 1 0-55.242293 40.063104 40.063104 0 0 1 56.237649 0L597.214471 945.117988l441.938341-431.487096a251.327547 251.327547 0 0 0 0-359.323741 265.760218 265.760218 0 0 0-361.563294-6.967496L597.214471 215.521583l-24.883915-22.146684-55.491132-46.781762a265.511379 265.511379 0 0 0-360.567937 5.723301 252.074065 252.074065 0 0 0-76.64246 180.657227 39.565426 39.565426 0 0 1-39.814264 39.316586A39.565426 39.565426 0 0 1 0.000498 332.973665a330.20956 330.20956 0 0 1 99.535662-236.894876 345.886426 345.886426 0 0 1 469.310647-8.460532l28.118825 24.883916 28.118825-23.63972z m-304.579127 423.026565H40.312441a39.441006 39.441006 0 1 1 0-78.882013h243.115855l161.496612-190.113114L502.655592 497.705186l35.832838-65.942376H796.285796a39.441006 39.441006 0 1 1 0 78.882012h-210.269087l-114.466011 211.264443-69.426125-307.316357z"
            p-id="19476"
            fill="#1296db"
          />
        </svg>
        <px
          class="font-bold ml-3"
          style="
            font-family: &quot;STZhongsong&quot;, sans-serif;
            font-size: 20px;
          "
        >
          整体设备/部件 劣化趋势曲线
        </px>
      </div>
      <div>
        <U4SonfanBDetDown />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shadow-si {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px;
}
</style>
