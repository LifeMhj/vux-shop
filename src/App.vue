<template>
    <div id="app">
        <router-view></router-view>
        <tabbar-base></tabbar-base>
    </div>
</template>

<script>
    import tabbarBase from '@/base/tab/tabbar-base'

    export default {
        name: 'app',
        components: {
            tabbarBase
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    body {
        background-color: #fbf9fe;
    }
</style>
