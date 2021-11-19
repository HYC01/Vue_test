/* 
该文件是整个项目的入口文件
 */
// 引入Vue，就是之前拿script引入的，脚手架都安装好了
// 这里的vue收到vue中package。json文件的控制，获取的就是一个runtime.esm.js,他不能解析template，如果想要解析，换成vue.js
// vue.js 包含核心功能和模板解析器，vue.runtime.xxx.js是运行版的vue，只有核心功能，没有模板解析器
import Vue from 'vue'
// 引入App，
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建实例对象---vm
new Vue({
  el:'#app',
  // 完成功能就是将app组件放入容器中
  // 这个就是渲染的意思
  render: h => h(App),
  // render: function(createElement){
  //   return createElement(App)
  // }
  // render: createElement =>{
  //   return createElement(App)
  // }


  // 这里会报错，是残缺的编译器
  // template:`<App></App>`,
  // components:{App}
})

// 这里的render配置项