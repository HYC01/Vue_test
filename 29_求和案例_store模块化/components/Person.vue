<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为{{sum}}</h3>
        <h3>列表中第一位的名字是{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPerson">添加随机人</button>
        <!-- 实现了真正的数据共享 -->

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
            personList(){
                console.log(this.$store)
                return this.$store.state.personAbout.personList
                
            },
            ...mapState('countAbout',['sum']),
            // ...mapState('personAbout',['personList'])
            // 从这里可以看出来简写方式简单很多，尽量使用map
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        data(){
            return {
                name:''
            }
        },
        methods:{
            add(){
                const personObj={id:nanoid(),name:this.name}

                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name=''
            },
            addWang(){
                const personObj={id:nanoid(),name:this.name}

                this.$store.dispatch('personAbout/addPersonWang',personObj)
                this.name=''
            },
            addPerson(){
                this.$store.dispatch('personAbout/addpersonServer')
            }
        }
    }
</script>

<style>

</style>