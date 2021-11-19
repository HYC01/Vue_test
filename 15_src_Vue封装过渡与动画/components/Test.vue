<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- Vue自己给你调用了,如果这里有了name，就要用hello-enter-active。但是如果不给就是v-enter-active -->
        <!-- appear就是刷新页面就开始 -->
        <!-- 这个transition是没有真正的标签的 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
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
    .hello-enter-active{
        animation: atguigu 1s;
    }
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>>
