<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2 class="atguigu">学校地址:{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                name:'sgg',
                address:'北京'
            }
        },
        mounted() {
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是school组件，收到了数据',data)
            // })

            // 一个js插件实现，订阅
            this.pubid=pubsub.subscribe('hello',function(msgName,data){
                console.log(data)
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubid)
        }
    }
</script>

// 这个scoped最好加上，然后编译用less也比较好
<style lang="less" scoped>
    .school{
        background-color: gray;
    }
</style>