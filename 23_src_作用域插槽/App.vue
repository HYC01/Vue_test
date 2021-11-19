<template>
    <div class="container">
        <Category title="游戏">
            <!-- 这个template是必须的，配合scope，来获取到atguigu， -->
            <template scope="atguigu">
                <ul>
                    <li v-for="g,index in atguigu.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

        <!-- <Category title="游戏">
            <template scope="{games}">
                <ol>
                    <li v-for="g,index in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="{games}">
                <ul>
                    <h4 v-for="g,index in games" :key="index">{{g}}</h4>
                </ul>
            </template>
        </Category> -->
    </div>
</template>

<script>
    import Category from './components/Category'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    export default {
        components: { Category },
        name:'App',
        // data(){
        //     return {
        //         games:['红色警告','超级玛丽','劲舞团','出啊月火'],
        //     }
        // },

    }
</script>

<style lang='css'>
    .container{
        display: flex;
        justify-content: space-around;
    }
    img{
        width:100%
    }
</style>