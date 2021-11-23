<template>
    <div>
        <div class="background">
            <img src="../assets/背景.png"/>
        </div>
        <div class="RegisterForm">
            <div class="title">
                <span class="big">注 册</span>
                <span class="small">/登 录</span>
            </div>
            <el-form :model="RegisterForm" :rules="RegisterFormRules">
                <!--手机号-->
                <el-form-item class="tele"  prop="tele">
                    <el-input v-model="RegisterForm.tele" placeholder="请输入手机号" prefix-icon="iconfont icon-shouji"></el-input>
                </el-form-item>
                <!--验证码-->
                <el-form-item class="verification"  prop="verification">
                    <el-input v-model="RegisterForm.verification" placeholder="请输入验证码" prefix-icon="iconfont icon-shenfenzheng" ></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item class="newpassword"  prop="newpassword">
                    <el-input v-model="RegisterForm.newpassword" placeholder="请输入密码" prefix-icon="iconfont icon-yuechi" type="password" ></el-input>
                </el-form-item>
                <!--确认密码-->
                <el-form-item class="rnewpassword"  prop="rnewpassword">
                    <el-input v-model="RegisterForm.rnewpassword" placeholder="请确认密码" prefix-icon="iconfont icon-yaoshiup" type="password" ></el-input>
                </el-form-item>
            </el-form>
            <div class="buttom">
                <img src="../assets/渐变登录框.png" />
                <span class="buttomspan">点 击 注 册</span> 
            </div>  
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.RegisterForm.newpassword) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
        return{
            RegisterForm:{
                tele:'',
                verification:'',
                newpassword:'',
                rnewpassword:''
            },
            RegisterFormRules:{
                tele:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                verification:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 6, max: 6, message: '长度为6个字符', trigger: 'blur' }
                ],
                newpassword:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ],
                rnewpassword:[
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    { validator:validatePass , trigger: 'blur'}
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
.tele{
    margin-top: 43px;
}
.verification{
    margin-top: 36px;
}
.newpassword{
    margin-top: 36px;
}
.rnewpassword{
    margin-top: 36px;
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
.RegisterForm{
    z-index:1;
    position: absolute;
    left: 230px;
    top: 255px;
    height: 554px;
    width: 442px;
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
