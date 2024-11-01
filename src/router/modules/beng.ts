export default {
  path: "/beng",
  redirect: "/beng/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:pump",
    // showLink: false,
    title: "循环泵",
    rank: 4
  },
  children: [
    {
      path: "/beng/PrimaryFan-Assessment",
      name: "beng-Assessment",
      component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
      meta: {
        title: "设备运行状态评估"
      }
    },
    {
      path: "/beng/fengji-2",
      name: "beng-2",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
      meta: {
        title: "故障诊断"
      }
    },
    {
      path: "/beng/fengji-3",
      name: "beng-3",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
      meta: {
        title: "劣化趋势"
      }
    }
  ]
} satisfies RouteConfigsTable;
