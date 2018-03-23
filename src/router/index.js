import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import YearCost from '@/components/YearCost'
import MonthCost from '@/components/MonthCost'
import IndexContent from '@/components/indexContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
      children: [
        {
          path: "/index/yearCost",
          name: "YearCost",
          component: YearCost
        },
        {
          path: "/index/monthCost",
          name: "MonthCost",
          component: MonthCost
        },
        {
          path: "/index/indexContent",
          name: "IndexContent",
          component: IndexContent
        }
      ]
    }
  ]
})
