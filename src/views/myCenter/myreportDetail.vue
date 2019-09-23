<template>
  <div class="report-detail box-content">
    <yd-slider autoplay="3000" class="header" v-if="imageList.length">
      <yd-slider-item v-for="(item,index) in imageList" :key="index">
        <img :src="item" />
      </yd-slider-item>
    </yd-slider>
    <div class="content">
      <p class="title textoverflow">{{title}}</p>
      <p class="time">
        {{time}}
        <span class="btn">{{isHandle?'已处理':'未处理'}}</span>
      </p>
      <p class="question" v-html="qustion"></p>
      <div v-if="answer&&isHandle" class="answer">
        <span class="btn">处理反馈</span>
        <p v-html="answer"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: "物业指挥中心",
      deleteTime: "一周内",
      qustion:
        "这个问题已经反映了很多次了，难道真的要报警来处理吗，咱们这边物业不能走点心么？",
      answer:
        " 非常感谢收到您的上报提醒，我们已经安排人来处理这件事情，给您带来的困扰我们表示十分的抱歉！",
      isHandle: true,
      title: "小区门口的垃圾是真的多",
      time: "2019年09月12日  13：03",
      imageList: [
        require("../../assets/images/banner.png"),
        require("../../assets/images/banner.png"),
        require("../../assets/images/banner.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
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