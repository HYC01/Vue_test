<template>
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2 class="atguigu">学校地址:{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return{
                name:'sgg',
                address:'北京'
            }
        },
    }
</script>

// 这个scoped最好加上，然后编译用less也比较好
<style lang="less" scoped>
    .demo{
        background-color: gray;
        .atguigu{
            background-color: darkcyan;
        }
    }
</style>