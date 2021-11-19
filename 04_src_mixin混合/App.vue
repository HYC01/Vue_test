<template>
<!-- 这里的div很重要 -->
    <div>
        <Student/>
        <hr>
        <School/>
    </div>
</template>

<script>
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
        // methods:{
        //     showDOM(){
        //         // 这里的this是vc
        //         // 里面的refs收集了很多
        //         // 也可以拿到其他的vc,例如School
        //         console.log(this.$refs.title)//真实dom元素
        //         console.log(this.$refs.sch)//School组件的实例对象，vc
        //     }
        // }
    }
</script>

<style>

</style>