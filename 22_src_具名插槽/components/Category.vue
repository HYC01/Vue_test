<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 定义一个插槽 -->
        <slot name="center">如果没有值就显示默认值</slot>
        <slot name="footer">如果没有值就显示默认值</slot>
        <!-- <ul>
            <li v-for="item,index in listData" :key="index">{{item}}</li>
        </ul> -->
    </div>

</template>

<script>
    export default {
        name:'Category',
        props:['title']
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