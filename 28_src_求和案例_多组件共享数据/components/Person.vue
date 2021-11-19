<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <!-- 实现了真正的数据共享 -->
        <h3>Count组件的求和为{{sum}}</h3>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    export default {
        name:'Person',
        computed:{
            // personList(){
            //     return this.$store.state.personList
            // }
            ...mapState(['personList','sum'])
        },
        data(){
            return {
                name:''
            }
        },
        methods:{
            add(){
                const personObj={id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',personObj)
            }
        }
    }
</script>

<style>

</style>