<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2 class="atguigu">学校地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                name:'sgg',
                address:'北京'
            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>

// 这个scoped最好加上，然后编译用less也比较好
<style lang="less" scoped>
    .school{
        background-color: gray;
    }
</style>