<template>
    <div class="silder">
        <ul ref="silder_ul">
            <li :class="{'active': (num == 0 && active == true)}">
                <router-link to="/consignee">
                    <img
                        :src="require('@/assets/images/icon.png')"
                        alt
                        v-if="(num != 0 && active == true)"
                    >
                    <img
                        :src="require('@/assets/images/icon-active.png')"
                        alt
                        v-if="(num == 0 && active == true)"
                    >
                    <span>寄售商管理</span>
                </router-link>
                <img
                    :src="require('@/assets/images/icon-active-right.png')"
                    alt
                    class="active-img"
                    v-if="(num == 0 && active == true)"
                >
            </li>
            <li :class="{'active': (num == 1 && active == true)}">
                <router-link to="/home">
                    <img
                        :src="require('@/assets/images/icon.png')"
                        alt
                        v-if="(num != 1 && active == true)"
                    >
                    <img
                        :src="require('@/assets/images/icon-active.png')"
                        alt
                        v-if="(num == 1 && active == true)"
                    >
                    <span>我的商品</span>
                </router-link>
                <img
                    :src="require('@/assets/images/icon-active-right.png')"
                    alt
                    class="active-img"
                    v-if="(num == 1 && active == true)"
                >
            </li>
            <li :class="{'active': (num == 2 && active == true)}">
                <router-link to="/history">
                    <img
                        :src="require('@/assets/images/icon2.png')"
                        alt
                        v-if="(num != 2 && active == true)"
                    >
                    <img
                        :src="require('@/assets/images/icon2-active.png')"
                        alt
                        v-if="(num == 2 && active == true)"
                    >
                    <span>价格变更记录</span>
                </router-link>
                <img
                    :src="require('@/assets/images/icon-active-right.png')"
                    alt
                    class="active-img"
                    v-if="(num == 2 && active == true)"
                >
            </li>
        </ul>
    </div>
</template>
<script>
import { addHandler } from "@/assets/js/utils";

export default {
    name: "slider",
    data() {
        return {
            num: window.localStorage.getItem("currentIndex") || 0,
            active: true
        };
    },
    methods: {
        navClick() {
            let self = this;
            let num = 0;
            let slider_ul = this.$refs.silder_ul;
            let allLi = slider_ul.querySelectorAll("li");
            for (let item of allLi) {
                item.num = num;
                addHandler(item, "click", function() {
                    self.num = this.num;
                    window.localStorage.clear();
                    window.localStorage.setItem("currentIndex", this.num);
                });
                num += 1;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.navClick();
        });
    }
};
</script>
<style lang="scss" scoped>
.silder {
    width: 220px;
    background-color: #fff;
    font-size: 18px;
    padding-left: 34px;
    box-sizing: border-box;
    img,
    span {
        vertical-align: middle;
    }
    img {
        margin-right: 16px;
    }
    li {
        position: relative;
        margin-bottom: 60px;
        .active-img {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        &:first-child {
            margin-top: 80px;
        }
        &.active {
            a {
                color: #34344c;
            }
        }
    }

    a {
        color: #c8d1db;
        display: block;
    }
}
</style>
