<template>
    <div class="base-grid-grid-goods">
        <title-split :title="this.title"></title-split>
        <grid :cols="2">
            <grid-item v-for="(item,index) in this.goodsData" :key="index">
                <img :src="item.thumb" class="in-img"/>
                <span class="in-goodsName">{{item.title}}</span>
                <div class="in-price">
                    <span>¥{{item.marketprice}}</span>
                    <button type="warn">购买</button>
                </div>
            </grid-item>
        </grid>
    </div>
</template>


<script>
    import {Grid, GridItem, XButton} from 'vux'
    import titleSplit from '@/base/title/title-split'

    export default {
        props: {
            goodsData: {
                type: Array,
                default: () => []
            },
            title: {
                type:String,
                default: ''
            }
        },
        components: {
            Grid,
            GridItem,
            XButton,
            titleSplit,
        },
        methods: {
            onItemClick() {
                console.log('on item click')
            }
        }
    }
</script>

<style lang="less">
    .weui-grid {
        padding: 10px !important;

        a {
            border-right: 0 !important;
        }
    }

    .weui-grids:before {
        border-right: 0 !important;
    }

    .weui-grids:before {
        border-right: 0 !important;
    }

    .grid-center {
        display: block;
        text-align: center;
        color: #666;
    }

    .vux-divider {
        display: table;
        white-space: nowrap;
        height: auto;
        overflow: hidden;
        line-height: 1;
        text-align: center;
        padding: 10px 0;
        color: #666;
    }

    .vux-divider:after, .vux-divider:before {
        content: '';
        display: table-cell;
        position: relative;
        top: 50%;
        width: 50%;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)
    }

    .vux-divider:before {
        background-position: right 1em top 50%
    }

    .vux-divider:after {
        background-position: left 1em top 50%
    }

    .base-grid-grid-goods {

        .in-img {
            width: 100%;
        }

        .in-goodsName {
            height: 1.7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.65rem;
            line-height: 0.9rem;
            color: #262626;
        }

        .in-price {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 0.7rem;
            margin-top: 0.3rem;
            color: #ed2822;

            span {
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                color: #ff5555;
                font-size: 0.8rem;
            }

            button {
                display: inline-block;
                height: 1.1rem;
                color: #fff;
                line-height: 1.1rem;
                background: #fe5455;
                padding: 0rem 0.35rem;
                border-radius: 0.1rem;
                border: 1px solid transparent;
                width: 40px;
            }
        }
    }
</style>
