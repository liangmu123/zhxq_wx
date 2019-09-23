<template>
  <div class="my-cars box-content">
    <userHeader />
    <div class="content">
      <div class="content-list" v-for="(item,index) in carList" :key="item+index">{{item.title}}</div>
      <div class="add-list" @click="addCar">添加车辆信息</div>
    </div>
    <yd-popup :close-on-masker="false" v-model="isShow" position="center" width="90%">
      <div class="from-content">
        <i class="el-icon-close" @click="addCar"></i>
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">牌照号：</span>
            <yd-input
              slot="right"
              :show-success-icon="false"
              v-model="cardInfo.card"
              max="20"
              placeholder="请输入牌照号"
            ></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" v-model="cardInfo.phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
          </yd-cell-item>
          <yd-cell-item v-show="isSetCard">
            <span slot="left">验证码：</span>
            <yd-input
              slot="right"
              v-model="cardInfo.yzm"
              :show-success-icon="false"
              placeholder="请输入验证码"
            ></yd-input>
          </yd-cell-item>
        </yd-cell-group>
        <span class="set-card" v-show="isSetCard">发送验证码</span>
        <yd-button type="primary">确认</yd-button>
      </div>
    </yd-popup>
  </div>
</template>

<script>
import userHeader from "@components/userHeader.vue";
export default {
  name: "mycars",
  components: { userHeader },
  data() {
    return {
      isShow: false,
      cardInfo: {
        yzm: "",
        phone: "",
        card: ""
      },
      carList: [
        { title: "苏E3P1L2" },
        { title: "苏E3P1L2" },
        { title: "苏E3P1L2" }
      ]
    };
  },
  computed: {
    isSetCard() {
      if (/^1[3456789]\d{9}$/.test(this.cardInfo.phone)) {
        return true;
      }
      return false;
    }
  },
  methods: {
    addCar() {
      this.isShow = !this.isShow;
      this.cardInfo = {
        yzm: "",
        phone: "",
        card: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.yd-cell-item:not(:last-child):after {
  margin-bottom: 0.05rem;
}
.content {
  //   padding-bottom: 1.5rem;
  .content-list {
    width: 7.18rem;
    height: 2.7rem;
    background: url("../../assets/images/carBg.png");
    background-size: 100% 100%;
    margin: 0.3rem auto;
    color: #fff;
    line-height: 2.7rem;
    text-align: right;
    font-size: 0.55rem;
    padding-right: 1rem;
  }
  .add-list {
    width: 7.18rem;
    height: 2.7rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    border-radius: 5px;
    margin: 0.3rem auto;
    font-size: 0.3rem;
    text-align: center;
    line-height: 2.7rem;
    color: #fff;
  }
  .add-list:active {
    background: rgba(106, 197, 248, 1);
  }
}
.from-content {
  text-align: right;
  background-color: #fff;
  padding: 0.2rem;
  .set-card {
    font-size: 0.25rem;
    float: left;
    color: rgb(116, 197, 249);
  }
  .set-card:active {
    color: blue;
  }
}
</style>