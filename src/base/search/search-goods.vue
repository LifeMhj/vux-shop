<template>
    <div class="t_base">
        <search
                placeholder="输入关键字进行搜索"
                autoFixed
                cancel-text="搜索"
                @on-cancel="onCancel"
                v-model="value"
                ref="search">
        </search>
    </div>
</template>

<script>
    import { Search} from 'vux'

    export default {
        components: {
            Search
        },
        methods: {
            onCancel () {
            }
        },
        data () {
            return {
                results: [],
                value: ' '
            }
        }
    }
</script>

<style scoped>
    .t_base {
        height: 44px;
    }
</style>