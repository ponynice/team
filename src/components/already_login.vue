<template>
<el-container>
    <!-- 头部区-->
  <el-header class="first_header">
      <div class="header_logo">
        <img src='../assets/logo.png' class="logo">
        <img src='../assets/2.jpg' class="image2">
      </div>
      <el-row :gutter="15">
        <el-col :span="10">
            <div>
                <el-link>官网首页</el-link>
            </div>
        </el-col>
        <el-col :span="10">
            <div>
                <el-link>产品介绍</el-link>
            </div>
        </el-col>
        <el-col :span="10">
            <div>
                <el-link>关于我们</el-link>
            </div>
        </el-col>
        <el-col :span="10">
            <div>
                <el-link @click="toLogout()">退出</el-link>
            </div>
        </el-col>
      </el-row>
  </el-header>
  <!-- 主体区-->
  <el-main>
        <img src='../assets/1.jpg'>
        <span class="main_title">产品中心</span>
    <div class="totalindex">
        <div class="index mubiao">
            <i class="iconfont icon-gerenmubiao" @click="mubiao"></i>
            <span>目标检测</span>
        </div>
        <div class="index qiche">
            <i class="iconfont icon-qiche" @click="qiche"></i>
            <span>关键点检测</span>
        </div>
        <div class="index tongji" @click="tongji">
            <i class="iconfont icon-tongji"></i>
            <span>流量统计</span>
        </div>
        <div class="index shipin" @click="shipin">
            <i class="iconfont icon-shipin"></i>
            <span>视频摘要</span>
        </div>
    </div>
  </el-main>
  <!-- 末尾区-->
  <el-footer>
      <img src='../assets/3.jpg'>
      <div class="footer_text">
        <div class="text_left">
          <span>联系我们 | 法律政策 | 隐私权限</span>
        </div>
        <div class="text_right">
          <span>2021 Intergrowth Corporation XX有限公司（团体名称）</span>
        </div>
      </div>  
  </el-footer>
</el-container>
</template>

<script>
export default {
   data() {
      return{}
   },
    methods:{
        toLogout(){
            this.$confirm('请问是否要退出该账户', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
        }).then(() => {
            this.$message.success('退出成功')
            window.sessionStorage.removeItem("token")
            this.$router.push('/first')
            })         
        },
        shipin(){
            this.$router.push('/home')
        },
        tongji(){
            this.$router.push('/main')
        },
        qiche(){
            this.$message('功能尚在开发')
        },
        mubiao(){
            this.$message('功能尚在开发')
        }
    }
}
</script>

<style lang="less" scoped>/*:scope指在当前组件内生效*/
.el-row{
    /*background-color: #3698F5;*/
    .el-col{ 
        width: 121px;
        >div{
           height: 74px;
           line-height: 74px;
         
        }
        .el-link{
            font-size:26px;
        }
    }
}
.el-header{
    /*background-color: red;*/
    width: 100%;
    height:74px !important;
    display: flex;
    justify-content: space-between;
    padding-left: 12px;
    .header_logo{
        width: 413px;
        height: 74px;
        display: flex;
        .logo{
            width: 85px;
            height: 48px;
            position: relative;
            margin-top: 16px;
        }
        .image2{
            width: 315px;
            height: 74px;
        }
    }
}
.el-main{
    /*background-color: slategray;*/
    width: 100%;
    height: 100%;
    padding: 0;
    .main_title{
        position: absolute;
        top:520px;
        right:860px;
        font-size: 60px;
    }
    >img{
        width: 100%;
        height: 429px;
        margin: 0;
    }
}
.el-footer{
    /*background-color: salmon;*/
    width: 100%;
    height:45px !important;
    padding: 0;
    >img{
        width: 100%;
        margin: 0;
    }
    >span{
        font-size:20px;
    }
    .footer_text{
        display: flex;
        justify-content: space-between;
        margin-top: -45px;
        color:white;
        .text_left{
            margin-left:64px;
        }
        .text_right{
            margin-right:74px;
        }
    }
}
.el-container{
    height: 100%;
}
.totalindex{
    display: flex;
}
.index{
    border: 1px solid #3698F5;
    width: 300px;
    height: 300px;
    margin-left: 84.5px;
    margin-right:84.5px;
    margin-top:105px;
    margin-bottom: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    >span{
        font-size: 50px;
    }
}
</style>