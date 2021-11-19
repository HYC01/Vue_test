// 该文件用于创建路由器
import VueRouter from "vue-router"
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
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
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hu'}

                            // 第二种写法，值为布尔值,若为真就会把该路由组件手都的params参数，但不会理会query参数，都会以props的形式传给Detail组件
                            // props:true

                            // 第三种写法，值为函数,让路由组件更方便收到参数
                            props({params}){
                                return {
                                    id:params.id,
                                    title:params.title
                                }
                            }
                        }
                    ]
                },
            ]
        },
    ]
})