<template>
<!-- 这里的div很重要 -->
    <div>
        <Student/>
        <hr>
        <School/>
    </div>
</template>

<script>
// 根据引入的顺序会导致覆盖
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            Student,
            School,
        },
        data(){
            return {
                msg:'欢迎学习Vue！'
            }
        },

    }
</script>

// APP里的样式
<style>
   .title{
       background-color: green;
   }
</style>