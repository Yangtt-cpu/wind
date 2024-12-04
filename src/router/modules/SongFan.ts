// export default {
//   path: "/SongFan",
//   redirect: "/SongFan/SongFan-Assessment",
//   meta: {
//     icon: "mdi:fan-speed-2",
//     // showLink: false,
//     title: "风机B",
//     rank: 2
//   },
//   children: [
//     {
//       path: "/SongFan/SongFan-Assessment",
//       name: "SongFan-Assessment",
//       component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
//       meta: {
//         title: "设备运行状态评估"
//       }
//     },
//     {
//       path: "/SongFan/SongFan-FaultDiagnosis",
//       name: "SongFan-FaultDiagnosis",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
//       meta: {
//         title: "故障诊断"
//       }
//     },
//     {
//       path: "/SongFan/SongFan-DeteriorationTrend",
//       name: "SongFan-DeteriorationTrend",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
//       meta: {
//         title: "劣化趋势"
//       }
//     }
//   ]
// } satisfies RouteConfigsTable;

export default {
  path: "/SongFan",
  redirect: "/SongFan/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "一号机组",
    rank: 1
  },
  children: [
    {
      path: "/SongFan/menu1",
      meta: {
        title: "一次风机"
      },
      naem: 'Menu1',
      children: [
        {
          path: "/SongFan/menu1/menu1-1",
          meta: {
            title: "A"
          },
          naem: 'Menu1-1',
          children: [
            {
              path: "/SongFan/menu1/menu1-1/menu1-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-1-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/SongFan/menu1/menu1-1/menu1-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/SongFan/menu1/menu1-1/menu1-1-3",
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