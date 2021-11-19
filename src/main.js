// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip=false

// 完整引入
// 引入elementui的组件库
// import ElementUI from 'element-ui';
// 引入elementui的全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 应用elementui,所有组件都use了
// Vue.use(ElementUI);

// 按需引入
import { Button, Row , DatePicker } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);


// 创建vue实例
new Vue({
    el:'#app',
    render: h=> h(App),
})
