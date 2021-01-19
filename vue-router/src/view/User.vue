<template>
  <div>
    <!-- 用户：{{this.$route.params.username}} -->
    用户props：{{username}} : {{age}}
    <!-- <router-view></router-view> -->
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
    <p>页面撑开</p>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    username: {
      type: String,
      default: "",
    },
    age: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>
<style scoped>
p{
  height: 300px;
}
</style>