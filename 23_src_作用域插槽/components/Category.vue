<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 插槽可以把数据逆着传过去 -->
        <slot :games="games">如果没有值就显示默认值</slot>
        <!-- <ul>
            <li v-for="item,index in listData" :key="index">{{item}}</li>
        </ul> -->
    </div>

</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data(){
            return {
                games:['红色警告','超级玛丽','劲舞团','出啊月火'],
            }
        },
        
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 400px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>