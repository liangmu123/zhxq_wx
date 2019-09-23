<!-- 公共页面 -->
<template>
  <div id="ysp_layout">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <navigation></navigation>
    <div
      v-show="loading"
      style="width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999;"
      v-loading="loading"
      element-loading-background="rgb(255,255,255)"
    ></div>
  </div>
</template>
<script>
import navigation from "@/components/navigation";
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    navigation
  },
  computed: {
    loading() {
      console.log(this.$store.state.loading)
      return this.$store.state.loading;
    }
  }
};
</script>
<style>
#ysp_layout {
  height: 100%;
}
</style>