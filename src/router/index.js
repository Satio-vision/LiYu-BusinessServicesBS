import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

import ActivityOrder from '@/pages/activityOrder/activityOrder'
// 活动管理列表
import ActivityListChannelMonitoring from '@/pages/activityList/ChannelMonitoring'
import ActivityListPublish from '@/pages/activityList/Publish'
import ActivityListStats from '@/pages/activityList/Stats'
import ActivityListStock from '@/pages/activityList/Stock'
// 公众号管理列表
import MpEdit from '@/pages/mp/edit'
// 经理人管理
import Handler from '@/pages/handler/handler'
// 新增经理人
import AddHandler from '@/pages/handler/addHandler'


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
        },
        {
          //活动发布
          path:'/activityList_Publish',
          name:'ActivityListPublish',
          component:ActivityListPublish
        },
        {
          //活动渠道统计
          path:'/activityList_Stats',
          name:'ActivityListStats',
          component:ActivityListStats
        },
        {
          //库存管理
          path:'/activityList_Stock',
          name:'ActivityListStock',
          component:ActivityListStock
        },
        {
          //编辑公众号
          path:'/mp_Edit',
          name:'MpEdit',
          component:MpEdit
        },
        {
          //经理人管理
          path:'/handler',
          name:'Handler',
          component:Handler
        },
        {
          //经理人管理
          path:'/add_handler',
          name:'AddHandler',
          component:AddHandler
        }
      ]
    }
  ]
})
