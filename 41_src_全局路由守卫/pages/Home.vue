<template>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 缓存，include包括哪些属性,写上组件名 -->
      <!-- 多个的话就用数组包裹 -->
      <!-- :include="['News','Message']" -->
      <keep-alive include="News">
      <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
        name:'Home',
        // mounted(){
        //   console.log(this)
        // }
    }
</script>

<style>

</style>