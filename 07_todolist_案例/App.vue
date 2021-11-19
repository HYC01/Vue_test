<template>
<!-- 这里的div很重要 -->
    <div>
        <Student/>
        <hr>
        <School/>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    import MyList from './components/MyList.vue'

    export default {
        name:'App',
        components:{
            MyHeader,
            MyFooter,
            MyList
        },
        data(){
            return {
                msg:'欢迎学习Vue！'
            }
        },

    }
</script>

// APP里的样式
<style>
</style>