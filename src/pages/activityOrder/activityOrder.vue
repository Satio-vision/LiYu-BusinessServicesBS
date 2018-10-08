<template>
  <div class="activityOrder">
    <h1 id="title">活动订单管理</h1>
    <!-- 搜索框 -->
    <div id="searchBar">
      <form action="#" id="searchForm">
        <div id="line1">
          <input type="text" id="input0">
          <i id="searchLogo"></i>
          <input type="submit" value="搜索" id="searchBtn" @submit="goSearch($event)">
        </div>
        <div id="line2">
          <span>状态</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in Static"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span id="orderType">订单类型</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span id="orderTime">下单时间</span>
          <div class="block">
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
      </form>
    </div>

    <!-- 表格 -->
    <orderTable id="orderTable"></orderTable>
  </div>
</template>

<script>
  import orderTable from './orderTable'
  export default {
    name:"ActivityOrder",
    components:{
      orderTable
    },
    data(){
      return{
        Static: [
          {
            value: '选项1',
            label: '代付款'
          }, {
            value: '选项2',
            label: '已付款'
          }, {
            value: '选项3',
            label: '已核销'
          }, {
            value: '选项4',
            label: '退款申请'
          }, {
            value: '选项5',
            label: '已退款'
          }
        ],
        type:[
          {
            value: '选项1',
            label: '报名类'
          }
        ],
        value: '',
        value6: ''
      }   
    },
    mothods:{
      goSearch(){
        // e.preventDefault();
      }
    }
  }
</script>

<style scoped lang="scss">
.activityOrder{
  width: 100%;
  height: 100%;
  #title{
    font-family: PingFangSC-Medium;
    font-size: 22px;
    color: #5E7790;
    line-height: 28px;
  }
  #searchBar{
    margin-top:10px;
    width: 100%;
    // height: 120px;
    border-radius: 4px;
    background: #fff;
    #searchForm{
      padding:20px;
      #line1{
        position: relative;
        #input0{
          width: 364px;
          height: 32px;
          border: 1px solid #DDE0E9;
          border-radius: 4px;
          padding:0 30px 0 10px;
          box-sizing: border-box;
        }
        #searchLogo{
          display: block;
          width: 30px;
          height: 30px;
          background: url('../../assets/activityOrder/search.png') no-repeat;
          position: absolute;
          top:8px;
          left:338px;
        }
        #searchBtn{
          margin-left:24px;
          width: 90px;
          height: 32px;
          border: 1px solid #0B7BFF;
          border-radius: 4px;
          background: #fff;
          font-family: PingFang-SC-Medium;
          font-size: 12px;
          color: #0B7BFF;
          letter-spacing: 0.48px;;
        }
      }

      #line2{
        margin-top:16px;
        // height: 32px;
        span{
          font-family: PingFang-SC-Medium;
          line-height: 32px;
          font-size: 14px;
          color: #5E7790;
          letter-spacing: 0.56px;
        }
        #orderType,#orderTime{
          margin-left:10px;
        }
        .block{
          display: inline-block;
        }
      }
    }
  }
  #orderTable{
    margin-top:20px;
  }
}
</style>