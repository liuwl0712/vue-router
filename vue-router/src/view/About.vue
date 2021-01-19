<template>
  <div>
    About
    <button @click="gotoHome">回到首页</button>
    <button @click="gotoUser">回到用户</button>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {
    gotoHome() {
      // this.$router.push("/");
      this.$router.push({
        name: "home",
      });
    },
    gotoUser() {
      this.$router.push({
        name: "user",
        params:{
            username:"12321"
        }
      });
    },
  },
};
</script>