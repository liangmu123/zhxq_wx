<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { userInfo } from "@api/api";
export default {
  created() {
    let objUser = JSON.parse(localStorage.getItem("user"));
    console.log(objUser);
    this.$store.dispatch("setUser", objUser);

  }
};
</script>
<style lang="scss">
#app {
  font-size: 0.4rem;
  color: #333;
  height: 100%;
}
</style>
