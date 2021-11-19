<template>
      <div>
        <ul>
          <li v-for="m in messageList" :key="m.id" > 
            <!--这里最后都会被解析成a标签，所以可以用router-link来写  -->
            <router-link :to="{
                name:'xiangqing',
                params:{
                    id:m.id,
                    title:m.title,
                }
            }">
                {{m.title}}
            </router-link>
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
          </li>
        </ul>
        <hr>
        <router-view></router-view>
      </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
          return {
            messageList:[
              {id:'001',title:'消息001'},
              {id:'002',title:'消息002'},
              {id:'003',title:'消息003'},
              ]
          }
        },
        methods: {
            pushShow(m){
                // 调用push.api
                this.$router.push({
                    name:'xiangqing',
                    params:{
                        id:m.id,
                        title:m.title,
                    }
                })
            },
            replaceShow(m){
                // 调用replace.apis
                this.$router.replace({
                    name:'xiangqing',
                    params:{
                        id:m.id,
                        title:m.title,
                    }
                })
            }
        },
    }
</script>

<style>

</style>