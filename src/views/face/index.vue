<template>
    <div>
        <header-top></header-top>
        <div class="import">
            <div class="openmethod">
                <select name="methods" id="">
                    <option value="算法1">算法1</option>
                    <option value="算法2">算法2</option>
                </select>
            </div>
            <div class="selfmethod">
                <select name="project" id="">
                    <option value="项目1">项目1</option>
                    <option value="项目2">项目2</option>
                </select>
                <select name="methods" id="">
                    <option value="算法1">算法1</option>
                    <option value="算法2">算法2</option>
                </select>
            </div>
            <div class="startbutton">
                <button style="submit">开始测试</button>
            </div>
        </div>
        <div class="pitcureShow">
            <ul>
                <li>
                    <img src="../../../public/login.png" alt="">
                </li>
                <li>
                    <img src="../../../public/login.png" alt="">
                </li>
            </ul>
        </div>
        <div class="testResult">
            <el-table
                :data="tableData"
                style="width: 100%" 
                height='200px'>
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="图片ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="结果">
                </el-table-column>
            </el-table>
        </div>
       
    </div>
</template>
<script>
import HeaderTop from '../../components/headerTop.vue'
export default {
    data() {
        return {
          tableData: [{
            date: '2021.3.10 11:07',
            name: '1',
            address: '通过',
            result:''
          }, {
            date: '2021.3.10 11:07',
            name: '2',
            address: '通过',
            result:''
          }, {
            date: '2021.3.10 11:07',
            name: '3',
            address: '未通过',
            result:'age'
          }, {
            date: '2021.3.10 11:07',
            name: '4',
            address: '未通过',
            result:'mask'
          }]
        }
    },
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss" scoped>
html,body{overflow-x: auto;}
.import{width: 100%; display: flex; border: 1px black solid;}
.openmethod{
    width: 40%;
    border: 1px black solid;
    text-align: center;
}
.selfmethod{
    width: 40%;
    border: 1px black solid;
    text-align: center;
}
.startbutton{
    width: 20%;
    text-align: center;
}
.pitcureShow{
    display: flex;
    width: 100%;
   
    ul{
        display: flex;
        
        li{
            width: 40%;
            padding: 5px;
            text-align:center;
        img{
            width: 60%;
        }
    }
    }
    
}
.testResult{width: 50%;
    el-table-column{
        height: 100px;
    }
}

</style>