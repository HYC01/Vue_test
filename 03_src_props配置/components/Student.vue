<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                msg:'我是一个学生',
                // 如果实在要改就重新申明一个变量
                myName:this.name
            }
        },
        // ！！！！外部传入的数据不能修改，优先级props更高
        // 1上面的就是简单数据接收
        // props:['name','sex','age']
        // 2这样写可以限制类型
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }
        // 3.可以限制类型，默认值的指定，必要性的限制
        props:{
            name:{
                type:String,//类型
                required:true,//必须的
            },
            age:{
                type:Number,
                default:99,//默认值
            },
            sex:{
                type:String,
                required:true
            }
        }

    }
</script>