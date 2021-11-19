// 该文件用于创建Vuex中的store

// 引入Vuex
import Vuex from 'vuex'
// 引入Vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)


// actions用于响应组件中的动作
// 在actions里面把逻辑都要写好
const actions={
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },

    jiaOdd(context,value){
        // 这里的context上面有很多内容
        // 这里为什么用context是因为可以继续用dispatch，
        // 相当于是一个传递。

        // 虽然它可以直接操作state，但是这样不好，会让开发者工具失效，开发者工具是和mutation对话的
        if(context.state.sum%2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }
}
// mutations用于操作数据
const mutations={
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    }
}
// state用于存储数据
const state={
    sum:0,//当前的和
    school:'尚硅谷',
    subject:'前端'
}

// 准备一个getters用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


// 虽然不按照流程也能完成，但是按照业务逻辑会比较好。

// 把业务逻辑封装在action里面会比较好，当业务逻辑比较复杂的时候，可以让vue界面更加简洁
