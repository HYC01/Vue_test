<template>
<!-- 这里的div很重要 -->
    <div class="app">
        <h1>{{msg}}</h1>
        

        <School/>
         <hr>
        <Student/>

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
                msg:'欢迎学习Vue！',
                studentName:''
            }
        },
    }
</script>

// APP里的样式
<style>
   .app{
       background-color: green;
   }
</style>