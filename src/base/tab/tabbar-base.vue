<template>
    <div>
        <tabbar>
            <tabbar-item v-for="(item,index) in this.tabArray" :link="item.url" :selected="index === 0 ? true : false">
                <img slot="icon" :src="item.icon">
                <img slot="icon-active" :src="item.iconActive">
                <span slot="label">{{item.title}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vux'

    export default {
        props: {
            tabArray: {
                type: Array,
                default: () => [{
                    url: '/home',
                    icon: 'static/image/base/tab-home.png',
                    iconActive: 'static/image/base/tab-home-selected.png',
                    title: '主页'
                }, {
                    url: '/category',
                    icon: 'static/image/base/tab-class.png',
                    iconActive: 'static/image/base/tab-class-selected.png',
                    title: '分类'
                }, {
                    url: '',
                    icon: 'static/image/base/tab-cart.png',
                    iconActive: 'static/image/base/tab-cart-selected.png',
                    title: '购物车'
                }, {
                    url: '',
                    icon: 'static/image/base/tab-user.png',
                    iconActive: 'static/image/base/tab-user-selected.png',
                    title: '个人'
                }]
            }
        },
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>
    .weui-tabbar {
        position: fixed;
    }
</style>