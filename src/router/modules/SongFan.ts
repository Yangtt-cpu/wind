export default {
  path: "/SongFan",
  redirect: "/SongFan/SongFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-2",
    // showLink: false,
    title: "送风机A",
    rank: 2
  },
  children: [
    {
      path: "/SongFan/SongFan-Assessment",
      name: "SongFan-Assessment",
      component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
      meta: {
        title: "设备运行状态评估"
      }
    },
    {
      path: "/SongFan/SongFan-FaultDiagnosis",
      name: "SongFan-FaultDiagnosis",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
      meta: {
        title: "故障诊断"
      }
    },
    {
      path: "/SongFan/SongFan-DeteriorationTrend",
      name: "SongFan-DeteriorationTrend",
      component: () =>
        import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
      meta: {
        title: "劣化趋势"
      }
    }
  ]
} satisfies RouteConfigsTable;
