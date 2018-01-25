<template>
    <div>
        <scroller lock-y :scrollbar-x=false>
            <div class="box1" :style="{width: s_width + 'px'}">
                <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
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
        data () {
            return {
                s_width: this.data_img.length * 115 - 15
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

<style scoped>
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
    }

    .box1-item:first-child {
        margin-left: 0;
    }
</style>
