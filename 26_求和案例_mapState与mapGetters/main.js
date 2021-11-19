// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip=false

// 只需要引入store
import store from './store/index'

// 创建vue实例
new Vue({
    el:'#app',
    render: h=> h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus=this
    }
})


// 脚手架会优先执行import，预解析
