<template>
    <div class="home">
        <div class="tabel_title">
            <el-row>
                <el-col :sm="2">主图</el-col>
                <el-col :sm="8">名称</el-col>
                <el-col :sm="4">颜色名称</el-col>
                <el-col :sm="3">在售端口(个)</el-col>
                <el-col :sm="4">价格变更记录</el-col>
                <el-col :sm="3">修改价格</el-col>
            </el-row>
        </div>
        <div class="table_body">
            <el-row class="items">
                <el-col :sm="2">
                    <img class="goods_img" src="@/assets/images/logo.png" alt="">
                </el-col>
                <el-col :sm="8">
                    <p class="goods_name">烽火 ADIDAS SUPERSTAR 金标贝壳头 C77154 C77124 C77394 CG7140</p>
                </el-col>
                <el-col :sm="4">
                    <p class="color_name">C77124烟台YQ仓现货</p>
                </el-col>
                <el-col :sm="3">
                    <p class="prot">5</p>
                </el-col>
                <el-col :sm="4">
                    <p class="look_info">查看详细</p>
                </el-col>
                <el-col :sm="3">
                    <p class="setting">编辑</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        padding: 20px 208px 0 20px;
        box-sizing: border-box;
    }
    .tabel_title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: #f9f7f7;
        border: solid 1px #eaedf6;
        opacity: 0.9;
        font-size: 14px;
        color: #111111;
    }
    
    .table_body {
        font-size: 14px;
        vertical-align: middle;
        .items {
            width: 100%;
            text-align: center;
            background: #fff;
            margin-top: 10px;
            display: flex;
            align-items: center;
            padding: 15px 0;
            .goods_img {
                width: 80px;
                height: 80px;
            }
            .goods_name {
                padding-left: 20px;
                text-align: left;
                width: 80%;
            }
            .prot,.look_info,.setting {
                font-size: 14px;
                color: #008efc;
            }
        }
    }
</style>


