// 该文件用于创建路由器
import VueRouter from "vue-router"
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    // 在子组件中不需要斜杠了
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                },
            ]
        },
    ]
})