<template>
  <div class="information">
    <userHeader />
    <div class="content">
      <p>
        <span>性质</span>
        <span>{{capacity==1?'业主':'租户'}}</span>
      </p>
      <p>
        <span>姓名</span>
        <span>{{name}}</span>
      </p>
      <p>
        <span>性别</span>
        <span>{{sex}}</span>
      </p>
      <p>
        <span>电话</span>
        <span>{{iphone}}</span>
      </p>
      <p>
        <span>车牌号</span>
        <span>{{plate}}</span>
      </p>
      <p v-if="capacity==1">
        <span>关系</span>
        <span>{{relationship}}</span>
      </p>
      <p v-if="capacity!=1">
        <span>租房合同</span>
        <img :src="agreementImages" alt srcset />
        <span id="upload">点击上传</span>
      </p>
      <p v-if="capacity!=1">
        <span>租房有效期</span>
        <span>{{time}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import userHeader from "@components/userHeader.vue";
export default {
  name: "information",
  components: { userHeader },
  data() {
    return {
      capacity: "1",
      name: "周凯",
      sex: "男",
      iphone: "13812666324",
      plate: "苏E3P1L2",
      relationship: "户主",
      agreementImages: require("@assets/images/user.png"),
      time: "6个月"
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  background: #fff;
  padding: 0.2rem 0.2rem 1rem;
  p {
    overflow: hidden;
    margin-bottom: 0.2rem;
    #upload {
      font-weight: bold;
      width: 20%;
    }
    #upload:active {
      color: #000;
    }
    img {
      display: block;
      float: left;
      width: 0.8rem;
      margin-right: 5%;
    }
    span {
      display: block;
      float: left;
      font-size: 0.3rem;
      line-height: 0.8rem;
    }
    span:first-child {
      width: 30%;
    }
    span:last-child {
      width: 70%;
    }
  }
}
</style>