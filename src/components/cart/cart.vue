<template>
    <div>{{ress}}</div>
</template>

<script>
    import {Token} from 'api/token'

    var token = new Token()

    export default {
        data(){
            return {
                ress:'sdf'
            }
        },
        created() {
            token.getCode().then((res) => {
                this.ress = res
                console.log(res);
            })
        },
    }
</script>