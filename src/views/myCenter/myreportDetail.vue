<template>
  <div class="report-detail box-content">
    <yd-slider autoplay="3000" class="header" v-if="imageList.length">
      <yd-slider-item v-for="(item,index) in imageList" :key="index">
        <img :src="item" />
      </yd-slider-item>
    </yd-slider>
    <div class="content">
      <p class="title textoverflow">{{title}}</p>
      <p class="address textoverflow">{{address}}</p>
      <p class="time">
        {{time}}
        <span class="btn">{{status==1?'未处理':status==2?'已分发':status==3?'处理中':'待评价'}}</span>
      </p>
      <div class="feed" v-if="this.$route.name=='myhandleDetail'">
        <p>指派人：物业指派中心</p>
        <p>上报人：{{feedName}}</p>
        <p>联系方式：{{mobile}}</p>
      </div>
      <p class="question" v-html="qustion"></p>
      <div v-if="answer&&(status==3||status==10||status==100)" class="answer">
        <span class="btn">处理反馈</span>
        <p v-html="answer"></p>
        <img
          class="answer-img"
          :src="item"
          v-for="(item,index) in answerImages"
          :key="item+index"
          alt
        />
      </div>
    </div>
    <span
      class="handle-btn"
      v-if="(this.$route.name=='myhandleDetail')&&(status==2)"
      @click="handlecall"
    >工单反馈</span>
  </div>
</template>

<script>
import { reportDetail } from "@api/api";
export default {
  data() {
    return {
      qustion: "",
      answer:
        " 非常感谢收到您的上报提醒，我们已经安排人来处理这件事情，给您带来的困扰我们表示十分的抱歉！",
      status: 0,
      address: "",
      title: "",
      feedName: "",
      mobile: "",
      time: "",
      imageList: [],
      answerImages: []
    };
  },
  created() {
    let params = {
      event_id: this.$route.params.id
    };
    reportDetail(params).then(res => {
      console.log(res.data.eventlog)
      if (res.data.eventlog) {
        this.answer = res.data.eventlog[0].content;
        this.answerImages = res.data.eventlog[0].images;
      }

      let data = res.data.event;
      console.log(data);
      this.title = data.title;
      this.address = data.address;
      this.status = data.status;
      this.qustion = data.content;
      this.time = data.createtime;
      this.imageList = data.images;
      this.feedName = data.username;
      this.mobile = data.mobile;
    });
  },
  methods: {
    handlecall() {
      this.$router.push({
        name: "feedback",
        params: { id: this.$route.params.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.handle-btn {
  margin: 1rem auto;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.3rem;
  color: #fff;
  display: block;
  width: 2.68rem;
  height: 0.8rem;
  background: linear-gradient(
    135deg,
    rgba(106, 197, 248, 1) 0%,
    rgba(150, 198, 255, 1) 100%
  );
  box-shadow: 0px 2px 7px 0px rgba(135, 198, 255, 1);
  border-radius: 5px;
}
.content {
  .feed {
    p {
      margin-bottom: 0.1rem;
      font-size: 0.25rem;
      color: #666;
    }
  }
  .btn {
    display: block;
    text-align: center;
    color: #fff;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    border-radius: 2px;
  }
  font-size: 0.33rem;
  padding: 0.2rem;
  .title {
    font-size: 0.4rem;
    color: #000;
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
  }
  .time {
    margin-top: 0.1rem;
    padding-bottom: 0.2rem;
    overflow: hidden;
    font-size: 0.25rem;
    span {
      float: right;
      width: 1.2rem;
      height: 0.5rem;
      line-height: 0.5rem;
    }
  }
  .answer-img {
    width: 2rem;
    margin: 0.2rem;
  }
  .question {
    padding: 0.2rem 0 0.4rem;
    border-top: 1px solid #ccc;
  }
  .answer {
    span {
      width: 1.5rem;
      line-height: 0.5rem;
      height: 0.5rem;
      margin-bottom: 0.1rem;
    }
    padding: 0.2rem 0 0.4rem;
    border-top: 1px solid #ccc;
  }
}
</style>