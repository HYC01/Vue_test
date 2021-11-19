// 该文件用于创建路由器
import VueRouter from "vue-router"
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 要先接住router
const router=new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    // 在子组件中不需要斜杠了
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            meta:{isAuth:true,title:'详情'},
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

//全局前置路由守卫，在路由切换之前就会调用，初始化的时候也会被调用
router.beforeEach((to,from,next)=>{
    
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }
    }else{
        next()
    }
})

// 后置路由守卫,初始化被调用，在路由切换之后会调用
router.afterEach((to,from)=>{
    // 用来改标题了
    document.title=to.meta.title
})



export default router