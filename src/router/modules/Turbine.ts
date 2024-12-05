export default {
  path: "/Turbine",
  redirect: "/Turbine/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:pump",
    // showLink: false,
    title: "汽轮机运行状态",
    rank: 5
  },
  children: [
    {
      path: "/Turbine/Turbine-1",
      name: "Turbine-1",
      component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
      meta: {
        title: "状态评估"
      }
    },
    {
      path: "/Turbine/Turbine-2",
      name: "Turbine-2",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
      meta: {
        title: "故障诊断"
      }
    },
    {
      path: "/Turbine/Turbine-3",
      name: "Turbine-3",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
      meta: {
        title: "劣化趋势"
      }
    }
  ]
} satisfies RouteConfigsTable;