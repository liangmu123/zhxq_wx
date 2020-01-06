<template>
  <div class="info-detail">
    <p class="title">{{article.title}}</p>
    <p class="biref">
      <span>{{article.createtime}}</span>
      <span><i><>{{article.weigh}}</span>
    </p>
    <p v-html="article.content"></p>
  </div>
</template>

<script>
import { noticeDetail, viewDetail } from "@api/api";
export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    // console.log()
    let id = this.$route.params.id;
    if (id) {
      let params = {
        id: id
      };
      noticeDetail(params).then(res => {
        // console.log(res.data);
        this.article = res.data;
      });
    } else {
      viewDetail().then(res => {
        // console.log(res.data);
        let data = res.data;
        this.article = {
          title: data.title,
          createtime: data.address,
          content: data.content
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-detail {
  padding: 0.15rem;
  background-color: #fff;
  min-height: 100%;
  .title {
    text-align: center;
    line-height: 1rem;
    width: 100%;
    height: 1rem;
    // font-weight: bold;
    color: #000;
    font-size: 0.4rem;
  }
  .biref {
    overflow: hidden;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    font-size: 0.3rem;
    span:first-child {
      display: block;
      float: left;
    }
    span:last-child {
      color: #666;
      display: block;
      float: right;
      margin-right: .1rem;
    }
  }
  p:last-child{
    font-size:0.3rem;
  }
}
</style>