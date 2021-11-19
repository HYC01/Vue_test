<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 如果要使用transition-group需要key -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">尚硅谷</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:'test',
        data(){
            return {
                isShow:true
            }
        },
        
    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }
    /* 进入起点，离开终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入终点，离开起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
    /* 其实是有三个标签，这个借助过度来实现 */


    /* .hello-enter-active{
        
    }
    .hello-leave-active{
        
    } */
</style>>
