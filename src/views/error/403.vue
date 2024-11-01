<!-- <script setup lang="ts">
import { useRouter } from "vue-router";
import noAccess from "@/assets/status/403.svg?component";

defineOptions({
  name: "403"
});

const router = useRouter();
</script>

<template>
  <div class="flex justify-center items-center h-[640px]">
    <noAccess />
    <div class="ml-12">
      <p
        v-motion
        class="font-medium text-4xl mb-4 dark:text-white"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80
          }
        }"
      >
        403
      </p>
      <p
        v-motion
        class="mb-4 text-gray-500"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 120
          }
        }"
      >
        抱歉，你无权访问该页面
      </p>
      <el-button
        v-motion
        type="primary"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 160
          }
        }"
        @click="router.push('/')"
      >
        返回首页
      </el-button>
    </div>
  </div>
</template> -->


<template>
  <div name="table" class="flex-col w-full rounded-lg p-2">
    <el-table :data="filteredData" stripe row-class-name="custom-row" style="width: 100%">
      <el-table-column prop="ID" label="序号" sortable width="80" />
      <el-table-column prop="Device_Name" label="设备名称" />
      <el-table-column prop="Faulty_parts" label="故障部件" />
      <el-table-column prop="Fault_type" label="故障类型"/>
      <el-table-column label="故障原因" width="400">
        <template #default="scope">
          <div v-html="scope.row.Cause_issue"></div>
        </template>
      </el-table-column>
      <el-table-column prop="Operation_Instructions" label="操作指导" width="400" />
      <el-table-column prop="Diagnosis_time" label="诊断时间" width="160"/>
    </el-table>
    <div class="flex justify-center mt-1">
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import noAccess from "@/assets/status/403.svg?component";

defineOptions({
  name: "403"
});

const tableData = ref([
  {
    ID: '1',
    Device_Name: '汽轮发电机A',
    Faulty_parts: '发电机',
    Fault_type: '轴不平衡',
    Cause_issue: '1.制造过程中工艺和加工存在问题。<br>' +
      '2.在使用过程中轴受到过大的瞬时冲击载荷的作用，产生弯曲或永久变形。<br>' +
      '3.长期在较大的偏载工况下工作，由于疲劳作用使滚动轴承内、外圈和滚动体出现点蚀和疲劳剥落，导致轴系失去平衡。<br>',
    Operation_Instructions: '密切关注振动监测系统和主轴不平衡报警信息，使用专业的动态平衡调整设备和技术，对主轴进行平衡调整。',
    Diagnosis_time: '2022-04-11,16:30:23',
  },
  {
    ID: '2',
    Device_Name: '汽轮发电机B',
    Faulty_parts: '发电机',
    Fault_type: '轴不对中',
    Cause_issue: '由于装配的条件限制和长时间的运行造成轴不对中。',
    Operation_Instructions: '密切关注振动监测系统和主轴不平衡报警信息，使用专业的轴对中工具对主轴进行调整和校准。',
    Diagnosis_time: '2022-10-19,12:25:03',
  },
  {
    ID: '3',
    Device_Name: '风力发电机C',
    Faulty_parts: '发电机',
    Fault_type: '滚动轴承内圈表面损伤',
    Cause_issue: '滚动轴承旋转时，滚道和滚动体表面既受载荷又相对滚动。由于交变载荷的作用，首先在表面一定深处形成裂纹，继而扩展到使表层形成剥落坑，最后发展到大片剥落。在润滑不良、高速、重载、高温、启动加速度过大等情况下，由于摩擦发热，轴承零件在很短的时间内达到很高的温度，导致表面灼伤或某处表面上的金属黏附到另一表面。',
    Operation_Instructions: '日常需关注主轴轴承温度报警，择机登机检查主轴轴承废油脂中铁屑含量有无异常，油脂有无变色或发黑。',
    Diagnosis_time: '2023-02-06,09:40:36',
  },
  {
    ID: '4',
    Device_Name: '风力发电机D',
    Faulty_parts: '发电机',
    Fault_type: '滚动轴承外圈表面损伤',
    Cause_issue: '滚动轴承旋转时，滚道和滚动体表面既受载荷又相对滚动。由于交变载荷的作用，首先在表面一定深处形成裂纹，继而扩展到使表层形成剥落坑，最后发展到大片剥落。在润滑不良、高速、重载、高温、启动加速度过大等情况下，由于摩擦发热，轴承零件在很短的时间内达到很高的温度，导致表面灼伤或某处表面上的金属黏附到另一表面。',
    Operation_Instructions: '日常需关注主轴轴承温度报警，择机登机检查主轴轴承废油脂中铁屑含量有无异常，油脂有无变色或发黑。',
    Diagnosis_time: '2024-03-12,05:10:08',
  },
  {
    ID: '5',
    Device_Name: '风力发电机A',
    Faulty_parts: '发电机',
    Fault_type: '发电机热弯曲',
    Cause_issue: '1.定子铁芯因产生涡流而发热。<br>' +
      '2.转子局部绕组短路引起的受热不均。<br>' ,
    Operation_Instructions: '密切关注绕组温度和发电机振动情况，采取热处理措施调整弯曲的部件，必要时更换受损部件。\n',
    Diagnosis_time: '2024-07-11,13:25:33',
  },
  {
    ID: '5',
    Device_Name: '风力发电机D',
    Faulty_parts: '发电机',
    Fault_type: '定子偏心',
    Cause_issue: '由于装配的条件限制和长时间的运行造成。',
    Operation_Instructions: '及时监测发电机振动情况，定期进行定子部分动平衡检查。\n',
    Diagnosis_time: '2024-07-11,13:25:33',
  },
]);

const newRecord = ref({
  ID: '',
  Device_Name: '',
  Faulty_parts: '',
  Fault_type: '',
  Cause_issue: '',
  Operation_Instructions: '',
  Diagnosis_time: '',
});

const searchQuery = ref('');

const router = useRouter();

const addRecord = () => {
  if (newRecord.value.ID && newRecord.value.Device_Name) {
    tableData.value.push({ ...newRecord.value });
    newRecord.value = {
      ID: '',
      Device_Name: '',
      Faulty_parts: '',
      Fault_type: '',
      Cause_issue: '',
      Operation_Instructions: '',
      Diagnosis_time: '',
    };
    ElMessage.success('Record added successfully!');
  } else {
    ElMessage.error('Please fill in the required fields!');
  }
};

const filteredData = computed(() => {
  return tableData.value.filter(item =>
    Object.values(item).some(val => val.includes(searchQuery.value))
  );
});
</script>

<style scoped>
.custom-row {
  height: 60px; /* 你可以根据需要调整这个高度 */
}
</style>
