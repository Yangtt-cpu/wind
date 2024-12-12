export default {
  path: "/Unit1",
  redirect: "/Unit1",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "一号机组运行状态",
    rank: 1
  },
  children: [
    {
      path: "/Unit1/U1Primaryfan",
      meta: {
        title: "一次风机运行状态"
        //rank: 1
      },
      name: "U1Primaryfan",
      children: [
        {
          path: "/Unit1/U1Primaryfan/U1PrimaryfanA",
          meta: {
            title: "A侧运行状态"
            //rank: 1
          },
          name: "U1PrimaryfanA",
          children: [
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-Assessment",
              component: () =>
                import(
                  "@/views/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-Assessment.vue"
                ),
              name: "U1PrimaryfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-FaultDiagnosis",
              component: () =>
                import(
                  "@/views/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-Faultdiagnosis.vue"
                ),
              name: "U1PrimaryfanA-Faultdiagnosis",
              meta: {
                title: "故障诊断"
                //showLink: false
              }
            },
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-Deterioration",
              component: () =>
                import(
                  "@/views/Unit1/U1Primaryfan/U1PrimaryfanA/U1PrimaryfanA-Deterioration.vue"
                ),
              name: "U1PrimaryfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit1/U1Primaryfan/U1PrimaryfanB",
          meta: {
            title: "B侧运行状态"
            //rank: 2
          },
          name: "U1PrimaryfanB",
          children: [
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanB/U1PrimaryfanB-Assessment",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "U1PrimaryfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanB/U1PrimaryfanB-Faultdiagnosis",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "U1PrimaryfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit1/U1Primaryfan/U1PrimaryfanB/U1PrimaryfanB-Deterioration",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "U1PrimaryfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },

    {
      path: "/Unit1/U1Sonfan",
      meta: {
        title: "送风机运行状态"
        //rank: 2
      },
      name: "U1Sonfan",
      children: [
        {
          path: "/Unit1/U1Sonfan/U1SonfanA",
          meta: {
            title: "A侧运行状态"
          },
          name: "U1SonfanA",
          children: [
            {
              path: "/Unit1/U1Sonfan/U1SonfanA/U1SonfanA-Assessment",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "U1SonfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Sonfan/U1SonfanA/U1SonfanA-Faultdiagnosis",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "U1SonfanA-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit1/U1Sonfan/U1SonfanA/U1SonfanA-Deterioration",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "U1SonfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit1/U1Sonfan/U1SonfanB",
          meta: {
            title: "B侧运行状态"
            //rank: 2
          },
          name: "U1SonfanB",
          children: [
            {
              path: "/Unit1/U1Sonfan/U1SonfanB/U1SonfanB-Assessment",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "U1SonfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Sonfan/U1SonfanB/U1SonfanB-Faultdiagnosis",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "U1SonfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit1/U1Sonfan/U1SonfanB/U1SonfanB-Deterioration",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "U1SonfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit1/U1Yinfan",
      meta: {
        title: "引风机运行状态"
        //rank: 3
      },
      name: "U1Yinfan",
      children: [
        {
          path: "/Unit1/U1Yinfan/U1YinfanA",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "U1YinfanA",
          children: [
            {
              path: "/Unit1/U1Yinfan/U1YinfanA/U1YinfanA-Assessment",
              component: () =>
                import(
                  "@/views/Unit1/U1Yinfan/U1YinfanA/U1YinfanA-Assessment.vue"
                ),
              name: "U1YinfanA-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Yinfan/U1YinfanA/U1YinfanA-Faultdiagnosis",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "U1YinfanA-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit1/U1Yinfan/U1YinfanA/U1YinfanA-Deterioration",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "U1YinfanA-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit1/U1Yinfan/U1YinfanB",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "U1YinfanB",
          children: [
            {
              path: "/Unit1/U1Yinfan/U1YinfanB/U1YinfanB-Assessment",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "U1YinfanB-Assessment",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit1/U1Yinfan/U1YinfanB/U1YinfanB-Faultdiagnosis",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "U1YinfanB-Faultdiagnosis",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit1/U1Yinfan/U1YinfanB/U1YinfanB-Deterioration",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "U1YinfanB-Deterioration",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit1/U1Turbine",
      meta: {
        title: "汽轮机运行状态"
      },
      name: "U1Turbine",
      children: [
        {
          path: "/Unit1/U1Turbine/U1Turbine-Assessment",
          component: () =>
            import("@/views/Unit1/U1Turbine/U1Turbine-Assessment.vue"),
          name: "U1Turbine-Assessment",
          meta: {
            title: "状态评估"
          }
        },
        {
          path: "/Unit1/U1Turbine/U1Turbine-Faultdiagnosis",
          component: () =>
            import("@/views/Unit1/U1Turbine/U1Turbine-Faultdiagnosis.vue"),
          name: "U1Turbine-Faultdiagnosis",
          meta: {
            title: "故障诊断"
            //showLink: false
          }
        },
        {
          path: "/Unit1/U1Turbine/U1Turbine-Deterioration",
          component: () =>
            import("@/views/Unit1/U1Turbine/U1Turbine-Deterioration.vue"),
          name: "U1Turbine-Deterioration",
          meta: {
            title: "劣化趋势"
          }
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;
