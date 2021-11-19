<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="center" src="./new_goods_3.jpg" alt="">
            <a slot="footer" href="#">点击点击</a>
        </Category>
        <Category title="游戏" :listData="games">
            <ul slot="center">
                <li v-for="g,index in games" :key="index">{{g}}</li>
            </ul>
            <a slot="footer" href="#">点击游戏</a>
        </Category>
        <Category title="电影" :listData="films">
            <img slot="center" src="./new_goods_3.jpg" alt="">
            <!-- 遇到template就可以用新的写法，v-slot:footer -->
            <template v-slot:footer>
                <a slot="footer" href="#">进店热门推荐</a>
                <div>
                    <h2>hhh</h2>
                </div>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    export default {
        components: { Category },
        name:'App',
        data(){
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警告','超级玛丽','劲舞团','出啊月火'],
                films:['交付','拆弹专家','你好里欢迎','尚硅谷']
            }
        },

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