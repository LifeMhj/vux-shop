<template>
    <div>
        <swiper
                :list="baseList"
                :auto="auto"
                :height="height"
                :dotsPosition="dotsPosition">
        </swiper>
    </div>
</template>

<script>
    import { Swiper } from 'vux'

    export default {
        props:{
            baseList: {
                type: Array,
                default: () => []
            },
            dotsPosition: {
                type: String,
                default: "center"
            },
            auto: {
                type: Boolean,
                default: true
            },
            height: {
                type: String,
                default: "180px"
            }
        },
        components: {
            Swiper
        },
        ready () {

        },
        methods: {
        },
        data () {
            return {
                swiperItemIndex: 1
            }
        }
    }
</script>
