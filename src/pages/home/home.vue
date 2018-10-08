<template>
    <el-container class="home">
        <el-aside width="250px" id="aside">
            <img id="logo" src="../../assets/logo.png" alt="">
            <p id="title">礼遇商家服务系统</p>
            <div id="line"></div>
            <HomeNav @listenToNavGo= "getNavGo"></HomeNav>
        </el-aside>
        <el-container>
            <el-header height="70px" id="header">
                <div id="name">
                    <span id="welcome">欢迎</span>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HomeNav from './home_nav'
export default {
  name: 'Home',
  components:{
      HomeNav
  },
  data () {
    return {
    }
  },
  methods:{
      getNavGo(data){
        console.log('data',data);
        switch(data){
            case ' 活动订单管理' :
                this.$router.push('/activityOrder');
                break;
            case '渠道监控' :
                this.$router.push('/activityList_ChannelMonitoring');
                break;
            case '活动发布' :
                this.$router.push('/activityList_Publish');
                break;
            case '活动渠道统计' :
                this.$router.push('/activityList_Stats');
                break;
            case '库存管理' :
                this.$router.push('/activityList_Stock');
                break;
            case '编辑公众号' :
                this.$router.push('/mp_Edit');
                break;
            case ' 经理人管理' :
                this.$router.push('/handler');
                break;
            case ' 新增经理人' :
                this.$router.push('/add_handler');
                break;
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
    width: 100%;
    height: 100%;
    #aside{
        height: 100%;
        background: #4D5E70;
        #logo{
            display: block;
            width: 52px;
            height: 52px;
            margin:0 auto;
            margin-top:50px;
        }
        #title{
            margin-top:9px;
            font-family: PingFangSC-Regular;
            font-size: 22px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            line-height: 36.17px;
        }
        #line{
            width: 173px;
            height: 4px;
            margin:0 auto;
            margin-top:43px;
            opacity: 0.1;
            background: #F3F5F7;
        }
    }
    .el-container{
        #header{
            box-shadow: 0 1px 4px 0 rgba(0,21,41,0.12);
            position: relative;
            #name{
                position: absolute;
                right:20px;
                top:17px;
                height: 36px;
                #welcome{
                    font-family: PingFang-SC-Medium;
                    font-size: 14px;
                    color: #0B7BFF;
                    letter-spacing: 0;
                    line-height: 36px;
                }
            }
        }
        .el-main{
            padding:24px 30px;
            background: #f4f6f9;
        }
    }
}
</style>
