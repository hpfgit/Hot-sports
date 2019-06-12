<template>
    <div class="dialog" :style="{'width': width}">
        <div class="box">
            <img :src="require('@/assets/images/close.png')" alt class="close">
            <h3>{{title}}</h3>
            <form class="form">
                <slot>
                    <div class="from-group">
                        <label>手机号：</label>
                        <input type="text" name="tel" placeholder="请输入手机号">
                    </div>
                    <div class="from-group">
                        <label>备注名：</label>
                        <input type="text" name="tel" placeholder="输入备注名方便查询">
                    </div>
                    <div class="from-group">
                        <label>初始密码：</label>
                        <input type="text" name="tel" placeholder="请输入密码">
                    </div>
                    <div class="from-group">
                        <label>确认密码：</label>
                        <input type="text" name="tel" placeholder="确认密码">
                    </div>
                </slot>
                <div class="from-group">
                    <input
                        type="button"
                        value="提交保存"
                        class="btn-send"
                        :style="{'background-color': btnbg}"
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        title: {
            type: String,
            default() {
                return "新增寄售商";
            }
        },
        btnbg: {
            type: String,
            default() {
                return "#3151ff";
            }
        },
        width: {
            type: String,
            default() {
                return "440px";
            }
        }
    },
    data() {
        return {};
    },
    created() {
        console.log(this.btnbg);
    },
    components: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.dialog {
    width: 440px;
    height: 366px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    margin: auto;

    .box {
        position: relative;
        width: 100%;
        background-color: #fff;
        padding-bottom: 6px;
        border: 6px solid #8a8a8a;
        box-sizing: border-box;
        .close {
            position: absolute;
            right: 32px;
            top: 22px;
        }
        h3 {
            color: #000000;
            text-align: center;
            padding-top: 24px;
            padding-bottom: 24px;
            font-size: 18px;
        }
        input {
            outline: none;
            border: none;
        }
        .form {
            margin-top: 10px;
            .from-group {
                margin-bottom: 18px;
                text-align: center;
                label {
                    display: inline-block;
                    width: 80px;
                }
                input {
                    border: 1px solid #666666;
                    width: 198px;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                }
                .btn-send {
                    border: none;
                    border-radius: 5px;
                    background-color: #3151ff;
                    color: #fff;
                    text-align: center;
                    width: 120px;
                    height: 32px;
                    line-height: 32px;
                    margin-top: 22px;
                }
            }
        }
    }
}
</style>
