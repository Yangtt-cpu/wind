<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import U4YinfanBFauLeft1 from "./components/U4YinfanB-Faultdiagnosis/U4YinfanB-FauLeft1.vue";
import U4YinfanBFauLeft2 from "./components/U4YinfanB-Faultdiagnosis/U4YinfanB-FauLeft2.vue";
import U4YinfanBFauLeft3 from "./components/U4YinfanB-Faultdiagnosis/U4YinfanB-FauLeft3.vue";
import U4YinfanBFauRight from "./components/U4YinfanB-Faultdiagnosis/U4YinfanB-FauRight.vue";

//各组件的定义
defineComponent({
  components: {
    U4YinfanBFauLeft1,
    U4YinfanBFauLeft2,
    // eslint-disable-next-line vue/no-unused-components
    U4YinfanBFauLeft3,
    // eslint-disable-next-line vue/no-unused-components
    U4YinfanBFauRight
  }
});

defineOptions({
  name: "U4YinfanB-Faultdiagnosis"
});

// 建立一个路由实例，方便后续跳转
// 这里的路由实例是从 @/router/index.ts 导出的
const router = useRouter();
</script>

<!-- 排版完成 -->
<template>
  <div name="U4YinfanB-Faultdiagnosis" class="flex h-[775px] p-1">
    <div
      name="U4YinfanBFau-Left"
      class="basis-5/12 flex flex-col justify-center items-center h-full rounded-lg mr-2"
    >
      <div
        name="U4YinfanBFau-Left"
        class="basis-1/4 w-full rounded-lg overflow-hidden"
      >
        <img
          name="U4YinfanBFau-Leftbg"
          src="/src/assets/PrimaryFan/Assessment/guzhang.png"
          alt=""
          class="w-full h-full object-cover shadow-pic"
        />
      </div>
      <div
        name="U4YinfanBFau-Downleft"
        class="basis-3/4 bg-white w-full h-full mt-2 flex rounded-lg flex-col shadow-si"
      >
        <div class="flex items-center mt-1 ml-3">
          <svg
            t="1712745639850"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6415"
            width="25"
            height="35"
          >
            <path
              d="M614.4 364.8h172.8c25.6 0 38.4-19.2 38.4-38.4s-19.2-38.4-38.4-38.4H614.4c-25.6 0-38.4 19.2-38.4 38.4s12.8 38.4 38.4 38.4zM460.8 364.8c12.8 0 19.2-6.4 32-12.8 6.4-6.4 12.8-19.2 12.8-32v-19.2c0-6.4-6.4-6.4-6.4-12.8-12.8-12.8-44.8-12.8-57.6 0-19.2 19.2-25.6 25.6-25.6 38.4 0 12.8 6.4 19.2 12.8 32 6.4 6.4 19.2 6.4 32 6.4zM428.8 512c6.4 6.4 19.2 12.8 32 12.8h19.2c6.4 0 6.4-6.4 6.4-12.8 6.4-6.4 12.8-19.2 12.8-25.6s-6.4-25.6-12.8-32c0-6.4-6.4-6.4-12.8-6.4-12.8-6.4-19.2-6.4-32 0-6.4 0-6.4 0-12.8 6.4s-6.4 6.4-6.4 12.8v19.2c-6.4 6.4 0 19.2 6.4 25.6zM614.4 524.8h172.8c25.6 0 38.4-19.2 38.4-38.4s-19.2-38.4-38.4-38.4H614.4c-25.6 0-38.4 19.2-38.4 38.4s12.8 38.4 38.4 38.4z"
              fill="#1296db"
              p-id="6416"
            ></path>
            <path
              d="M902.4 57.6H320c-32 0-64 25.6-64 64V620.8h83.2V140.8h544v640c0 32-19.2 64-44.8 83.2-6.4 6.4-19.2 12.8-32 12.8h-25.6c-57.6 0-102.4-44.8-102.4-102.4v-51.2c0-38.4-32-64-64-64H121.6c-38.4 0-64 32-64 64v51.2c0 102.4 83.2 185.6 185.6 185.6h537.6c102.4 0 185.6-83.2 185.6-185.6V121.6c0-38.4-25.6-64-64-64zM371.2 883.2h-128c-57.6 0-102.4-44.8-102.4-102.4v-32h460.8v32c0 38.4 12.8 70.4 32 102.4H371.2z"
              fill="#1296db"
              p-id="6417"
            ></path>
          </svg>
          <p
            class="font-bold"
            style="
              font-family: &quot;华文中宋&quot;, sans-serif;
              font-size: 18px;
            "
          >
            设备运行参数异常情况
          </p>
        </div>
        <div class="flex flex-col h-full px-2.5 mt-0 mb-3">
          <div class="basis-1/3 bg-white w-full rounded-lg shadow-si">
            <U4YinfanBFauLeft1 />
          </div>
          <div class="basis-1/3 bg-white w-full rounded-lg shadow-si mt-2">
            <U4YinfanBFauLeft2 />
          </div>
          <div class="basis-1/3 bg-white w-full rounded-lg shadow-si mt-2">
            <U4YinfanBFauLeft3 />
          </div>
        </div>
      </div>
    </div>
    <div
      name="right"
      class="basis-7/12 bg-white flex flex-col justify-center items-center shadow-si rounded-lg"
    >
      <U4YinfanBFauRight />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 20px;
  color: #1296db;
  margin-right: 10px;
}

.shadow-si {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px;
}
</style>
