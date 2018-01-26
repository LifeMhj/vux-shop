<template>
    <div class="weui-cell base-notice-base-notice" :style="{backgroundColor: bgColor}" >
        <div class="in-group">
            <img class="in-image" src="@static/image/base/hotdot.jpg"  style="float:left"/>
            <i class=" fa" :class="icon" :style="{color: iconColor}" style="float:left"></i>
        </div>

        <div class="vux-marquee" :style="{height: height + 'px',color : textColor}">
            <ul class="vux-marquee-box" ref="box" :style="{transform: `translate3d(0,${currenTranslateY}px,0)`, transition: `transform ${noAnimate ? 0 : duration}ms`}">
                <marquee-item v-for="item in this.noticeArray">{{item}}</marquee-item>
            </ul>
        </div>
    </div>
</template>

<script>
    import {MarqueeItem} from 'vux'

    export default {
        props: {
            interval: {
                type: Number,
                default: 2000
            },
            duration: {
                type: Number,
                default: 300
            },
            direction: {
                type: String,
                default: 'up'
            },
            itemHeight: Number,
            bgColor: {
                type: String,
                default: '#FFFFFF'
            },
            iconColor: {
                type: String,
                default: '#fd5454'
            },
            textColor: {
                type: String,
                default: '#666666'
            },
            icon: {
                type: String,
                default: 'fa-volume-up'
            },
            noticeArray: {
                type: Array,
                default: () => []
            }
        },
        beforeDestroy () {
            this.destroy()
        },
        data () {
            return {
                currenTranslateY: 0,
                height: '',
                length: 0,
                currentIndex: 0,
                noAnimate: false
            }
        },
        methods: {
            destroy () {
                this.timer && clearInterval(this.timer)
            },
            init () {
                this.destroy()

                if (this.cloneNode) {
                    this.$refs.box.removeChild(this.cloneNode)
                }

                this.cloneNode = null
                let firstItem = this.$refs.box.firstElementChild
                if (!firstItem) {
                    return false
                }
                this.length = this.$refs.box.children.length
                this.height = this.itemHeight || firstItem.offsetHeight

                if (this.direction === 'up') {
                    this.cloneNode = firstItem.cloneNode(true)
                    this.$refs.box.appendChild(this.cloneNode)
                } else {
                    this.cloneNode = this.$refs.box.lastElementChild.cloneNode(true)
                    this.$refs.box.insertBefore(this.cloneNode, firstItem)
                }
                return true
            },
            start () {
                if (this.direction === 'down') this.go(false)
                this.timer = setInterval(() => {
                    if (this.direction === 'up') {
                        this.currentIndex += 1
                        this.currenTranslateY = -this.currentIndex * this.height
                    } else {
                        this.currentIndex -= 1
                        this.currenTranslateY = -(this.currentIndex + 1) * this.height
                    }
                    if (this.currentIndex === this.length) {
                        setTimeout(() => {
                            this.go(true)
                        }, this.duration)
                    } else if (this.currentIndex === -1) {
                        setTimeout(() => {
                            this.go(false)
                        }, this.duration)
                    } else {
                        this.noAnimate = false
                    }
                }, this.interval + this.duration)
            },
            go (toFirst) {
                this.noAnimate = true
                if (toFirst) {
                    this.currentIndex = 0
                    this.currenTranslateY = 0
                } else {
                    this.currentIndex = this.length - 1
                    this.currenTranslateY = -(this.currentIndex + 1) * this.height
                }
            }
        },
        components: {
            MarqueeItem
        }
    }
</script>
<style lang="less">
    .vux-marquee {
        width: 100%;
        overflow: hidden;
        height: 20px;
        line-height: 20px;
    }
    .vux-marquee-box {
        padding: 0;
        margin: 0;
        height: auto;

        li {
            margin: 0;
            width: 100%;
            text-align: left;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }

    .base-notice-base-notice {
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        position: relative;
        padding: 6px;

        .in-image{
            display: inline-block;
            height: 1rem;
            width: auto;
            position: relative;
            float: left;
            padding-right: 0.5rem;
            vertical-align: middle;
        }

        .in-group{
            display: flex;
            margin-right: 8px;
        }
    }
</style>
