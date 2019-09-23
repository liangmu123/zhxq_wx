<!-- 导航条 -->
<template>
  <div class="ysp_navtab">
    <ul
      v-if="navlist && navlist.length > 0"
      :class="{'justify_content':navlist.length <= 6,'flex_start':navlist.length > 6}"
    >
      <li v-for="(item,index) in navlist" :key="index">
        <router-link :to="item.link">
          <img :src="item.src" alt="图片" />
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  name: "ysp_navtab",
  data() {
    return {
      navlist: [
        {
          title: "通知公告",
          link: "/notice",
          src: require("@assets/images/home1.png")
        },
        {
          id: 1111,
          title: "小区简介",
          link: "/biref",
          src: require("@assets/images/home2.png")
        },
        {
          id: 47,
          title: "物业维修",
          link: "/repair",
          src: require("@assets/images/home3.png")
        },
        {
          id: 8,
          title: "事件上报",
          link: "/report",
          src: require("@assets/images/home4.png")
        },
        {
          id: 47,
          title: "投票评选",
          link: "/vote",
          src: require("@assets/images/home5.png")
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.ysp_navtab {
  width: 7.1rem;
  height: 3rem;
  position: absolute;
  transform: translate(-50%, -10%);
  //   border: 1px solid red;
  left: 50%;
  z-index: 66;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 5px 0px rgba(186, 186, 186, 0.5);
  border-radius: 5px;
  ul {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
    li {
      > a {
        img {
          width: 1.1rem;
          border-radius: 2rem;
          display: block;
          margin: 0 auto;
          margin-bottom: 0.25rem;
        }
        p {
          text-align: center;
          font-size: 0.25rem;
        }
      }
    }
  }
}
</style>