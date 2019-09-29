<template>
  <div class="login box-content">
    <div v-if="index!=3">
      <img src="@assets/images/banner.png" alt />
      <div class="step">请登录验证信息</div>
      <div class="input" v-if="index==1">
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">姓名：</span>
            <yd-input
              :show-success-icon="false"
              slot="right"
              v-model.trim="name"
              max="8"
              placeholder="请输入您的姓名"
            ></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" v-model.trim="mobile" regex="mobile" placeholder="请输入手机号码"></yd-input>
            <yd-sendcode
              v-show="isSetCard"
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
              v-model.trim="yzm"
              max="8"
              placeholder="请输入验证码"
            ></yd-input>
          </yd-cell-item>
        </yd-cell-group>
        <span class="btn" @click="login">登录</span>
      </div>
    </div>
    <div v-else class="success">
      <i class="el-icon-success"></i>
      <p>登录成功</p>
      <p class="tip">{{time}}s 后将自动跳转到首页</p>
      <yd-button size="large" bgcolor="#108EE9" color="#ffffff" @click="back">返回</yd-button>
    </div>
  </div>
</template>


<script>
import { messSend, userBind } from "@api/api";
export default {
  data() {
    return {
      time: 3,
      mobile: "",
      name: "",
      index: 1,
      yzm: "",
      start: false
    };
  },
  created() {
    // if(this)
  },
  computed: {
    isSetCard() {
      if (/^1[3456789]\d{9}$/.test(this.mobile)) {
        return true;
      }
      return false;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
      clearInterval(this.inter);
    },
    sendCode1() {
      this.$dialog.loading.open("发送中...");
      let params = {
        mobile: this.mobile
      };
      messSend(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          setTimeout(() => {
            this.start = true;
            this.$dialog.loading.close();
            this.$dialog.toast({
              mes: "已发送",
              icon: "success",
              timeout: 1200
            });
          }, 1000);
        }
      });
    },
    login() {
      if (!(this.mobile && this.name && this.yzm)) {
        this.$dialog.toast({
          mes: "输入内容不为空",
          timeout: 1500
        });
        return;
      }
      let params = {
        mobile: this.mobile,
        username: this.name,
        captcha: this.yzm
      };
      userBind(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          let user = {
            role: res.data.rolename,
            userName: res.data.person.name,
            mobile: res.data.person.mobile,
            image: res.data.person.image,
            address: res.data.person.room_text
          };
          this.$store.dispatch("setUser", user);
          var userStr = JSON.stringify(user);
          localStorage.setItem("user", userStr);
          this.index = 3;
          this.inter = setInterval(() => {
            if (this.time > 1) {
              this.time--;
            } else {
              this.$router.go(-1);
              clearInterval(this.inter);
            }
          }, 1000);
        } else {
          this.$dialog.toast({
            mes: res.msg,
            timeout: 1500
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
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
    line-height: 1rem;
    text-align: center;
    color: #2085ff;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );

    height: 1rem;
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
  //   padding-top: 0.2rem;
}
</style>