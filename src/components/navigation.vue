<!-- 底部导航组件 -->
<template>
  <yd-tabbar fixed color="#666666" fontsize=".25rem" padding=".1rem" bgcolor="#fff">
    <yd-tabbar-item
      v-for="(item,index) in navList"
      v-if="item.hidden"
      :key="index"
      :title="item.title"
      :link="item.link"
      :style="modular==index?active:false"
    >
      <img
        slot="icon"
        :style="index==1?iconBall:icon"
        :src="modular==index?item.iconActive:item.icon"
      />
    </yd-tabbar-item>
  </yd-tabbar>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      // 导航
      navList: [],
      active: {
        color: "red"
      },
      icon: {
        height: ".4rem"
      },
      iconBall: {
        height: "1.2rem",
        marginTop: "-.6rem",
        zIndex: 11
      },
      // 所有一级路由
      routes: [],
      // 当前激活项
      modular: 0
    };
  },
  created() {
    // if (this.$route.meta.title) {
    //   document.title = this.$route.meta.title;
    // }
    this.get_all_columns();
    this.handleRouteChange(this.$route);
  },
  watch: {
    $route(val) {
      // if (this.$route.meta.title) {
      //   document.title = this.$route.meta.title;
      // }
      this.handleRouteChange(val);
    }
  },
  methods: {
    // 获取所有栏目
    get_all_columns() {
      var routes = this.$router.options.routes;

      for (let item of routes) {
        this.routes.push(item.path);
      }

      for (let item of routes) {
        // console.log(item);
        var obj = {};
        obj.title = item.meta.title;
        obj.link = item.redirect;
        obj.icon = item.meta.icon;
        obj.iconActive = item.meta.iconActive;
        obj.hidden = item.hidden;
        this.navList.push(obj);
      }
      // console.log(this.navList);
    },
    // 切换栏目
    handleRouteChange(val) {
      var route = val.matched[0].path;
      this.modular =
        this.routes.indexOf(route) == -1 ? 0 : this.routes.indexOf(route);
    }
  }
};
</script>
<style scoped>
.yd-tabbar-fixed {
  bottom: -1px;
}
</style>