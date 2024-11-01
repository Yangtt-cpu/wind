export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    //title: "异常页面",
    title: "消息中心",
    rank: 9
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        //title: "403"
        title: "历史报警列表"
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        //title: "404"
        title: "常规巡检报告"
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500"
      }
    }
  ]
} satisfies RouteConfigsTable;
