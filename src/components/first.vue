<template>
<el-container>
    <!-- 头部区-->
  <el-header class="first_header">
      <div class="header_logo">
        <img src='../assets/logo.png' class="logo">
        <img src='../assets/2.jpg' class="image2">
      </div>
      <el-row :gutter="20">
        <el-col :span="8"><div>官网首页</div></el-col>
        <el-col :span="8"><div>产品介绍</div></el-col>
        <el-col :span="8"><div>关于我们</div></el-col>
        <el-col :span="8"><div>登录</div></el-col>
      </el-row>
  </el-header>
  <!-- 主体区-->
  <el-main>
        <img src='../assets/1.jpg'>
        <span class="main_title">产品中心</span>
    <div class="totalindex">
        <div class="index mubiao">
            <i class="iconfont icon-gerenmubiao"></i>
            <span>目标检测</span>
        </div>
        <div class="index qiche">
            <i class="iconfont icon-qiche"></i>
            <span>关键点检测</span>
        </div>
        <div class="index tongji">
            <i class="iconfont icon-tongji"></i>
            <span>流量统计</span>
        </div>
        <div class="index shipin">
            <i class="iconfont icon-shipin"></i>
            <span>视频摘要</span>
        </div>
    </div>
  </el-main>
  <!-- 末尾区-->
  <el-footer>
      <img src='../assets/3.jpg'>
  </el-footer>
</el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>/*:scope指在当前组件内生效*/
.el-row{
    padding-right: 0;
    align-items: center
}
.el-header{
    background-color: red;
    width: 100%;
    height:74px !important;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    .header_logo{
        width: 413px;
        height: 74px;
        .logo{
            width: 85px;
            height: 48px;
            margin-buttom: 24px;
        }
        .image2{
            width: 315px;
            height: 74px;
        }
    }
}
.el-main{
    background-color: slategray;
    width: 100%;
    .main_title{
        right: 50%;
        font-size: 32px;
    }
    >img{
        width: 100%;
        height: 429px;
        padding-top: 0;
    }
}
.el-footer{
    background-color: salmon;
    width: 100%;
    >img{
        width: 100%;
        padding: 0;
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
    width: 200px;
    height: 200px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    >span{
        font-size: 30px;
    }
}
</style>