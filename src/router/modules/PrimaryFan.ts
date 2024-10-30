export default {
  path: "/PrimaryFan",
  redirect: "/PrimaryFan/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-3",
    // showLink: false,
    title: "一次风机A",
    rank: 3
  },
  children: [
    {
      path: "/PrimaryFan/PrimaryFan-Assessment",
      name: "PrimaryFan-Assessment",
      component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
      meta: {
        title: "设备运行状态评估"
      }
    },
    {
      path: "/fengji/fengji-2",
      name: "fengji-2",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
      meta: {
        title: "故障诊断"
      }
    },
    {
      path: "/fengji/fengji-3",
      name: "fengji-3",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
      meta: {
        title: "劣化趋势"
      }
    }
  ]
} satisfies RouteConfigsTable;
