<template>
    <div class="header clearfix">
        <div class="logo fl">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="user fl">
            <p class="text">尊敬的寄售商</p>
            <p class="userName">张小明_liu82828</p>
        </div>
        <div class="right fr">
            <div class="add_goods">
                <el-button type="primary"><i class="el-icon-plus"></i>新增商品</el-button>
            </div>
            <div class="search">
                 <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search">
                </el-input>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header {
        padding: 26px 0 28px 0;
        background: #fff;
        font-family: PingFangSC-Semibold;
        color: #34344c;
        position: relative;
        margin-bottom: 2px;
    }
    .logo {
        margin: 0 27px 0 34px;
        width: 100px;
        height: 65px;
        box-shadow: 0px 2px 4px 0px 
		rgba(10, 53, 94, 0.26);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .user {
        .text {
            display: inline-block;
            font-size: 16px;
            line-height: 20px;
            border-bottom: 1px dotted #34344c;
            padding-bottom: 5px;
        }
        .userName {
            font-size: 20px;
            line-height: 20px;
            padding-top: 11px;
        }
    }
    .right {
        display: flex;
        align-items: center;
        margin-right: 208px;
        width: 700px;
        line-height: 60px;
        .add_goods {
            margin-right: 30px;
            i {
                margin-right: 10px;
            }
        }
        .search {
            width: 100%;
        }
    }
</style>


