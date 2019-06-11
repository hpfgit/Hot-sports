<template>
    <div class="layout">
        <page-header></page-header>
        <div class="main clearfix">
            <div class="slider_box fl">
                <Slider></Slider>
            </div>
            <div class="centent fl">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import pageHeader from "@/components/header";
import Slider from "@/components/silder";

export default {
    data() {
        return {

        }
    },
    components: {
        pageHeader,
        Slider
    }
}
</script>

<style lang="scss" scoped>
    .slider_box {
        width: 220px;
        background: #fff;
        height: 500px;
    }
    .centent {
        width: calc(100% - 220px);
    }
</style>

