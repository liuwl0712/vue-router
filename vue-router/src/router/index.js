import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import User from "../view/User.vue";
import New from "../view/New.vue";
import Sports from "../view/childrenPage/Sports.vue";
import nCov from "../view/childrenPage/nCov.vue";
import nav1 from "../view/layout/nav1.vue";
import nav2 from "../view/layout/nav2.vue";
import userinfo from "../view/childrenPage/userinfo.vue";
import Login from "../view/login.vue";
import NotFound from "../view/Notfound.vue";

Vue.use(VueRouter);

/**
 * 实现路由
 */
const router = new VueRouter({
  mode: "history", //路由那里有没有#号  但是需要后台去配置
  linkActiveClass: "router-link-active", //更改选中的状态的class
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    return {
      x: 0,
      y: 200,
    };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        //路由元信息
        isLogin: true,
      },
      alias: "/guanyu", //别名
      // 路由独享的守卫
      beforeEnter: (to, from, next) => {
        // console.log(to, from);
        next();
      },
    },
    {
      path: "/user/:username/age/:age",
      name: "user",
      component: User,
      props: true,
      children: [
        {
          path: "userinfo",
          component: userinfo,
        },
      ],
    },
    {
      path: "/nav1",
      name: "nav1",
      components: {
        default: nav1,
        nav2: nav2,
      },
    },
    {
      path: "/new",
      component: New,
      redirect: "/new/sports", //重定向
      children: [
        // 子路由无需添加路径
        {
          path: "sports",
          component: Sports,
        },
        {
          path: "nCov",
          component: nCov,
        },
      ],
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    //用户需要登录判断
    // 要做一些事情
    var token = false;
    if (token) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  next();
});

// 全局后置钩子
// router.afterEach((to, from) => {
//   console.log(to, from);
// });

export default router;
