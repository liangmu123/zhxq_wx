<template>
  <div class="notice-list box-content">
    <ul>
      <li v-for="(item,index) in list" :key="item+index" @click="infoDetail(item.id)">
        <span class="textoverflow">{{item.title}}</span>
        <span>{{item.time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { noticeList } from "@api/api";
import { map } from "highcharts";
export default {
  data() {
    return {
      list: [
      ]
    };
  },
  created() {
    let params = {
      page: 1,
      pagesize: 100
    };
    noticeList(params).then(res => {
      // console.log(res.data.items);
      this.list = res.data.items.map(item => {
        return {
          id:item.id,
          title:item.title,
          time: item.createtime.split(' ')[0]
        };
      });
    });
  },
  methods: {
    infoDetail(id) {
      this.$router.push({
        name: "infoDetail",
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.notice-list {
  min-height: 100%;
  font-size:0.3rem;
  background-color: #fff;
  ul {
    padding: 0.2rem;
    width: 100%;
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      overflow: hidden;
      border-bottom:1px solid #eee;
      span {
        width: 75%;
        display: block;
        float: left;
      }
      span:last-child {
        width: 25%;
        text-align: right;
        font-size: 0.3rem;
        color: #666;
        float: right;
      }
    }
    li:active {
      background: #f2f2f2;
    }
  }
}
</style>