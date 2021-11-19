<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 如果要使用transition-group需要key -->
        <!-- 这里是用anminate.css的用法，引入name，然后选择enter和leave -->
        <transition-group 
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            appear
        >
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">尚硅谷</h1>
        </transition-group>
    </div>
</template>

<script>
    //  引入animate.css
    import 'animate.css';
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
</style>>
