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
        return {};
    },
    components: {
        pageHeader,
        Slider
    }
};
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
}
.main {
    height: calc(100% - 121px);
}
.slider_box {
    width: 220px;
    background: #fff;
    height: 100%;
}
.centent {
    width: calc(100% - 220px);
    min-height: 100%;
}
</style>

