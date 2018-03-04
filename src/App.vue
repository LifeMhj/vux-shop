<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <keep-alive>
            <tabbar-base></tabbar-base>
        </keep-alive>
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
