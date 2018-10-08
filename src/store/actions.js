import axios from 'axios'
const actions = {
  //获取活动订单管理订单数据
  getActivityOrder({commit,state}){
    axios.post('/origin/pageConditionOrder')
    .then((res)=>{
          console.log('res.data',res.data.data.list);
          commit('_getActivityOrder',res.data.data.list)
      })
},
}
export default actions