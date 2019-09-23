<template>
  <div class="repair">
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleDetail(item.id)">
        <img class="icon" src="@assets/images/repair.png" alt />
        {{item.title}}
        <span>
          查看
          <i class="el-icon-arrow-right"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: "1", title: "防水堵漏" },
        { id: "2", title: "快速开锁" },
        { id: "3", title: "墙体修复" },
        { id: "4", title: "空调维修" },
        { id: "5", title: "家电维修" },
        { id: "6", title: "家具维修" },
        { id: "7", title: "玻璃理换" }
      ]
    };
  },
  methods: {
    handleDetail(id) {
      this.$router.push({
        name: "repairDetail",
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.repair {
  li {
    padding: 0 0.3rem;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 96%;
    height: 1.2rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 7px 0px rgba(200, 200, 200, 0.5);
    margin-top: 0.2rem;
    line-height: 1.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    img {
      display: block;
      float: left;
      margin: 0.2rem 0.2rem 0 0;
      height: 0.8rem;
    }
    span {
      font-weight: normal;
      font-size: 0.25rem;
      color: #0097f3;
      float: right;
    }
  }
  li:active {
    background: #f2f2f2;
  }
}
</style>