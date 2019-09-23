<template>
  <div class="repair-detail">
    <p>{{title}}</p>
    <div class="repair-content">
      <i class="el-icon-arrow-left" v-if="userList.length>1" @click="handlePostion(0)"></i>
      <div class="repair-box">
        <img class="user-header" src="@assets/images/user.png" alt />
        <p>维修师傅：{{userMess.name}}</p>
        <p>维修热线：{{userMess.phone}}</p>
        <p>维修时间：{{userMess.time}}</p>
        <span class="btn">一键拨号</span>
      </div>
      <i v-if="userList.length>1" class="el-icon-arrow-right" @click="handlePostion(1)"></i>
    </div>

    <div class="cur">
      <img
        :src="userMess.isCur?require('@assets/images/curTrue.png'):require('@assets/images/curFalse.png')"
        alt
        @click="handleCur()"
      />
      <p>{{userMess.curNumber}}</p>
      <p v-show="!userMess.isCur" class="cur-btn" @click="handleCur()">给他点赞</p>
    </div>
  </div>
</template>

<script>
import { servicelist } from "@api/api";
export default {
  data() {
    return {
      title: "",
      nowIndex: 0,
      userMess: {
        header: "",
        name: "",
        phone: "",
        time: "",
        isCur: false,
        curNumber: 0
      },
      userList: []
    };
  },
  created() {
    let id = this.$route.params.id;
    switch (Number(id)) {
      case 1:
        this.title = "防水堵漏";
        break;
      case 2:
        this.title = "快速开锁";
        break;
      case 3:
        this.title = "墙体修复";
        break;
      case 4:
        this.title = "空调维修";
        break;
      case 5:
        this.title = "家电维修";
        break;
      case 6:
        this.title = "家具维修";
        break;
      case 7:
        this.title = "玻璃更换";
        break;
      default:
        break;
    }
    let params = {
      page: 1,
      pagesize: 100
    };
    servicelist(params)
      .then(res => {
        console.log(res.data.items);
        this.userList = res.data.items.map(item => {
          return {
            header: require("@assets/images/user.png"),
            name: item.name,
            phone: item.mobile,
            time: "不想干",
            isCur: true,
            curNumber: 35
          };
        });
      })
      .then(data => {
        this.getList();
      });
  },
  methods: {
    handleCur() {
      if (!this.userMess.isCur) {
        this.userMess.isCur = !this.userMess.isCur;
        this.userMess.curNumber++;
      }
    },
    getList() {
      this.userMess = this.userList[0];
    },
    handlePostion(type) {
      if (type) {
        if (this.nowIndex == this.userList.length - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
      } else {
        if (this.nowIndex == 0) {
          this.nowIndex = this.userList.length - 1;
        } else {
          this.nowIndex--;
        }
      }
      this.userMess = this.userList[this.nowIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
.repair-detail {
  > p {
    text-align: center;
    color: #000;
    line-height: 1.2rem;
    font-size: 0.5rem;
    height: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .repair-content {
    position: relative;
    width: 100%;
    i {
      display: block;
      font-size: 0.8rem;
      position: absolute;
      font-weight: bold;
      line-height: 7.4rem;
      color: #666;
    }
    i:last-child {
      top: 0;
      right: 0;
    }
    i:active {
      color: #333;
    }
    .repair-box {
      height: 7.4rem;
      width: 5.5rem;
      margin: auto;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 2px 7px 0px rgba(179, 209, 255, 0.5);
      border-radius: 5px;
      .user-header {
        width: 2.22rem;
        height: 2.54rem;
        margin-top: 10%;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 0.3rem;
      }
      p {
        text-align: center;
        margin-top: 0.2rem;
        line-height: 0.5rem;
      }
      .btn {
        display: block;
        color: #fff;
        width: 2.22rem;
        height: 0.81rem;
        background: linear-gradient(
          135deg,
          rgba(106, 197, 248, 1) 0%,
          rgba(150, 198, 255, 1) 100%
        );
        box-shadow: 0px 2px 7px 0px rgba(135, 198, 255, 1);
        border-radius: 5px;
        line-height: 0.81rem;
        text-align: center;
        margin: 0.6rem auto;
      }
      .btn:active {
        background: #6ac5f8;
      }
    }
  }
  .cur {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    img {
      height: 0.6rem;
    }
    p {
      text-align: center;
    }
    .cur-btn {
      margin-top: 0.1rem;
      color: #666;
      font-size: 0.25rem;
    }
    .cur-btn:active {
      color: #333;
    }
  }
}
</style>