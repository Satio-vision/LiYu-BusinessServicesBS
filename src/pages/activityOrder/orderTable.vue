<template>
  <div class="order-Table">
    <el-table
      :data="activityOrderData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        prop="orderName"
        label="订单名称"
        width="120">
      </el-table-column>
      <el-table-column
        fixed
        prop="orderStatus"
        label="订单状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="orderType"
        label="订单类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="orderId"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="下单时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="userLevel"
        label="会员等级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="userTel"
        label="绑定手机号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="orderSinglePrice"
        label="成交单价"
        width="120">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="数量"
        width="50">
      </el-table-column>
      <el-table-column
        prop="orderTotalPrice"
        label="订单总金额"
        width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import Store from '../../store'
  export default {
    name:"OrderTabale",
    data() {
      return {
        activityOrderData: []
      }
    },
    computed:{
      getActivityOrderData:function(){
        return this.$store.state.activityOrderData
      }
    },
    watch:{
      getActivityOrderData(val,oldval){
        this.activityOrderData = val;
        console.log(this.activityOrderData);
      }
    },
    methods: {
      handleClick(row) {
        // console.log(row);
      }
    },
    created(){
      this.$store.dispatch('getActivityOrder');
    }
  }
</script>

<style scoped lang="scss">
.el-pagination{
  margin-top:27px;
}
</style>