<template>
  <div class="el-table-container w-full h-full">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="组件名称" width="160" />
      <el-table-column prop="name" label="健康度" width="100" />
      <el-table-column prop="address" label="健康度权重" />
    </el-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const tableData = ref([
        // {
        //   date: '风机轴承1#',
        //   name: '95',
        //   address: '30%',
        // },
        // {
        //   date: '风机轴承2#',
        //   name: '92',
        //   address: '30%',
        // },
        {
          date: '驱动端轴承',
          name: '98',
          address: '20%',
        },
        {
          date: '非驱动端轴承',
          name: '96',
          address: '20%',
        },
      ]);

      return {
        tableData
      };
    }
  });
</script>

<style>
  .el-table-container {
    /* 样式调整，确保表格在容器中正确显示 */
    padding: 20px;
    box-sizing: border-box;
  }
</style>
