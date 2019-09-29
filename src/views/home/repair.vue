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
import { serviceTypeList } from "@api/api";
export default {
  data() {
    return {
      list: [
      ]
    };
  },
  created() {
    serviceTypeList().then(res => {
      // console.log(res.data.items);
      this.list = res.data.items.map(item => {
        return {
          id: item.id,
          title: item.name
        };
      });
    });
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