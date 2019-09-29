<template>
  <div class="information">
    <userHeader />
    <div class="content">
      <p>
        <span>性质</span>
        <span>{{capacity}}</span>
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
      <p v-if="capacity=='业主'">
        <span>关系</span>
        <span>{{relationship=='0'?'非户主':'户主'}}</span>
      </p>
      <p v-if="capacity!='业主'">
        <span>租房合同</span>
        <img :src="agreementImages" alt srcset />
      </p>
      <p v-if="capacity!='业主'">
        <span>租房有效期</span>
        <span>{{deadline}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { userInfo } from "@api/api";
import userHeader from "@components/userHeader.vue";
export default {
  name: "information",
  components: { userHeader },
  data() {
    return {
      capacity: "",
      name: "",
      sex: "",
      iphone: "",
      plate: "",
      relationship: "",
      agreementImages: '',
      deadline: ""
    };
  },
  created() {
    userInfo().then(res => {
      console.log(res.data)
      let data = res.data;
      this.capacity = data.rolename;
      this.name = data.person.name;
      this.sex = data.person.gender_text;
      this.iphone = data.person.mobile;
      this.plate = data.person.carnoarr.join("、");
      this.relationship = data.person.ishead;
      this.deadline = data.person.deadline;
      this.agreementImages = data.person.images;
    });
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