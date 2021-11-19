<template>
<!-- 这里的div很重要 -->
    <div>
        <!-- 这是id的替换者,ref属性 -->
        <!-- 但是其实id和ref是有区别的，得到一个组件的实例是很重要的 -->
        <!-- <h1 v-text='msg' ref="title"></h1>
        <button @click="showDOM">点我输出上方的dom元素</button> -->

        <!-- 这里用个V-bind就可以变成number -->
        <Student name="李四" sex="女" :age='17'/>
        <Student name="王五" sex="男" />
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
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