<template>
    <div>
        <div>
            <search-goods></search-goods>
        </div>
        <div>
            <base-swiper :baseList="baseList"></base-swiper>
        </div>
        <div class="components-home-scroller-notice">
            <base-notice :noticeArray="noticeArray"></base-notice>
        </div>
        <div class="components-home-scroller">
            <scroller-lnline :data_img="data_img"></scroller-lnline>
        </div>
        <div class="components-home-grid-goods">
            <grid-goods :goodsData="goodsData"></grid-goods>
        </div>
        <div class="components-home-flexbox">
            <flexbox orient="vertical" :gutter="0">
                <flexbox-item><img class="flex-demo" src="@static/image/test/3.jpg" width="100%"/></flexbox-item>
                <flexbox-item><img class="flex-demo" src="@static/image/test/4.jpg" width="100%"/></flexbox-item>
            </flexbox>
        </div>
        <div>
            <grid-goods :goodsData="goodsData"></grid-goods>
            <grid-goods :goodsData="goodsData"></grid-goods>
        </div>
        <div>
            <tabbar-base></tabbar-base>
        </div>
    </div>
</template>

<script>
    import {Flexbox, FlexboxItem} from 'vux'
    import BaseSwiper from '@/base/swiper/base-swiper'
    import SearchGoods from '@/base/search/search-goods'
    import BaseNotice from '@/base/notice/base-notice'
    import scrollerLnline from '@/base/scroller/scroller-lnline'
    import gridGoods from '@/base/grid/grid-goods'
    import tabbarBase from '@/base/tab/tabbar-base'

    export default {
        components: {
            BaseSwiper,
            SearchGoods,
            BaseNotice,
            scrollerLnline,
            gridGoods,
            Flexbox,
            FlexboxItem,
            tabbarBase
        },
        data() {
            return {
                noticeArray: ['这里是第一条自定义公告的标题', 'PHP是世界上最好的语言PHP是世界上最好的语言PHP是世界上最好的语言', '345'],
                data_img: ['1', '2', '3', '4', '5', '6', '7'],
                baseList: [{
                    url: 'javascript:',
                    img: 'static/image/test/1.jpg'
                }, {
                    url: 'javascript:',
                    img: 'static/image/test/2.jpg'
                }, {
                    url: 'javascript:',
                    img: 'static/image/test/3.jpg'
                }, {
                    url: 'javascript:',
                    img: 'static/image/test/4.jpg'
                }, {
                    url: 'javascript:',
                    img: 'static/image/test/5.jpg',

                }],
                goodsData: [{
                    img: 'static/image/test/2.png',
                    goodsName: "这里是图片标题",
                    price: "20.00",
                },{
                    img: 'static/image/test/2.png',
                    goodsName: "这里是图片标题",
                    price: "20.00"
                }],
                tabArray : [{
                    url: '',
                    icon: 'static/image/base/tab-home.png',
                    iconActive: 'static/image/base/tab-home-selected.png',
                    title: '主页'
                }, {
                    url: '',
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
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';

    .components-home-scroller {

    }

    .components-home-scroller-notice {
        margin-bottom: 10px;
    }

    .components-home-grid-goods {
        margin-bottom: 10px;
    }
</style>

