<template>
  <div class="vote-detail box-content">
    <p class="title">{{mess.title}}</p>
    <p class="mess">
      <span>{{mess.format_start_time}}</span>
      <span>{{mess.joincount}}人参与</span>
      <span :class="mess.status==1?'active':''">{{mess.status==0?'未开始':mess.status==1?'进行中':'已完成'}}</span>
    </p>
    <p class="tip">活动时间：{{this.mess.format_start_time}} - {{this.mess.format_end_time}}</p>
    <p class="tip">限制次数：{{this.mess.can_use_tickets}}次/人</p>
    <p class="cole">选项</p>
    <yd-radio-group v-model="check">
      <yd-radio v-for="(item,index) in optionList" :key="item+index" :val="item.id">{{item.title}}</yd-radio>
    </yd-radio-group>
    <span class="btn" @click="curBtn">提交</span>
  </div>
</template>

<script>
import { voteDetail, handleVote } from "@api/api";
export default {
  data() {
    return {
      optionList: [],
      mess: {},
      check: ""
    };
  },
  created() {
    let params = {
      id: this.$route.params.id
    };
    voteDetail(params).then(res => {
      //   console.log(res.data);
      this.mess = res.data.vote;
      this.optionList = res.data.options;
      console.log(this.mess, this.optionList);
    });
  },
  methods: {
    curBtn() {
      console.log(this.check);
      if (!this.check) {
        this.$dialog.toast({
          mes: "请先选择投票内容",
          timeout: 1500
        });
        return;
      }
      let params = {
        id: this.$route.params.id,
        oid: this.check
      };
      handleVote(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.$dialog.toast({
            mes: "投票成功",
            timeout: 1500,
            icon: "success"
          });
          setTimeout(() => {
            this.$router.go(-1);
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
.yd-radio {
  margin-left: 0.4rem;
  display: block;
  width: 100%;
}

.vote-detail {
  padding: 0 0.1rem;
  font-size: 0.3rem;
  .title {
    margin: 0.15rem 0;
    font-weight: bold;
  }
  .mess {
    margin-bottom: 0.2rem;
    color: #999;
    span {
      margin-right: 0.25rem;
    }
  }
  .tip {
    margin-bottom: 0.1rem;
  }
  .cole {
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    color: #999;
  }
  .btn {
    display: block;
    color: #fff;
    text-align: center;
    margin: 1rem auto;
    line-height: 0.8rem;
    width: 2.24rem;
    height: 0.8rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    box-shadow: 0px 2px 7px 0px rgba(135, 198, 255, 0.5);
    border-radius: 5px;
  }
  .active {
    color: #ff4545;
  }
}
</style>