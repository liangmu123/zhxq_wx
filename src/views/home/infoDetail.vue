<template>
  <div class="info-detail">
    <p class="title">{{article.title}}</p>
    <p class="biref">
      <span>{{article.createtime}}</span>
      <span>{{article.weigh}}</span>
      <span>{{article.weigh}}</span>
    </p>
    <p v-html="article.content"></p>
  </div>
</template>

<script>
import { noticeDetail } from "@api/api";
export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    // console.log()
    let id = this.$route.params.id;
    let params = {
      id: id
    };
    noticeDetail(params).then(res => {
      console.log(res.data);
      this.article = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.info-detail {
  padding: 0.15rem;
  .title {
    text-align: center;
    line-height: 1rem;
    width: 100%;
    height: 1rem;
    // font-weight: bold;
    color: #000;
    font-size: 0.5rem;
  }
  .biref {
    overflow: hidden;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    font-size: 0.35rem;
    span:first-child {
      display: block;
      float: left;
    }
    span:nth-child(2) {
      color: #666;
      display: block;
      float: right;
    }
    span:last-child {
      color: #666;
      display: block;
      float: right;
      margin-right: 1rem;
    }
  }
}
</style>