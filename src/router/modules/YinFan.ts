export default {
  path: "/YinFan",
  redirect: "/YinFan/YinFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-1",
    // showLink: false,
    title: "引风机A",
    rank: 1
  },
  children: [
    {
      path: "/YinFan/YinFan-Assessment",
      name: "YinFan-Assessment",
      component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
      meta: {
        title: "设备运行状态评估"
      }
    },
    {
      path: "/YinFan/YinFan-FaultDiagnosis",
      name: "YinFan-FaultDiagnosis",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
      meta: {
        title: "故障诊断"
      }
    },
    {
      path: "/YinFan/YinFan-DeteriorationTrend",
      name: "YinFan-DeteriorationTrend",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
      meta: {
        title: "劣化趋势"
      }
    }
  ]
} satisfies RouteConfigsTable;
