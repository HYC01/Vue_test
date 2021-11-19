// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip=false

// 引入插件
import plugins from './plugins'

// 使用插件
Vue.use(plugins)


// 创建vue实例
new Vue({
    el:'#app',
    render: h=> h(App)
})