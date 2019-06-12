<template>
    <div class="consignee">
        <div class="tabel_title">
            <el-row>
                <el-col :sm="2">备注名称</el-col>
                <el-col :sm="6">手机号</el-col>
                <el-col :sm="4">可管理商品数量(个)</el-col>
                <el-col :sm="2">操作</el-col>
            </el-row>
        </div>
        <div class="table_body">
            <el-row class="items">
                <el-col :sm="2">
                    <p class="name">张三</p>
                </el-col>
                <el-col :sm="6">
                    <p class="mobile">13729872222</p>
                </el-col>
                <el-col :sm="4">
                    <p class="goods_num">200</p>
                </el-col>
                <el-col :sm="2">
                    <p class="edit">编辑</p>
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
        // 查看在售端口
        look_shop() {
            this.$router.push({
                path: "/on_sale_port"
            })
        },
        look_info() {
            // console.log("look_info")
        },
        setting() {
            this.$router.push({
                path: '/edit'
            })
        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
    .consignee {
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
</style>


