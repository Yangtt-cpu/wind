<template>
  <div class="flex flex-col items-center  h-[700px]">
    <h1 class="text-center text-4xl font-bold">欢迎进入智慧预警系统</h1>
    <div name="dashboard" class="bg-white rounded-lg shadow-lg p-8 my-4 flex justify-between w-full ">
      <router-link to="/PrimaryFan/PrimaryFan-Assessment">
        <div name="card1" class="bg-red-600 h-[550px] w-[350px] rounded-lg shadow-lg p-8 m-4 duration-300 hover:scale-105 ">
          一次风机
        </div>
      </router-link>
      <router-link to="/YinFan">
        <div name="card2" class="bg-blue-400 h-[550px] w-[350px] rounded-lg shadow-lg p-8 m-4 duration-300 hover:scale-105 ">
          引风机
        </div>
      </router-link>
      <router-link to="/SongFan">
        <div name="card3" class="bg-green-600 h-[550px] w-[350px] rounded-lg shadow-lg p-8 m-4 duration-300 hover:scale-105 ">
          送风机
        </div>
      </router-link>
    </div>
  </div>
</template>
