<template>
    <div>
        <div class="background">
            <img src="../assets/背景.png"/>
        </div>
        <div class="RegisterForm">
            <div class="title">
                <span class="big">注 册</span>
                <span class="small" @click="toLogin">/登 录</span>
            </div>
            <el-form :model="RegisterForm" :rules="RegisterFormRules" ref="RegisterFormRef">
                <!--用户名-->
                <el-form-item class="username"  prop="username">
                    <el-input v-model="RegisterForm.username" placeholder="请输入登录用户名" prefix-icon="iconfont icon-yonghu1" ></el-input>
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
            <div class="buttom" @click="Finish">
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
                username:'',
                newpassword:'',
                rnewpassword:''
            },
            RegisterFormRules:{
                username:[
                    { required: true, message: '请输入登录用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
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
    },
    methods:{
        toLogin(){
            this.$router.push('/login')
        },
        Finish(){
             this.$refs.RegisterFormRef.validate(async valid=>{
               if(!valid)return
               console.log(this.RegisterForm.username)
               console.log(this.RegisterForm.newpassword)
               let data=this.$qs.stringify({
                   username:this.RegisterForm.username,
                   password:this.RegisterForm.newpassword})
                const result=await this.$axios({
                    method:'post',
                    url:'http://124.70.131.56:5003/register',
                   data:data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(res => {
                    console.log(res)
               if(res.data.code==200){
                   this.$message.success('注册成功')
                   this.$router.push('/first')
               }
               else this.$message(res.data.msg)
            }).catch(err=>{
                console.log(err)
                console.log(result)
                console.log(res)
            })
            
         
           })
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
.username{
    margin-top: 51px;
}
.newpassword{
    margin-top: 41px;
}
.rnewpassword{
    margin-top: 41px;
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
    top: 264px;
    height: 474px;
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
