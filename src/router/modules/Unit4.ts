export default {
  path: "/Unit4",
  redirect: "/Unit4",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "四号机组运行状态",
    rank: 4
  },
  children: [
    {
      path: "/Unit4/U4Primaryfan",
      meta: {
        title: "一次风机运行状态"
        // rank: 1
      },
      name: "U4Primaryfan",
      children: [
        {
          path: "/Unit4/U4Primaryfan/U4PrimaryfanA",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "U4PrimaryfanA",
          children: [
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanA/U4Primaryfan-Assessment",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanA/U4PrimaryfanA-Assessment.vue"
                ),
              name: "U4PrimaryfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanA/U4PrimaryfanA-FaultDiagnosis",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanA/U4PrimaryfanA-Faultdiagnosis.vue"
                ),
              name: "U4PrimaryfanA-FaultDiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanA/U4PrimaryfanA-Deterioration",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanA/U4PrimaryfanA-Deterioration.vue"
                ),
              name: "U4PrimaryfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/U4Primaryfan/U4PrimaryfanB",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "U4PrimaryfanB",
          children: [
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Assessment",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Assessment.vue"
                ),
              name: "U4PrimaryfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Faultdiagnosis",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Faultdiagnosis.vue"
                ),
              name: "U4PrimaryfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Deterioration",
              component: () =>
                import(
                  "@/views/Unit4/U4Primaryfan/U4PrimaryfanB/U4PrimaryfanB-Deterioration.vue"
                ),
              name: "U4PrimaryfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },

    {
      path: "/Unit4/U4Sonfan",
      meta: {
        title: "送风机"
        // rank: 2
      },
      name: "U4Sonfan",
      children: [
        {
          path: "/Unit4/U4Sonfan/U4SonfanA",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "U4SonfanA",
          children: [
            {
              path: "/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Assessment",
              component: () =>
                import(
                  "@/views/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Assessment.vue"
                ),
              name: "U4SonfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Faultdiagnosis",
              component: () =>
                import("@/views/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Faultdiagnosis.vue"),
              name: "U4SonfanA-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Deterioration",
              component: () =>
                import("@/views/Unit4/U4Sonfan/U4SonfanA/U4SonfanA-Deterioration.vue"),
              name: "U4SonfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/U4Sonfan/U4SonfanB",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "U4SonfanB",
          children: [
            {
              path: "/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Assessment",
              component: () =>
                import("@/views/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Assessment.vue"),
              name: "U4SonfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Faultdiagnosis",
              component: () =>
                import("@/views/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Faultdiagnosis.vue"),
              name: "U4SonfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Deterioration",
              component: () =>
                import("@/views/Unit4/U4Sonfan/U4SonfanB/U4SonfanB-Deterioration.vue"),
              name: "U4SonfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit4/U4Yinfan",
      meta: {
        title: "引风机运行状态"
        // rank: 3
      },
      name: "U4Yinfan",
      children: [
        {
          path: "/Unit4/U4Yinfan/U4YinfanA",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "U4YinfanA",
          children: [
            {
              path: "/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Assessment",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Assessment.vue"),
              name: "U4YinfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Faultdiagnosis",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Faultdiagnosis.vue"),
              name: "U4YinfanA-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Deterioration",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanA/U4YinfanA-Deterioration.vue"),
              name: "U4YinfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/U4Yinfan/U4YinfanB",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "U4YinfanB",
          children: [
            {
              path: "/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Assessment",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Assessment.vue"),
              name: "U4YinfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Faultdiagnosis",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Faultdiagnosis.vue"),
              name: "U4YinfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Deterioration",
              component: () =>
                import("@/views/Unit4/U4Yinfan/U4YinfanB/U4YinfanB-Deterioration.vue"),
              name: "U4YinfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit4/U4Turbine",
      meta: {
        title: "汽轮机运行状态"
      },
      name: "U4Turbine",
      children: [
        {
          path: "/Unit4/U4Turbine/U4Turbine-Assessment",
          component: () =>
            import("@/views/Unit4/U4Turbine/U4Turbine-Assessment.vue"),
          name: "U4Turbine-Assessment",
          meta: {
            title: "状态评估"
          }
        },
        {
          path: "/Unit4/U4Turbine/U4Turbine-Faultdiagnosis",
          component: () =>
            import("@/views/Unit4/U4Turbine/U4Turbine-Faultdiagnosis.vue"),
          name: "U4Turbine-Faultdiagnosis",
          meta: {
            title: "故障诊断"
            //showLink: false
          }
        },
        {
          path: "/Unit4/U4Turbine/U4Turbine-Deterioration",
          component: () =>
            import("@/views/Unit4/U4Turbine/U4Turbine-Deterioration.vue"),
          name: "U4Turbine-Deterioration",
          meta: {
            title: "劣化趋势"
          }
        }
      ]
    },
    {
      path: "/Unit4/U4Circulator",
      meta: {
        title: "循环泵运行状态"
        // rank: 4
      },
      name: "U4Circulator",
      children: [
        {
          path: "/Unit4/U4Circulator/U4CirculatorA",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "U4CirculatorA",
          children: [
            {
              path: "/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-Assessment",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-Assessment.vue"
                ),
              name: "U4CirculatorA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-FaultDiagnosis",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-Faultdiagnosis.vue"
                ),
              name: "U4CirculatorA-FaultDiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-Deterioration",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorA/U4CirculatorA-Deterioration.vue"
                ),
              name: "U4CirculatorA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/U4Circulator/U4CirculatorB",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "U4CirculatorB",
          children: [
            {
              path: "/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Assessment",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Assessment.vue"
                ),
              name: "U4CirculatorB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Faultdiagnosis",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Faultdiagnosis.vue"
                ),
              name: "U4CirculatorB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Deterioration",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorB/U4CirculatorB-Deterioration.vue"
                ),
              name: "U4CirculatorB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/U4Circulator/U4CirculatorC",
          meta: {
            title: "C侧运行状态"
            // rank: 3
          },
          name: "U4CirculatorC",
          children: [
            {
              path: "/Unit4/U4Circulator/U4CirculatorC",
              component: () =>
                import(
                  "@/views/Unit4/U4Circulator/U4CirculatorC/U4CirculatorC-Assessment.vue"
                ),
              name: "U4CirculatorC-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu4/menu4-2/menu4-3-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu4-3-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu4/menu4-3/menu4-3-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu4-3-3",
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
