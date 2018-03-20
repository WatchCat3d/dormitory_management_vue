import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import YearCost from '@/components/YearCost'
import MonthCost from '@/components/MonthCost'

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
          path: "yearCost",
          name: "YearCost",
          component: YearCost
        },
        {
          path: "monthCost",
          name: "MonthCost",
          component: MonthCost
        }
      ]
    }
  ]
})
