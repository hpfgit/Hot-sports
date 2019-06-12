<template>
    <div class="edit">
        <div class="return">
            <div @click="is_return" class="left_page">
                <i class="el-icon-arrow-left"></i>
                <span>我的商品</span>
            </div>
            <div class="current_page">
                <i class="el-icon-arrow-left"></i>
                <span class="current_page">编辑价格</span>
            </div>
        </div>
        <div class="tabel_title">
            <el-row>
                <el-col :sm="2">尺码</el-col>
                <el-col :sm="8">商家编号</el-col>
                <el-col :sm="4">当前价格</el-col>
                <el-col :sm="3">建议售价</el-col>
                <el-col :sm="4">出价</el-col>
            </el-row>
        </div>
        <div class="table_body">
            <el-row class="items">
                <el-col :sm="2">
                    <span class="size">41</span>
                </el-col>
                <el-col :sm="8">
                    <p class="store_num">414571-104香港小白-41-HKL</p>
                </el-col>
                <el-col :sm="4">
                    <p class="current_price">￥1699</p>
                </el-col>
                <el-col :sm="3">
                    <p class="advise_price">￥1699</p>
                </el-col>
                <el-col :sm="4">
                    <p class="bid"><input type="text"><span>9</span></p>
                </el-col>
            </el-row>
        </div>
        <div class="pages">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        is_return () {
            this.$router.back(-1)
        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
    .edit {
        width: 100%;
        padding: 20px 208px 0 20px;
        box-sizing: border-box;
    }
    .return {
        font-size: 16px;
        color: #008efc;
        margin-bottom: 39px;
        &>div {
            display: inline-block;
        }
        .left_page {
            cursor: pointer;
        }
        .current_page {
            color: #000000;
        }
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
            height: 80px;
           .bid {
               input{
                   width: 60px;
                   padding: 5px;
               }
           }
        }
    }
</style>


