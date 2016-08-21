<script>
    // es6
    export default {
        el: "#app",
        //  data: function(){},
        data () {
            return {
                name: "Jason",
                age: 28
            }
        }
    }
</script>
<template>
    <div>
        <h1>姓名：{{ name }}</h1>
        <h2>{{ age }}</h2>
    </div>
</template>
<style lang="sass">
    /* 一定要加lang不然无法编译 */
    /* 测试一下对sass的编辑 */
    $color: #098;
    body {
        background-color: $color;
        h1 {
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
        }
        h1:hover {
            height: 100px;
        }
        h2 {
            background-color: #999;
        }
    }
</style>
