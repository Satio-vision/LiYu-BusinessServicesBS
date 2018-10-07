<template>
    <div class="home-nav">
        <!-- 是否只保持打开一个菜单unique-opened -->
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#4D5E70"
        text-color="#fff"
        active-text-color="#fff"
        :unique-opened= "true">
            <!-- 活动订单管理 -->
            <el-menu-item index="1" id="acitvityOrder" @click= "goNav">
                <i ></i>
                <span slot="title">活动订单管理</span>
            </el-menu-item>

            <!-- 活动管理列表 -->
            <el-submenu index="2" id="activityList">
                <template slot="title">
                <i></i>
                <span>活动管理列表</span>
                </template>
                <el-menu-item-group id="secondNav">
                    <el-menu-item index="2-1" @click= "goNav">渠道监控</el-menu-item>
                    <el-menu-item index="2-2" @click= "goNav">活动发布</el-menu-item>
                    <el-menu-item index="2-3" @click= "goNav">活动渠道统计</el-menu-item>
                    <el-menu-item index="2-4" @click= "goNav">库存管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 公众号管理列表 -->
            <el-submenu index="3" id="mp">
                <template slot="title">
                <i ></i>
                <span>公众号管理列表</span>
                </template>
                <el-menu-item-group id="secondNav">
                    <el-menu-item index="3-1" @click= "goNav">编辑公众号</el-menu-item>
                    <el-menu-item index="3-2" @click= "goNav">渠道监控</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 经理人管理 -->
            <el-menu-item index="4" id="handler" @click= "goNav">
                <i></i>
                <span slot="title">经理人管理</span>
            </el-menu-item>

            <!-- 新增经理人 -->
            <el-menu-item index="5" id="add_handler" @click= "goNav">
                <i></i>
                <span slot="title">新增经理人</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {

    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    goNav(e){
        console.log(e.$el.innerText)
        this.$emit('listenToNavGo',e.$el.innerText);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-nav {
    margin-top: 30px;
    .el-menu-vertical-demo{
        border: 0px;
        .is-active{
            background: rgb(62, 75, 90) !important;
        }
        i{
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-left:20px;
        }
        #acitvityOrder{
            i{
                background: url('../../assets/home-nav/order.png') no-repeat;
            }
        }
        #activityList{
            i{
                background: url('../../assets/home-nav/list.png') no-repeat;
            }
        }
        #mp{
            i{
                background: url('../../assets/home-nav/wechat.png') no-repeat;
            }
        }
        #handler{
            i{
                background: url('../../assets/home-nav/handler.png') no-repeat;
            }
        }
        #add_handler{
            i{
                background: url('../../assets/home-nav/add_handler.png') no-repeat;
            }
        }
        span{
            margin-left:10px;
        }
        #secondNav{
            background: #455567 !important;
            ul{
                li{
                    background: #455567 !important;
                    padding-left:80px !important;
                    font-family: PingFang-SC-Medium;
                    font-size: 12px;
                    color: #FFFFFF;
                    letter-spacing: 0.24px;
                    line-height: 40px;
                }
                .is-active{
                    background: rgb(62, 75, 90) !important;
                }
                li:hover{
                    background: rgb(62, 75, 90) !important;
                }
            }
        }
    }
}
</style>
