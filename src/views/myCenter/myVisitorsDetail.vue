<template>
  <div class="box-content visitors-detail">
    <div class="visitors-content">
      <img :src="img" alt />
      <p>扫码区域：{{area}}</p>
      <p>进入时间：{{time}}</p>
      <p>总共用时：{{speed}}</p>
      <span class="btn">他的记录</span>
      <p class="record-list" v-for="(item,index) in list" :key="item+index">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/images/user.png"),
      area: "西北门",
      time: "08-12 13:33",
      speed: "3小时53分",
      list: ["这是一条记录", "这是另一条记录", "这是一条记录", "这是另一条记录"]
    };
  }
};
</script>

<style lang="scss" scoped>
.visitors-detail {
  padding: 0.5rem;
  .visitors-content {
    width: 5.5rem;
    transform: translateX(-50%);
    margin-left: 50%;
    padding: 0.3rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 2px 7px 0px rgba(179, 209, 255, 0.5);
    border-radius: 5px;
    text-align: center;
    img {
      margin: 0.2rem 0 0.5rem;
      width: 2.22rem;
      // height:127px;
    }
    p {
      margin: 0.1rem;
    }
    .record-list {
      font-size: 0.33rem;
      text-align: left;
    }
    .btn {
      margin: 1rem 0 .3rem;
      color: #fff;
      display: block;
      font-size: 0.3rem;
      width: 1.91rem;
      height: 0.7rem;
      line-height: 0.7rem;
      background: linear-gradient(
        135deg,
        rgba(106, 197, 248, 1) 0%,
        rgba(150, 198, 255, 1) 100%
      );
      box-shadow: 0px 2px 7px 0px rgba(135, 198, 255, 1);
      border-radius: 5px;
    }
  }
}
</style>