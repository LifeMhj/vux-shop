<template>
    <div>
        <scroller lock-y :scrollbar-x=false>
            <div class="box1" :style="{width: this.data_img.length * 115 - 15 + 'px'}">
                <div class="box1-item" v-for="item in this.data_img">
                    <a href="javascript:">
                        <img :src="item.img" class="in-img"/>
                    </a>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    import {Scroller} from 'vux'

    export default {
        props: {
            data_img: {
                type: Array,
                default: () => []
            }
        },
        components: {
            Scroller
        },
        mounted() {

        },
        methods: {}

    }
</script>

<style scoped lang="less">
    .box1 {
        height: 60px;
        position: relative;
    }

    .box1-item {
        width: 100px;
        background-color: #ccc;
        display: inline-block;
        margin-left: 15px;
        float: left;
        text-align: center;
        height: 60px;
        line-height: 60px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .box1-item:first-child {
        margin-left: 0;
    }
</style>
