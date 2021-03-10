<template>
<div class="search">
    <header-top></header-top>
    <div class="SearchButtom">
        <select name="card" id="">
            <option value="man">男</option>
            <option value="women">女</option>
        </select>
        <select name="card" id="">
            <option value="证件照">证件照</option>
            <option value="非证件照">非证件照</option>
        </select>
        <select name="glass" id="">
            <option value="戴眼镜">戴眼镜</option>
            <option value="不带眼睛">不带眼睛</option>
        </select>
        <select name="mask" id="">
            <option value="戴口罩">戴口罩</option>
            <option value="不戴口罩">不戴口罩</option>
        </select>
        <select name="hat" id="">
            <option value="戴帽子">戴帽子</option>
            <option value="不戴帽子">不戴帽子</option>
        </select>
        <select name="format" id="">
            <option value="jpg">jpg</option>
            <option value="png">png</option>
        </select>
        <button type="submit">确定</button>
    </div>
    <!-- <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
            <el-image style="width: 100px; height: 100px;margin:10px" :src="url" :fit="fit"></el-image>
        </div>
    </div> -->
    <div class="demo-image">
        <ul class="block">
            <li><img src="../../../public/login.png" alt=""></li>
            <li><img src="../../../public/login.png" alt=""></li>
            <li><img src="../../../public/login.png" alt=""></li>
            <li><img src="../../../public/login.png" alt=""></li>
        </ul>
    </div>
    <div class="pagelist">
        <span class="demonstration"></span>
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
</div>
    
</template>
<script>
import HeaderTop from '../../components/headerTop.vue'
export default {
    data(){
        return{
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
},
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss" scoped>
.SearchButtom{
    width: 150px;text-align: center;float: left;
}
button{margin-top: 25px;}
select{
    width: 100px; margin: 30px 10px 10px 10px;
}
.demo-image{
    width: 85%;height: 80%;border: 1px gray solid;margin: 0px 100px 0px 0px;
    display: flex;position: fixed;top: 80px;left: 150px;
}
.block{display: flex;width:100%;height: 100%;}
.block li{width: 25%; height: 30%; border: 1px black solid; margin: 5px;padding: 5px;}
.block img{width: 100%;height: 100%;}
.pagelist{
    position: fixed;bottom: 5px;right: 50px;
}
</style>