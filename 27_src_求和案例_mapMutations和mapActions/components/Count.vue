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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,//用户选择数字
            }
        },
        computed:{
            ...mapState(['sum','school','subject']),

            ...mapGetters(['bigSum']),
        },
        methods:{
            // increment(){
            //     // this.sum+=this.n
            //     this.$store.commit('JIA',this.n)
            // },
            // decrement(){
            // //    this.sum-=this.n
            //     this.$store.commit('JIAN',this.n)
            // },

            // 这里并没有传入参数，参数在用的时候传入
            // 借助mapMutations生成对应的方法，方法中会调用commit中去联系mutations(对象的写法)
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),

            // 借助mapMutations生成对应的方法，方法中会调用commit中去联系mutations(数组的写法)
            // 数组写法就是要求名字需要一致
            // ...mapMutations(['JIA','JIAN']),


            // **************************************************
            // 对象写法同理
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
            // 数组形式同理
            // ...mapActions(['jiaOdd','jiaWait'])



            // incrementOdd(){
            //     // if(this.sum%2){
            //     //     this.sum+=this.n
            //     // }
            //     this.$store.dispatch('jiaOdd',this.n)
            // },
            // incrementWait(){
            //     // setTimeout(()=>{
            //     //     // this.sum+=this.n
            //     // },500)
            //     this.$store.dispatch('jiaWait',this.n)
            // }


        }
    }
</script>

<style>
    button{
        margin-left:5px;
    }
</style>