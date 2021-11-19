// 该文件用于创建Vuex中的store

// 引入Vuex
import Vuex from 'vuex'
// 引入Vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

// 创建并暴露store
export default new Vuex.Store({
    // 模块化编码
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

