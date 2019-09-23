<template>
  <div class="box-content my-visitors">
    <div
      v-for="(item,index) in list"
      :key="item+index"
      class="visitors-list"
      @click="handleDetail(item.id)"
    >
      <img :src="item.image" alt />

      <div class="visitors-mess">
        <p class="textoverflow">一个客人通过扫描二维码拜访了您！</p>
        <span>{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, image: require("../../assets/images/user.png"), time: "09-12" },
        { id: 2, image: require("../../assets/images/user.png"), time: "09-12" },
        { id: 3, image: require("../../assets/images/user.png"), time: "09-12" },
        { id: 4, image: require("../../assets/images/user.png"), time: "09-12" }
      ]
    };
  },
  methods: {
    handleDetail(id) {
      this.$router.push({
        name: "myVisitorsDetail",
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-visitors {
  font-size: 0.3rem;
  padding: 0.2rem;
  .visitors-list {
    width: 100%;
    height: 1.55rem;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    margin-top: 0.3rem;
    img {
      display: block;
      float: left;
      height: 1.4rem;
      width: 1.4rem;
      margin-right: 0.2rem;
    }
    div {
      p {
        font-weight: bold;
      }
      span {
        float: right;
        text-align: right;
        line-height: 1.58rem;
      }
    }
  }
}
</style>