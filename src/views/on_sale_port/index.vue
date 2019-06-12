<template>
    <div class="on_sale_port">
        <div class="content">
            <div class="return">
                <div @click="is_return" class="left_page">
                    <i class="el-icon-arrow-left"></i>
                    <span>我的商品</span>
                </div>
                <!-- <div class="current_page">
                    <i class="el-icon-arrow-left"></i>
                    <span class="current_page">编辑价格</span>
                </div>-->
            </div>
            <div class="title">
                <span>
                    <strong>在售端口</strong>
                </span>
                <span class="shop_name">(烽火 ADIDAS SUPERSTAR 金标贝壳头 C77154 C77124 C77394 CG7140)</span>
            </div>
            <div class="table">
                <table>
                    <tbody>
                        <tr>
                            <td class="port">
                                <span>淘宝</span>
                            </td>
                            <td class="store">
                                <span>烽火体育</span>
                            </td>
                            <td class="look_info">
                                <span>宝贝详情</span>
                            </td>
                            <td>
                                <el-button type="primary" size="mini" plain>参数设置</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="port">
                                <span>淘宝</span>
                            </td>
                            <td class="store">
                                <span>烽火体育</span>
                            </td>
                            <td class="look_info">
                                <span>宝贝详情</span>
                            </td>
                            <td>
                                <el-button type="primary" size="mini" plain>参数设置</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="port">
                                <span>淘宝</span>
                            </td>
                            <td class="store">
                                <span>烽火体育</span>
                            </td>
                            <td class="look_info">
                                <span>宝贝详情</span>
                            </td>
                            <td>
                                <el-button type="primary" size="mini" plain>参数设置</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        is_return() {
            this.$router.back(-1);
        }
    }
};
</script>
<style lang="scss" scoped>
.on_sale_port {
    font-family: PingFangSC-Medium;
    padding: 20px 208px 0 20px;
}
.content {
    background: #fff;
    background-color: #ffffff;
    border-radius: 1px;
    border: solid 1px #eaedf6;
    padding: 29px 0 100px 40px;
}
.return {
    font-size: 16px;
    color: #008efc;
    margin-bottom: 39px;
    cursor: pointer;
}
.title {
    color: #000000;
    margin-bottom: 30px;
    strong {
        font-size: 22px;
        margin-right: 13px;
    }
    .shop_name {
        font-size: 16px;
    }
}
.table {
    table {
        width: 100%;
        border-collapse: collapse;
    }
    width: 660px;
    tr {
        height: 64px;
        background-color: #e5e4e4;
        td {
            // width: 33.3%;
            padding-left: 41px;
        }
        .look_info {
            text-decoration: underline;
            font-size: 16px;
            color: #008efc;
        }
        .look_info:hover {
            cursor: pointer;
            color: red;
        }
    }
    tr:nth-child(even) {
        background: #fafafa;
    }
}
</style>


