<template>
    <div class="login">
        <div id="loginbox">
            <h2 style="text-align:center">AI自动化测试平台</h2>
            <div id="usrname" style="margin-top:10px">
                <span class="iconfont">
                    <svg t="1613715550249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1281" width="16" height="16"><path d="M922.26 826.76c-2.92-17.43-19.42-29.19-36.85-26.27-17.43 2.92-29.19 19.42-26.27 36.85 3.22 19.24 4.86 38.98 4.86 58.66 0 17.67 14.33 32 32 32s32-14.33 32-32c0-23.22-1.93-46.51-5.74-69.24zM684.49 517.34a415.94 415.94 0 0 0-40.82-16.09c9.4-6.86 18.34-14.48 26.72-22.86C712.7 436.08 736 379.83 736 320s-23.3-116.08-65.61-158.39C628.08 119.3 571.83 96 512 96c-59.83 0-116.08 23.3-158.39 65.61C311.3 203.92 288 260.17 288 320s23.3 116.08 65.61 158.39c8.39 8.39 17.33 16.02 26.73 22.88a418.18 418.18 0 0 0-30.28 11.44c-49.54 20.95-94.03 50.94-132.22 89.14s-68.19 82.68-89.14 132.22C107 785.37 96 839.85 96 896c0 17.67 14.33 32 32 32s32-14.33 32-32c0-194.09 157.91-352 352-352 99.87 0 195.41 42.67 262.14 117.08 11.8 13.16 32.03 14.26 45.19 2.46 13.16-11.8 14.26-32.03 2.46-45.19-38.65-43.09-84.84-77.07-137.3-101.01zM352 320c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160-160-71.78-160-160z" p-id="1282" fill="#e6e6e6"></path></svg>
                </span>
                <br/>
                <input class="inps" v-model="loginForm.username" type="text" placeholder="请输入用户名">
            </div>
            <div id="password"  style="margin-top:18px">
                <span class="iconfont">
                    <svg t="1613715833048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1624" width="16" height="16"><path d="M896 640c17.67 0 32-14.33 32-32v-96c0-52.93-43.07-96-96-96h-72.07c5.35-20.75 8.07-42.14 8.07-64 0-68.38-26.63-132.67-74.98-181.02C644.67 122.63 580.38 96 512 96c-68.38 0-132.67 26.63-181.02 74.98C282.63 219.33 256 283.62 256 352c0 21.85 2.72 43.25 8.07 64H192c-52.93 0-96 43.07-96 96v320c0 52.93 43.07 96 96 96h640c52.93 0 96-43.07 96-96v-32c0-17.67-14.33-32-32-32s-32 14.33-32 32v32c0 17.64-14.36 32-32 32H192c-17.65 0-32-14.36-32-32V512c0-17.65 14.35-32 32-32h640c17.64 0 32 14.35 32 32v96c0 17.67 14.33 32 32 32zM320 352c0-105.87 86.13-192 192-192s192 86.13 192 192c0 22.09-3.68 43.55-10.92 64H330.92c-7.25-20.46-10.92-41.92-10.92-64z" p-id="1625" fill="#e6e6e6"></path><path d="M512 545c-17.6 0-32 14.4-32 32v190c0 17.6 14.4 32 32 32s32-14.4 32-32V577c0-17.6-14.4-32-32-32z" p-id="1626" fill="#e6e6e6"></path></svg>
                </span>
                <br/>
                <input class="inps" v-model="loginForm.password" type="text" placeholder="请输入密码">
            </div>
            <div id="submit" style="margin-top:20px;text-align:center ">
                <input class="submitbtn" type="button" @click="login" value="登录">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
    methods: {
        ...mapMutations(['changeLogin']),
        login () {
            let _this = this;
            if (this.loginForm.username === '' || this.loginForm.password === '') {
                alert('账号或密码不能为空');
            } else if(this.loginForm.username === 'admin' && this.loginForm.password === '123456'){
                _this.$router.push('/home');
                alert('登陆成功');
            }else{
                this.axios({
                method: 'post',
                url: '/login',
                data: _this.loginForm}).then(res => {console.log(res.data);
                _this.userToken = 'Bearer ' + res.data.data.body.token;
                // 将用户token保存到vuex中
                _this.changeLogin({ Authorization: _this.userToken });
                _this.$router.push('/home');
                alert('登陆成功');
                }).catch(error => {
                alert('账号或密码错误');
                });
            }
        }
    }
};
</script>

<style scoped>

 .login{
     background: url("../../../public/login.png");
     margin: 0;
     padding: 0;
     width: 100%;
     height: 100%;
     position: fixed;
     color: #fff;
     background-repeat: no-repeat;
     background-size: 100% 100%; 
     
 }
 #loginbox{
    width: 240px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
       230deg,
       rgba(53, 57, 74, 0) 0%,
       rgb(0, 0, 0) 100%
    );
 }
.iconfont{
    color: #fff;
}
.inps{
      border: 1px solid #2C4F92;
      color: #fff;
      background-color: transparent;
      font-size: 18px;
      width: 100%;
}
.submitbtn{
    background-color: transparent;
    text-align: center;
    color: #39f;
    width: 50%;
    font-size: 18px;
    
}
</style>