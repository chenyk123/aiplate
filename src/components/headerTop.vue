<template>
    <header id="header">
        <hgroup class="header_logo l">
        <h2 @click="goHome">AI测试平台</h2>
        </hgroup>
        
        <ul class="header_nav r">
        <li>
            <i class="iconfont  icon-yonghuxinxi"></i> 欢迎登录到AI测试平台
        </li>
        <li>
            <i class="iconfont icon-buchongiconsvg06"></i><a href="javascript:void(0)" @click="changepass">修改密码</a> 
        </li>
        <li>
            <i class="iconfont icon-Group"></i><a href="javascript:void(0)" @click="getout">退出</a> 
        </li>
        </ul>
    </header>
</template>
<script>
export default {
    methods:{
         getout(){
           this.$router.push('/login');  
        },
        changepass(){
           this.$router.push('/assign');
        },
        goHome(){
             this.$router.push('/home');
        }
    }
}
</script>
<style lang="scss" scoped>
#header{height: 50px;background: black;color: white;}
.header_logo{font-size: 16px;line-height: 16px;margin-top: 20px;cursor: pointer;}
#header .header_nav{font-size: 5px;line-height: 8px;margin-top: 23px;}
#header .header_nav li{float: left;margin-right: 13px;}
</style>
