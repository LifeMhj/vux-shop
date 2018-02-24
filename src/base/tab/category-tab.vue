<template>
    <div>
        <flexbox>
            <flexbox-item :span="3" style="border-right: 1px solid #e5e5e5">
                <tab :line-width=2 active-color='fc378c' v-model="index" >
                    <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
                </tab>
            </flexbox-item>

            <flexbox-item>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div><div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div><div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div><div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
                <div class="flex-demo">1/6</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, TabItem,Swiper,SwiperItem,Tab } from 'vux'

    const list = () => ['精选', '美食', '电影', '酒店', '外卖']

    export default {
        components: {
            Flexbox,
            FlexboxItem,
            TabItem,
            Swiper,
            SwiperItem,
            Tab
        },
        data () {
            return {
                index01: 0,
                list2: list(),
                demo2: '美食',
                list3: ['收到的消息', '发出的消息'],
                demo3: '收到的消息',
                list4: ['正在放映', '即将上映'],
                demo4: '即将上映',
                demoDisabled: 'A',
                index: 0,
                getBarWidth: function (index) {
                    return (index + 1) * 22 + 'px'
                }
            }
        },
        mounted(){
            document.getElementsByClassName('vux-tab-ink-bar')[0].remove();
        },
        methods: {
            switchTabItem (index) {
                console.log('on-before-index-change', index)
                this.$vux.loading.show({
                    text: 'loading'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.index01 = index
                }, 1000)
            },
            onItemClick (index) {
                console.log('on item click:', index)
            },
            addTab () {
                if (this.list2.length < 5) {
                    this.list2 = list().slice(0, this.list2.length + 1)
                }
            },
            removeTab () {
                if (this.list2.length > 1) {
                    this.list2 = list().slice(0, this.list2.length - 1)
                }
            },
            next () {
                if (this.index === this.list2.length - 1) {
                    this.index = 0
                } else {
                    ++this.index
                }
            },
            prev () {
                if (this.index === 0) {
                    this.index = this.list2.length - 1
                } else {
                    --this.index
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';

    .box {
        padding: 15px;
    }
    .active-6-1 {
        color: rgb(252, 55, 140) !important;
        border-color: rgb(252, 55, 140) !important;
    }
    .active-6-2 {
        color: #04be02 !important;
        border-color: #04be02 !important;
    }
    .active-6-3 {
        color: rgb(55, 174, 252) !important;
        border-color: rgb(55, 174, 252) !important;
    }
    .tab-swiper {
        background-color: #fff;
        height: 100px;
    }

    .vux-tab{
        display:block !important;
        height: auto !important;

        .vux-tab-ink-bar{
            display: none !important;
        }
    }

    .vux-tab-selected{
        border-left: 2px solid #04BE02 !important;
    }

    .vux-tab-ink-bar{
        display: none !important;
    }

    .vux-tab-ink-bar-transition-backward{
        display: none !important;
        background-color: #FFFFFF !important;
    }

    .vux-tab-bar-inner{
        display: none !important;
    }

    .vux-flexbox{
        .vux-flexbox-item{
            overflow-y: auto;
            height: -webkit-fill-available !important;
        }
    }

    .flex-demo {
        text-align: center;
        color: #fff;
        background-color: #20b907;
        border-radius: 4px;
        background-clip: padding-box;
    }
</style>
