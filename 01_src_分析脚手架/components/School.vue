<template>
    <div class='demo'>
        <h2>名称:{{name}}</h2>
        <h2>地址:{{address}}</h2>
    </div>
</template>

<script>
// 组件的交互
// 这里组件默认暴露，然后Vue.extend直接省略
    export default {
        // 和文件名保持一致
        name:'School',
        data(){
            return {
                name:'hh',
                address:'6'
            }
        },
        methods: {
            showName(){
                alert(this.showName)
            }
        },
    }
    // 或者统一暴露，默认暴露
    // export {school}
    // export default school
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>