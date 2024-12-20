<template>
  <div
    name="Up-left"
    class="basis-3/4 flex justify-center items-center rounded-lg bg-white mr-1.5"
  >
    <div class="relative h-full w-full rounded-lg bg-blue-50">
      <img
        name="Up-left-img"
        src="/src/assets/PrimaryFan/Assessment/fengji2a.png"
        alt=""
        class="object-cover w-full h-full rounded-lg"
      />
      
      <div
        style="position: absolute; top: 20px; left: 31px; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 18px;">
        <span style="margin-right: 9px">前轴承温度</span>
        <span style="margin-right: 9px">后轴承温度</span>
        <span>推力轴承温度</span>
      </div>

      <div
        style="position: absolute; top: 50px; left: 55px; color: rgb(0, 0, 0); font-weight: bold; font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>

      <div
        style="position: absolute; top: 50px; left: 150px; color: rgb(0, 0, 0); font-weight: bold; font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>

      <div
        style="position: absolute; top: 50px; left: 250px; color: rgb(0, 0, 0); font-weight: bold; font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
        <div><span>62.8℃</span></div>
      </div>

      <div
        style="position: absolute; top: 450px; left: 70px; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div style="margin-bottom: 10px"><span>非驱动端轴承</span></div>
        <div>
          <span style="margin-right: 30px">X轴位移</span>
          <span style="font-weight: bold">queryPredictPass2mm/s</span>
        </div>
        <div>
          <span style="margin-right: 30px">Y轴位移</span>
          <span style="font-weight: bold">queryPredictPass2mm/s</span>
        </div>
      </div>

      <div
        style="position: absolute; top: 440px; left: 670px; color: rgb(0, 0, 0); font-family: '华文中宋', sans-serif; font-size: 18px;">
        <div style="margin-bottom: 10px"><span>驱动端轴承</span></div>
        <div>
          <span style="margin-right: 40px">X轴位移</span>
          <span style="font-weight: bold">queryPredictPass2mm/s</span>
        </div>
        <div>
          <span style="margin-right: 40px">Y轴位移</span>
          <span style="font-weight: bold">queryPredictPass2mm/s</span>
        </div>
      </div>

      <!-- 修改 SVG 标签，确保没有非法字符 -->
      <svg style="position: absolute; top: 75px; left: 800px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <path d="M85.333333 810.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h42.666667v-192c0-187.733333 153.6-341.333333 341.333333-341.333333s341.333333 153.6 341.333333 341.333333v192h42.666667c23.466667 0 42.666667 19.2 42.666667 42.666667v149.333333c0 23.466667-19.2 42.666667-42.666667 42.666667H128c-23.466667 0-42.666667-19.2-42.666667-42.666667v-149.333333z m85.333334 42.666666v64h682.666666v-64H170.666667z m85.333333-277.333333v192h512v-192c0-140.8-115.2-256-256-256s-256 115.2-256 256zM469.333333 64v85.333333c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V64c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667M119.466667 183.466667c-17.066667 17.066667-17.066667 42.666667 0 59.733333l59.733333 59.733333c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866666-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333L181.333333 183.466667c-17.066667-17.066667-44.8-17.066667-61.866666 0M844.8 183.466667l-59.733333 59.733333c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8 10.666667 0 21.333333-4.266667 29.866667-12.8l59.733333-59.733333c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-44.8-17.066667-59.733333 0" fill="#d81e06"></path>
        <path d="M648.533333 439.466667c-19.2-19.2-44.8-34.133333-70.4-44.8-21.333333-7.466667-44.8-12.8-70.4-12.8s-49.066667 5.333333-70.4 12.8c-25.6 10.666667-51.2 25.6-70.4 44.8s-34.133333 44.8-44.8 70.4c-7.466667 21.333333-12.8 44.8-12.8 70.4s5.333333 49.066667 12.8 70.4c10.666667 25.6 25.6 51.2 44.8 70.4s44.8 34.133333 70.4 44.8c21.333333 7.466667 44.8 12.8 70.4 12.8s49.066667-5.333333 70.4-12.8c25.6-10.666667 51.2-25.6 70.4-44.8s34.133333-44.8 44.8-70.4c7.466667-21.333333 12.8-44.8 12.8-70.4s-5.333333-49.066667-12.8-70.4c-10.666667-25.6-25.6-51.2-44.8-70.4zM643.2 575.466667c-25.6 25.6-60.8 25.6-85.333333 0-25.6-25.6-25.6-60.8 0-85.333334s60.8-25.6 85.333333 0c25.6 25.6 25.6 60.8 0 85.333334" fill="#d81e06"></path>
      </svg>

      <!-- 风机状态 -->
      <div
        style="position: absolute; top: 75px; left: 620px; color: rgb(255, 255, 255); font-family: '华文中宋', sans-serif; font-size: 25px;">
        <div style="margin-bottom: 10px"><span>风机状态：</span></div>
      </div>
      <div
        style="position: absolute; top: 75px; left: 740px; color: rgb(178, 0, 0); font-family: '华文中宋', sans-serif; font-size: 25px;">
        <div style="margin-bottom: 10px">
          <span>queryAlert</span>
        </div>
      </div>
    </div>
  </div>
</template>
