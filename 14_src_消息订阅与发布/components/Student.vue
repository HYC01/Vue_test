<template>
    <div class="student">
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click='sendStudentName'>把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data(){
            return{
                name:'hyc',
                sex:'nan',
            }
        },
        methods:{
            sendStudentName(){
                // this.$bus.$emit('hello',this.name)
                // 一个js插件，实现发布
                pubsub.publish('hello',this.name)
            }
        }

    }
</script>

//  这个scoped就可以解决冲突问题
<style lang="less" scoped>
    .student{
        background-color: red;
    }
</style>