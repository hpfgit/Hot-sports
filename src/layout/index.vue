<template>
    <div class="layout">
        <page-header></page-header>
        <div class="main clearfix">
            <div class="slider_box fl"></div>
            <div class="centent fl">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import pageHeader from '@/components/header'

export default {
     data() {
        return {

        }
    },
    components: {
        pageHeader,
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

