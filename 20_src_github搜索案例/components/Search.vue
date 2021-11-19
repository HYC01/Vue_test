<template>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
                <button @click="searchUser">Search</button>
            </div>
        </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data(){
            return {
                keyword:''
            }
        },
        methods:{
            searchUser(){
                // 请求前就要更新List属性
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
                // 这里后端肯定已经解决了同源问题，cors一劳永逸
                axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                    response =>{
                        // console.log('请求成功了',response.data.items)
                        // this.$bus.$emit('updateListData',response.data.items)
                        // this.$bus.$emit('updateListData',false,false,'',response.data.items)
                        // 请求成功后更新List
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error =>{
                        // console.log('请求失败了',error.message)
                        // 请求失败后更新List
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        }
    }
</script>
