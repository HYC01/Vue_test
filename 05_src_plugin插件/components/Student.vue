<template>
    <div>
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:'我是一个学生',
                sex:'nan'
            }
        },  
    }
</script>