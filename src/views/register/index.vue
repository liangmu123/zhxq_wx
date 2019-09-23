<template>
  <div class="register box-content">
    <div v-if="index!=3">
      <img src="@assets/images/banner.png" alt />
      <div class="step">
        <yd-step :current="index" current-color="#2085FF">
          <yd-step-item>
            <span slot="bottom">验证手机</span>
          </yd-step-item>
          <yd-step-item>
            <span slot="bottom">基本信息</span>
          </yd-step-item>
          <yd-step-item>
            <span slot="bottom">完成</span>
          </yd-step-item>
        </yd-step>
      </div>
      <div class="input" v-if="index==1">
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">手机号：</span>
            <input type="text" slot="right" placeholder="请输入手机号码" />
            <yd-sendcode
              slot="right"
              v-model="start"
              @click.native="sendCode1"
              type="primary"
              init-str="获取验证码"
            ></yd-sendcode>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">验证码：</span>
            <yd-input
              :show-success-icon="false"
              slot="right"
              v-model="yzm"
              max="8"
              placeholder="请输入验证码"
            ></yd-input>
          </yd-cell-item>
        </yd-cell-group>
        <span class="btn" @click="setOne">验证</span>
      </div>
      <div class="input" v-if="index==2">
        <div class="mess">
          <yd-cell-item>
            <span slot="left">姓名：</span>
            <yd-input
              :show-success-icon="false"
              slot="right"
              v-model="name"
              max="8"
              placeholder="请输入您的姓名"
            ></yd-input>
          </yd-cell-item>
          <div class="address">
            <router-link to="/address">
              <i class="el-icon-circle-plus"></i>&nbsp;添加住址
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="success">
      <i class="el-icon-success"></i>
      <p>提交成功</p>
      <p class="tip">您的资料经物业审核后,结果将在服务号通知</p>
      <yd-button size="large" bgcolor="#108EE9" color="#ffffff">返回</yd-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      index: 1,
      yzm: "",
      start: false
    };
  },
  created() {
    this.index = this.$route.params.type || 1;
  },
  methods: {
    sendCode1() {
      this.$dialog.loading.open("发送中...");
      setTimeout(() => {
        this.start = true;
        this.$dialog.loading.close();

        this.$dialog.toast({
          mes: "已发送",
          icon: "success",
          timeout: 1500
        });
      }, 1000);
    }
  },
  methods: {
    setOne() {
      this.index = 2;
    },
    addAddress() {
      this.$router.push({
        name: "address"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  .success {
    i {
      font-size: 2rem;
      color: #108ee9;
      margin-bottom: 0.2rem;
    }
    padding: 0.3rem;
    text-align: center;
    .tip {
      margin: 0.2rem;
      font-size: 0.25rem;
      color: #666;
    }
  }
  img {
    width: 100%;
    display: block;
    // padding-bottom:.5rem;
  }
  .step {
    padding-top: 0.28rem;
    background: rgb(223, 238, 255);
    height: 1.5rem;
  }
  .input {
    padding-top: 0.3rem;
  }
  .btn {
    margin-top: 0.5rem;
    display: block;
    line-height: 0.9rem;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.9rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    color: #fff;
    text-align: center;
    box-shadow: 0px 3px 8px 0px rgba(135, 198, 255, 1);
    border-radius: 2px;
  }
  .btn:active {
    background: rgba(106, 197, 248, 1);
  }
  .mess {
    background: #fff;
    .address {
      color: #2085ff;
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
    }
  }
  //   padding-top: 0.2rem;
}
</style>