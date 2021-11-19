# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 笔记

## vue.config.js配置文件
>vue inspect > output.js 可以查看vue脚手架的默认配置
>vue.config.js可以对脚手架进行个性化定制

## ref属性
 1.id的替代者，但是有点不一样。
 2.可以获取其他的vc实例。
 3.被用来给元素或子组件注册引用信息。
 4.打标识，ref="xxx"
 5.获取：this.$refs.xxx

## 配置项props
 ！！！！外部传入的数据不能修改，优先级props更高
  1上面的就是简单数据接收
  props:['name','sex','age']
  2这样写可以限制类型
  props:{
      name:String,
      age:Number,
      sex:String
  }
  3.可以限制类型，默认值的指定，必要性的限制 -->

## mixin（混入）
  功能就是把多个组件公用的配置提取成一个混合的对象
  定义混合。mixin。js
  {

  }
  引入混合
  分为全局和局部

## 插件
功能就是用于增强Vue，包含install方法的一个对象，获取的参数是Vue，然后就可以定义很多
使用的话就是Vue.use(name)


## Scoped样式
  作用:让样式在局部生效，防止冲突
  写法:<style scoped>


## 案例总结
 第一步静态拆分
 第二部动态组件，如果数据一个组件在用，就放在自身，但是如果多个组件用，就状态提升，把他放到父组件上，
 其中props，适用于通信，夫传子，子传夫。
 v-model绑定的话，不能修改props中的值，这个要注意。虽然对象的值修改不会被Vue监测，但是不推荐

## 组件的自定义事件
 适用于子组件===>父组件
 在父组件中给子组件绑定自定义事件 1.  @eventname="methodname"
                                2.  更灵活，先用ref，然后再mounted中，获取this.$refs.xxx.$on(eventname,methodname)
                                这里的methodname也是要留在父组件里的
                                指促发一次，once,$once
 子组件自己触发 this.$emit(eventname,params)
 解绑:this.$off(eventname)
 绑定原生事件需要native
 注意点，绑定自定事件时候，如果要把回调函数直接写，要写箭头函数，否则this指向会出问题

 ## 消息订阅与发布
  安装npm i pubsub-js
  import pubsub from 'pubsub-js'
  接收数据：this.pid=pubsub.subscribe('xxx',this.demo)
  提供数据: pubsub.publish('xxx',数据)
  最好再beforeDestory钩子中，用pubsub.unsubscribe(pid)取消订阅

## Vue封装过渡与动画
<transition>包裹，<transition-group>

v-enter-active,v-leave-active,
v-enter,v-enter-to,
v-leave,v-leave-to

用animate.css
enter-active-class
leave-active-class

## vue配置代理
在vue.config.js中配置如下，有两种方法。

## 插槽
让父组件可以向子组件指定位置插入html结构，适用与组件间通信的方式
分类：默认插槽，具名插槽，作用域插槽

## VueX
环境搭建基本就是在store里的index.js
main里面也就只有引入store

配置store，注意流程图,
当state中的数据需要加工后在使用时可以使用getters加工

## map方法的简写
有四种，需要先引入
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

mapState,帮助取到state中的value，
mapGetters帮助取到Getters中处理后的value，
mapMutations帮助我们与mutations对话，生成带有commit的函数
mapActions帮助我们与actions对话，生成带有dispatch的函数

都有对象和数组两种写法，其中数组写法更加简洁，但是要求名字一致

## 路由
安装：npm i vue-router
应用: Vue.use(VueRouter)
具体详见，router.index
标签：router-link，
切换：active-class="active"
视图：router-view

路由组件放在pages中，一般文件放在components中，隐藏了的路由文件就是被销毁了，$route,和$router配置信息

路由可以传递参数，
1.携带query参数，接收参数的化就是从$route.query.xx里面
命名路由作用可以简化路由的跳转,原来用path，简化后用name

2.携带params参数，接收参数就是从$route.params.xx里面
字符串形式相对比较复杂
如果用对象形式，必须用name

props参数有三种形式，详见文件夹

其中replace属性，用于控制，路由器的历史记录，默认是push模式，添加后可以变更为replace模式

编程式路由导航，不借助router-link，也就是跳脱出a标签之外，可以自己写方法调用$router的api来实现跳转，包括但不限于，push，replace，back，forward，go

缓存，让不展示的路由组件保持挂载不被销毁，
<!-- <keep-alive include="News">
<router-view></router-view>
</keep-alive> -->


## 路由守卫
分类，全局守卫，独享守卫，组件内守卫
1.全局守卫有前置守卫和后置守卫，调用时机不同，功能也不同

2.独享路由守卫，就是某个路由独享的，只有前置守卫，没有后置守卫

## 路由工作模式，hash和history
hash,带着#号兼容性好
history刷新会出现404问题，需要后端解决，可以用中间件

## elementUI 全局引入导致文件太大，可以按需引入
需要接著一个：npm install babel-plugin-component -D