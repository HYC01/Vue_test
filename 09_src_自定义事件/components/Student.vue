<template>
    <div class="student">
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">点我把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例对象vc</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:'hyc',
                sex:'nan',
                number:0
            }
        },
        methods:{
            sendStudentName(){
                // 触发student实例身上的atguigu
                this.$emit('atguigu',this.name)
                // this.$emit('demo')
            },
            unbind(){
                // 解绑一个自定义事件
                this.$off('atguigu')
                // 解绑多个，写在数字里面
                // this.$off(['atguigu','demo'])

                // 全部解绑
                // this.$off()
            },
            death(){
                this.$destroy()//销毁了当前的student组件实例
                // 销毁后，所有student实例的自定义事件全都不奏效了，
            },
            add(){
                this.number++
                console.log('add回调被调用了 ')
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