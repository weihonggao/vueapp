import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = r => require.ensure([], () => r(require('../views/Index')), 'Index')
const PageOne = r => require.ensure([], () => r(require('../views/PageOne')), 'PageOne')
const PageTwo = r => require.ensure([], () => r(require('../views/PageTwo')), 'PageTwo')
const PullRefresh = r => require.ensure([], () => r(require('../views/PullRefresh')), 'PullRefresh')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {index: 1},
    component: Index
  },
  {
    path: '/pageone',
    name: 'PageOne',
    meta: {index: 2},
    component: PageOne
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    meta: {index: 2},
    component: PageTwo
  },
  {
    path: '/pullrefresh',
    name: 'PullRefresh',
    meta: {index: 2},
    component: PullRefresh
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  // console.log(to)
  // console.log(from)
  if (from.name) {
    let scope = router.app.$store
    if(to.meta.index < from.meta.index) {
      scope.commit('transitionName_M', 'slide-right')
    } else {
      scope.commit('transitionName_M', 'slide-left')
    }
  }
  next()
});
// router.afterEach((to, from) => {
//   console.log(to)
//   console.log(from)
// })

export default router
