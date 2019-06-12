<template>
    <el-button @click="login">登录</el-button>
</template>
<script>
import $http from '@/api/login'
export default {
    methods: {
        login() {
            let params = {
                mobile: 15222684638,
                password: 123456,
                is_shop: 1
            }
            $http.login(params).then(function() {
                
            })
        }
    }
}
</script>


