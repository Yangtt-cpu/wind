// export default {
//   path: "/beng",
//   redirect: "/beng/PrimaryFan-Assessment",
//   meta: {
//     icon: "mdi:pump",
//     // showLink: false,
//     title: "风机D",
//     rank: 4
//   },
//   children: [
//     {
//       path: "/beng/PrimaryFan-Assessment",
//       name: "beng-Assessment",
//       component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
//       meta: {
//         title: "设备运行状态评估"
//       }
//     },
//     {
//       path: "/beng/fengji-2",
//       name: "beng-2",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
//       meta: {
//         title: "故障诊断"
//       }
//     },
//     {
//       path: "/beng/fengji-3",
//       name: "beng-3",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
//       meta: {
//         title: "劣化趋势"
//       }
//     }
//   ]
// } satisfies RouteConfigsTable;

export default {
  path: "/beng",
  redirect: "/beng/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "一号机组",
    rank: 1
  },
  children: [
    {
      path: "/beng/menu1",
      meta: {
        title: "一次风机",
        rank: 1
      },
      name: "Menu1",
      children: [
        {
          path: "/beng/menu1/menu1-1",
          meta: {
            title: "A",
            rank: 1
          },
          name: "Menu1-1",
          children: [
            {
              path: "/beng/menu1/menu1-1/menu1-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-1-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu1/menu1-1/menu1-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu1/menu1-1/menu1-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu1-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/beng/menu1/menu1-1",
          meta: {
            title: "B",
            rank: 2
          },
          name: "Menu1-1",
          children: [
            {
              path: "/beng/menu1/menu1-1/menu1-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-2-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu1/menu1-1/menu1-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu1/menu1-1/menu1-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu1-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },

    {
      path: "/beng/menu2",
      meta: {
        title: "送风机",
        rank: 2
      },
      name: "Menu3",
      children: [
        {
          path: "/beng/menu2/menu2-1",
          meta: {
            title: "A",
            rank: 1
          },
          name: "Menu2-1",
          children: [
            {
              path: "/beng/menu2/menu2-1/menu2-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu2-1-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu2/menu2-1/menu2-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu2/menu2-1/menu2-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu2-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/beng/menu2/menu2-2",
          meta: {
            title: "B",
            rank: 2
          },
          name: "Menu2-2",
          children: [
            {
              path: "/beng/menu2/menu2-2/menu3-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu2-2-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu2/menu2-2/menu2-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu2/menu2-2/menu2-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu2-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
     {
      path: "/beng/menu3",
      meta: {
        title: "引风机",
        rank: 3
      },
      name: "Menu3",
      children: [
        {
          path: "/beng/menu3/menu3-1",
          meta: {
            title: "A",
            rank: 1
          },
          name: "Menu3-1",
          children: [
            {
              path: "/beng/menu3/menu3-1/menu3-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu3-1-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu3/menu3-1/menu3-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu3/menu3-1/menu3-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu3-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/beng/menu3/menu2-2",
          meta: {
            title: "B",
            rank: 2
          },
          name: "Menu3-2",
          children: [
            {
              path: "/beng/menu3/menu3-2/menu3-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu3-2-1",
              meta: {
                title: "设备运行状态评估"
              }
            },
            {
              path: "/beng/menu3/menu3-2/menu3-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu3-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/beng/menu3/menu3-2/menu3-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu3-2-3",
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