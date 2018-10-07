import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import ActivityOrder from '@/pages/activityOrder/activityOrder'
import ActivityListChannelMonitoring from '@/pages/activityList/activityList_ChannelMonitoring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          // 活动订单管理
          path:'/activityOrder',
          name:'ActivityOrder',
          component:ActivityOrder
        },
        {
          //活动管理列表-渠道监控
          path:'/activityList_ChannelMonitoring',
          name:'ActivityListChannelMonitoring',
          component:ActivityListChannelMonitoring
        }
      ]
    }
  ]
})
