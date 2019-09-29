<!-- 个人中心 -->
<template>
  <div class="center ysp_navigation_bottom">
    <userHeader />

    <div class="nav">
      <yd-cell-group>
        <yd-cell-item
          arrow
          v-for="(item,index) in navlist"
          :key="item+index"
          type="link"
          :href="item.link"
        >
          <span slot="icon">
            <img :src="item.src" alt srcset />
          </span>
          <span slot="left">{{item.title}}</span>
          <span slot="right">
            <span v-if="item.number" class="circle-red">{{item.number }}</span>
            {{item.exegesis||''}}
          </span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
  </div>
</template>
<script>
import userHeader from "@components/userHeader.vue";
export default {
  name: "center",
  components: { userHeader },
  data() {
    return {
      navlist: [
        {
          title: "个人信息",
          src: require("../../assets/images/user1.png"),
          link: "/center/information"
        },
        {
          title: "我的上报",
          src: require("../../assets/images/user2.png"),
          link: "/center/myReport"
        },
        {
          title: "我的投票",
          src: require("../../assets/images/user3.png"),
          link: "/center/myVote"
        },
        {
          title: "我的车辆",
          exegesis: "添加/修改车辆信息",
          src: require("../../assets/images/user4.png"),
          link: "/center/myCars"
        },
        {
          title: "我的工单",
          exegesis: "网格员专属",
          number: 2,
          src: require("../../assets/images/user6.png"),
          link: "/center/myWO"
        }
      ]
    };
  }
};
</script>
<style  lang="scss" scoped>
.nav {
  .circle-red {
    display: block;
    float: left;
    background: red;
    border-radius: 50%;
    height: 0.35rem;
    width: 0.35rem;
    line-height: 0.35rem;
    text-align: center;
    color: #fff;
    margin-right: 0.1rem;
  }
  .yd-cell-left span {
    font-size: 0.33rem;
  }
  .yd-cell-icon img {
    height: 0.5rem;
    margin-right: 0.2rem;
  }
}
</style>