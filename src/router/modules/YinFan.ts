// export default {
//   path: "/YinFan",
//   redirect: "/YinFan/YinFan-Assessment",
//   meta: {
//     icon: "mdi:fan-speed-1",
//     // showLink: false,
//     title: "风机A",
//     rank: 1
//   },
//   children: [
//     {
//       path: "/YinFan/YinFan-Assessment",
//       name: "YinFan-Assessment",
//       component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
//       meta: {
//         title: "设备运行状态评估"
//       }
//     },
//     {
//       path: "/YinFan/YinFan-FaultDiagnosis",
//       name: "YinFan-FaultDiagnosis",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
//       meta: {
//         title: "故障诊断"
//       }
//     },
//     {
//       path: "/YinFan/YinFan-DeteriorationTrend",
//       name: "YinFan-DeteriorationTrend",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
//       meta: {
//         title: "劣化趋势"
//       }
//     }
//   ]
// } satisfies RouteConfigsTable;

export default {
  path: "/YinFan",
  redirect: "/YinFan/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "一号机组",
    rank: 1
  },
  children: [
    {
      path: "/YinFan/menu1",
      meta: {
        title: "一次风机"
            rank: 1,
      },
      name: 'Menu1',
      children: [
        {
          path: "/YinFan/menu1/menu1-1",
          meta: {
            title: "A",
            rank: 1,
          },
          name: 'Menu1-1',
          children: [
            {
              path: "/YinFan/menu1/menu1-1/menu1-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-1-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/YinFan/menu1/menu1-1/menu1-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/YinFan/menu1/menu1-1/menu1-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu1-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;
