<template>
    <div>
        <h1>当前求和为:{{sum}}</h1>
        <h3>当前求和放大10倍{{bigSum}}</h3>
        <h3>我在{{school}}学习{{subject}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,//用户选择数字
            }
        },
        computed:{
            // 亲自写
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // },
            // 相当于上面的三段，借助mapState,可以从state中读取数据，这是对象写法
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
            // 这是用数组形式，两个名要一致就可以简写
            ...mapState(['sum','school','subject']),

            // ******************************************
            ...mapGetters(['bigSum']),

            // bigSum(){
            //     return this.$store.getters.bigSum
            // },
        },
        methods:{
            increment(){
                // this.sum+=this.n
                this.$store.commit('JIA',this.n)
            },
            decrement(){
            //    this.sum-=this.n
                this.$store.commit('JIAN',this.n)
            },
            incrementOdd(){
                // if(this.sum%2){
                //     this.sum+=this.n
                // }
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                // setTimeout(()=>{
                //     // this.sum+=this.n
                // },500)
                this.$store.dispatch('jiaWait',this.n)
            }

        }
    }
</script>

<style>
    button{
        margin-left:5px;
    }
</style>