<template>
<div>
<header-top></header-top>
<el-row class="tac">
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">项目</template>
          <el-menu-item index="1-1" @click="goNewproject">新建项目</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">资源</template>
          <el-menu-item index="1-2" @click="goUpload">资源上传</el-menu-item>
          <el-menu-item index="1-3" @click="goSearch">资源检索</el-menu-item>
          <el-menu-item index="1-4">资源维护</el-menu-item>
          <el-menu-item index="1-5">其他</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="goFace">人脸识别</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">人体识别</span>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">车辆识别</span>
      </el-menu-item>
        <el-menu-item index="5" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">OCR识别</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
<main>
        <h1>欢迎使用AI自动化测试平台</h1>
</main>
<footer>
        质测中心2021.2.28号
</footer>
</div>
 
</template>
<script>
import HeaderTop from '../../components/headerTop.vue'
  export default {
    components:{
        HeaderTop
    },
    methods: {
        getout(){
           this.$router.push('/login');  
        },
        changepass(){
           this.$router.push('/assign');
        },
        goSearch(){
            this.$router.push('/search')
        },
        goNewproject(){
            this.$router.push('/newproject')
        },
        goUpload(){
            this.$router.push('/upload')
        },
        goFace(){
            this.$router.push('/face')
        }
    }
  }
</script>
<style lang="scss" scoped>
*{margin: 0; padding: 0;}
ul{list-style: none;}
h1,h2,h3{font-size: 16;font-weight: normal;}
a{text-decoration: none;color:white;}
html,body{font-family: Arial, Helvetica, sans-serif;height: 100%;overflow-y: hidden;}
.l{float: left;}
.r{float: right;}
.clear::after{content: "";display: block;clear: both;}
#header{height: 60px;background: black;color: white;}
.header_logo{font-size: 16px;line-height: 16px;margin-top: 20px;cursor: pointer;}
#header .header_nav{font-size: 5px;line-height: 8px;margin-top: 23px;}
#header .header_nav li{float: left;margin-right: 13px;}
main{text-align: center;position: fixed;left:0px;right: 0px;top: 50%;}
footer{height: 44px;width: 100%; position: fixed;bottom: 0px;left: 0px; border-top: 1px solid #dbe7ed;background:#f1f9fc;
text-align: center;color: #888888;line-height: 45px;}
</style>