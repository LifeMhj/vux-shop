<template>
    <div>
        <!--<div>
            <search-goods></search-goods>
        </div>-->
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
            <grid-goods :goodsData="goodsData" title='热销商品'></grid-goods>
        </div>
        <div class="components-home-flexbox">
            <flexbox orient="vertical" :gutter="0">
                <flexbox-item><img class="flex-demo" src="@static/image/test/3.jpg" width="100%"/></flexbox-item>
                <flexbox-item><img class="flex-demo" src="@static/image/test/4.jpg" width="100%"/></flexbox-item>
            </flexbox>
        </div>
        <div>
            <grid-goods :goodsData="goodsData" title='新品上市'></grid-goods>
            <grid-goods :goodsData="goodsData"></grid-goods>
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
    import {ERR_OK} from 'api/config'
    import {Banner} from 'api/banner'
    import {Goods} from 'api/goods'

    var banner = new Banner()
    var goods = new Goods()

    export default {
        components: {
            BaseSwiper,
            SearchGoods,
            BaseNotice,
            scrollerLnline,
            gridGoods,
            Flexbox,
            FlexboxItem
        },
        data() {
            return {
                noticeArray: ['这里是第一条自定义公告的标题', 'PHP是世界上最好的语言PHP是世界上最好的语言PHP是世界上最好的语言', '345'],
                data_img: [],
                baseList: [],
                goodsData: [{
                    img: 'static/image/test/2.png',
                    goodsName: "这里是图片标题",
                    price: "20.00",
                }, {
                    img: 'static/image/test/2.png',
                    goodsName: "这里是图片标题",
                    price: "20.00"
                }],
                tabArray: [{
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
        },
        created() {
            this._getBanner1()
            this._getBanner2()
            this._getNewGoods()
        },
        methods: {
            _getBanner1() {
                banner.getBanner(1).then((res) => {
                    if (res.code === ERR_OK) {
                        let item = res.data.item,
                            data = [];

                        if (item) {
                            item.forEach(function (item) {
                                data.push({
                                    url: 'javascript:',
                                    img: process.env.BASE_IMG + item.img.url
                                })
                            })
                        }

                        this.baseList = data
                    }
                })
            },

            _getBanner2() {
                banner.getBanner(2).then((res) => {
                    if (res.code === ERR_OK) {
                        let item = res.data.item,
                            data = [];

                        if (item) {
                            item.forEach(function (item) {
                                data.push({
                                    url: 'javascript:',
                                    img: process.env.BASE_IMG + item.img.url
                                })
                            })
                        }

                        this.data_img = data
                    }
                })
            },

            _getNewGoods(){
                goods.getNewGoods(0,2).then((res) => {
                    if (res.code === ERR_OK) {
                        console.log(res);
                    }
                })
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

