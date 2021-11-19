// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 配置全局引入
import {mixin} from './mixin'
// 关闭生产提示
Vue.config.productionTip=false

// 全局混合，所有vc，vm都会有
Vue.mixin(mixin)
// 创建vue实例
new Vue({
    el:'#app',
    render: h=> h(App)
})