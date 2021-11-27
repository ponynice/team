<template>
    <div>
        <div class="background">
            <img src="../assets/背景.png"/>
        </div>
        <div class="LoginForm">
            <div class="title">
                <span class="big">登 录</span>
                <span class="small" @click="toRegister">/注 册</span>
            </div>
            <el-form :model="LoginForm" :rules="LoginFormRules" ref="LoginFormRef">
                <!--用户名-->
                <el-form-item class="yonghu"  prop="username">
                    <el-input v-model="LoginForm.username" placeholder="请输入用户名" prefix-icon="iconfont icon-yonghu1"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item class="password"  prop="password">
                    <el-input v-model="LoginForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-yuechi" type="password" prop="word"></el-input>
                </el-form-item>
            </el-form>
            <div class="buttom" @click="Finish" >
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
                'username':'',
                'password':''
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
    },
    methods:{
        toRegister(){
            this.$router.push('/register')
        },
        Finish(){
           this.$refs.LoginFormRef.validate(async valid=>{
               if(!valid)return
               console.log(this.LoginForm.username)
               console.log(this.LoginForm.password)
               console.log(this.LoginForm)
               let data=this.$qs.stringify({
                   username:this.LoginForm.username,
                   password:this.LoginForm.password})
               /*this.LoginForm=JSON.stringify(this.LoginForm)
               this.LoginForm=this.LoginForm.replace("{","")
               this.LoginForm=this.LoginForm.replace("}","")
               console.log(this.LoginForm)*/
                await this.$axios({
                    method:'post',
                    url:'http://124.70.131.56:5003/login',
                    data:data,
                    headers: {
                       'Content-Type': 'application/x-www-form-urlencoded',
                      /*'Access-Control-Allow-Origin':'*',*/
                      /*'Access-Control-Allow-Headers': '*'*/
           /*' add_header Access-Control-Allow-Origin' :'*',
    'add_header Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'add_header Access-Control-Allow-Headers': 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'*/
            }
                })
                .then(res => {
                    console.log(res)
               if(res.data.code==200){
                   this.$message.success('登录成功')
                   window.sessionStorage.setItem("token",res.data.token)
                   /*退出window.sessionStorage.claer()*/
                   this.$router.push('/first')
               }
               else this.$message(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })
            /*const result=this.$axios.post('http://124.70.131.56:5003/login',this.LoginForm)
            console.log(result)*/
         
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
