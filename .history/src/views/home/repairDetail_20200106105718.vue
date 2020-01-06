<template>
  <div class="repair-detail">
    <p>{{title}}</p>

    <div class="repair-content" v-if="userList.length">
      <i class="el-icon-arrow-left" v-if="userList.length>1" @click="handlePostion(0)"></i>
      <div class="repair-box">
        <img class="user-header" :src="userMess.header" alt />
        <p>维修师傅：{{userMess.name}}</p>
        <p>维修热线：{{userMess.phone}}</p>
        <p>维修时间：{{userMess.time}}</p>
        <span class="btn">
          <a>一键拨号</a>
        </span>
      </div>
      <i v-if="userList.length>1" class="el-icon-arrow-right" @click="handlePostion(1)"></i>
    </div>
    <span class="noBody" v-else>暂无相关维修人员,请联系物业人员</span>
    <div class="cur" v-if="userList.length">
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
import { serviceList, handleLike } from "@api/api";
export default {
  data() {
    return {
      title: "",
      nowIndex: 0,
      userMess: {
        id: 0,
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
    let params = {
      servicetype_id: this.$route.params.id,
      page: 1,
      pagesize: 100
    };
    serviceList(params)
      .then(res => {
        // console.log(res);
        console.log(res.data.items);
        this.title = res.data.servicetype_name;
        this.userList = res.data.items.map(item => {
          console.log(item.image)
          return {
            id: item.id,
            header: item.image,
            name: item.name,
            phone: item.mobile,
            time: item.content,
            isCur: item.liked ? true : false,
            curNumber: item.likenum
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
        let params = {
          id: this.userMess.id,
          type: 1
        };
        handleLike(params).then(res => {
          console.log(res);
          if (res.code == 1) {
            this.$dialog.toast({
              mes: "点赞成功",
              timeout: 1500,
              icon: "success"
            });
            this.userMess.isCur = !this.userMess.isCur;
            this.userMess.curNumber++;
          }
        });
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