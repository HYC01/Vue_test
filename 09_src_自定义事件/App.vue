<template>
<!-- 这里的div很重要 -->
    <div class="app">
        <h1>{{msg}}，学生姓名是，{{studentName}}</h1>
        
        <!-- 函数类型，实现子给父传递，父亲给子传递函数 -->
        <School :getSchoolName="getSchoolName"/>
         <hr>
         <!--绑定一个自定义事件，子给父传递数据，这里父没有给子组件传递函数（第一种写法使用@）  -->
        <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->
        <!-- @就是v-on -->
        <!-- 第二种写法，使用ref，获取dom元素，更加灵活 -->
        <!-- 默认给组件绑定的都是自定义事件,要用原生的就是用native -->
        <Student ref="student" @click.native="show"/>

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
        methods:{
            getSchoolName(name){
                console.log('App收到了学校名',name)
            },
            getStudentName(name){
                // console.log('App收到了学生名',name,params)
                this.studentName=name
            },
            m1(){
                console.log('demo事件')
            },
            show(){
                console.log('hhhh')
            }
        },
        mounted(){
            // 这里是挂载完毕，手动加上事件，
            // 灵活性更强
            // setTimeout(() => {
            //     this.$refs.student.$on('atguigu',this.getStudentName)
            // }, 3000);

            // 一次性的绑定自定义
            this.$refs.student.$on('atguigu',this.getStudentName)

            // 如果直接在这里写上函数，this指向不明确,这里谁触发atguigu，谁就是this
            // 如果要把回调写在这里就把他写成箭头函数，这样this的指向还是app
            // this.$refs.student.$on('atguigu',function(){
            //     console.log(this)
            // })

        }


    }
</script>

// APP里的样式
<style>
   .app{
       background-color: green;
   }
</style>