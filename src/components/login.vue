<template>
    <div>
        <div class="background">
            <img src="../assets/背景.png"/>
        </div>
        <div class="LoginForm">
            <div class="title">
                <span class="big">登 录</span>
                <span class="small">/注 册</span>
            </div>
            <el-form :model="LoginForm" :rules="LoginFormRules">
                <!--用户名-->
                <el-form-item class="yonghu"  prop="username">
                    <el-input v-model="LoginForm.username" placeholder="请输入用户名" prefix-icon="iconfont icon-yonghu1"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item class="password"  prop="password">
                    <el-input v-model="LoginForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-yuechi" type="password" prop="word"></el-input>
                </el-form-item>
            </el-form>
            <div class="buttom">
                <img src="../assets/渐变登录框.png" />
                <span class="buttomspan">点 击 登 录</span> 
            </div>  
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            LoginForm:{
                username:'',
                password:''
            },
            LoginFormRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.yonghu{
    margin-top: 60px;
}
.password{
    margin-top: 51px ;
}
/*用>>>和/deep/*/
.el-input{
     font-size: 18px;
    /deep/.el-input__inner{
        width: 440px;
        height: 61px;
        border-radius:40px; 
        padding-left: 50px;
    } 
    /deep/.el-input__prefix{
        margin:8px;
    }
}
.LoginForm{
    z-index:1;
    position: absolute;
    left: 225px;
    top: 287px;
    height: 398px;
    width: 439px;
    box-sizing: border-box;
    .title{
        margin-left: 95px;
        width: 251px;
        height: 61px;
        .big{
            color: #347CEF;
            font-size: 59px;
        }
        .small{
            color: #7C9AC9;
            font-size: 36px;
        }
    }
    
    .buttom{
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        .img{
            width: 440px;
            height: 66px;
         }
        >span{
            z-index:2;
            position: absolute;
            font-size:38px;
            font-weight:bold;
            width: 205px;
            height: 22px;
            color: white;
        }
    }   
}
</style>
