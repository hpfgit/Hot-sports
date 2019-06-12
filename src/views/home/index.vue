<template>
    <div class="home">
        <div class="tabel_title">
            <el-row>
                <el-col :sm="2">主图</el-col>
                <el-col :sm="6">名称</el-col>
                <el-col :sm="4">颜色名称</el-col>
                <el-col :sm="2">寄售商</el-col>
                <el-col :sm="3">在售端口(个)</el-col>
                <el-col :sm="4">价格变更记录</el-col>
                <el-col :sm="3">修改价格</el-col>
            </el-row>
        </div>
        <div class="table_body">
            <el-row class="items">
                <el-col :sm="2">
                    <img class="goods_img" src="@/assets/images/logo.png" alt>
                </el-col>
                <el-col :sm="6">
                    <p class="goods_name">烽火 ADIDAS SUPERSTAR 金标贝壳头 C77154 C77124 C77394 CG7140</p>
                </el-col>
                <el-col :sm="4">
                    <p class="color_name">C77124烟台YQ仓现货</p>
                </el-col>
                <el-col :sm="2">
                    <div class="consignee">
                        <!-- <div class="has">
                            <span>张明</span>
                            <span class="btn">取消</span>
                        </div>-->
                        <div class="no_has">
                            <span class="btn">未分配</span>
                            <!-- <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>-->
                        </div>
                    </div>
                </el-col>
                <el-col :sm="3">
                    <p class="prot" @click="look_shop">5</p>
                </el-col>
                <el-col :sm="4">
                    <p class="look_info" @click="look_info">查看详细</p>
                </el-col>
                <el-col :sm="3">
                    <p class="setting" @click="setting">编辑</p>
                </el-col>
            </el-row>
        </div>
        <div class="pages">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
        <Dialog btnbg="#008efc" width="596px">
            <div class="from-group">
                <input type="text" class="shop-code">
            </div>
        </Dialog>
        <Dialog width="596px">
            <div class="from-group addrule">
                <input type="text" class="num">
                <span>至</span>
                <input type="text" class="num">
                <span>然后</span>
                <span class="yes-rule">
                    <img :src="require('@/assets/images/jia.png')" alt class="jia-img">
                    <img :src="require('@/assets/images/yes.png')" alt class="yes-img">
                    <input type="text" class="yes">
                </span>
                <input type="text" class="num">
            </div>
        </Dialog>
    </div>
</template>
<script>
import Dialog from "@/components/dialog";
export default {
    data() {
        return {
            value: "",
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ]
        };
    },
    methods: {
        // 查看在售端口
        look_shop() {
            this.$router.push({
                path: "/on_sale_port"
            });
        },
        look_info() {
            // console.log("look_info")
        },
        setting() {
            this.$router.push({
                path: "/edit"
            });
        }
    },
    created() {},
    components: {
        Dialog
    }
};
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
        .prot,
        .look_info,
        .setting {
            font-size: 14px;
            color: #008efc;
            cursor: pointer;
        }
        .consignee {
            .has {
                .btn {
                    display: inline-block;
                    font-size: 12px;
                    color: #e63f52;
                    width: 40px;
                    height: 18px;
                    border-radius: 4px;
                    border: solid 1px #e63f52;
                    margin-left: 10px;
                }
                .btn:hover {
                    cursor: pointer;
                }
            }
            .no_has {
                .btn {
                    color: #008efc;
                    cursor: pointer;
                }
            }
        }
    }
}

.shop-code {
    width: 248px;
    height: 30px;
}
.addrule {
    .num {
        width: 98px !important;
    }
    .yes {
        width: 78px !important;
    }
    span {
        margin-left: 10px;
        margin-right: 10px;
    }
    .yes-rule {
        margin-left: 0;
        position: relative;
        height: 32px;
        display: inline-block;

        .jia-img {
            position: absolute;
            left: 5px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .yes-img {
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
}
</style>


