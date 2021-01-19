<template>
  <div id="app">
    <input v-model="username">
    <ul>
      <li>
        <router-link
          exact
          to="/"
        >首页</router-link>
      </li>
      <li>
        <router-link :to="{name:'about'}">关于</router-link>
      </li>
      <li>
        <router-link :to="{name:'user',params:{username:username,age:age}}">用户</router-link>
      </li>
      <li>
        <router-link to="/new">新闻</router-link>
      </li>
      <li>
        <router-link to="/nav1">导航1</router-link>
      </li>
    </ul>
    <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- <router-view name="nav2"></router-view> -->
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "123",
      age: 20,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  /* color: red; */
}
.router-link-active {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
