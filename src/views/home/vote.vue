<template>
  <div class="vote box-content">
    <div class="vote-list" v-for="(item, key) in list" :key="item+key" @click="handleVote(item.id)">
      <p class="title">{{item.title}}</p>
      <p class="mess">
        <span>{{item.time}}</span>
        <span>{{item.count}}人参与</span>
        <span
          :class="item.status==1?'active':''"
        >{{item.status==0?'未开始':item.status==1?'进行中':'已经完成'}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { voteList } from "@api/api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    let params = {
      page: 1,
      pagesize: 100
    };
    voteList(params).then(res => {
      let items = res.data.items;
      this.list = items.map(item => {
        return {
          title: item.title,
          count: item.joincount,
          status: item.status,
          time: item.format_start_time,
          id: item.id
        };
      });
    });
  },
  methods: {
    handleVote(id) {
      console.log(id);
      this.$router.push({
        name: "voteDetail",
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vote {
  padding-top: 0.3rem;
  overflow: hidden;
  font-size: 0.3rem;
  .vote-list {
    border-bottom: 1px solid #aaa;
    margin: 0.1rem 0.15rem 0.3rem 0.15rem;
    .title {
      font-weight: 500;
      color: #000;
    }
    .mess {
      margin-top: 0.3rem;
      font-size: 0.25rem;
      margin-bottom: 0.2rem;
      color: #aaa;
      > span {
        margin-right: 0.3rem;
      }
      .active {
        color: #ff4545;
      }
    }
  }
}
</style>