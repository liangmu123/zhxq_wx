<template>
  <div class="vote">
    <div class="vote-list" v-for="(item, key) in list" :key="item+key">
      <img :src="item.img" />
      <p class="title">
        <span class="textoverflow">{{item.address}}</span>
        <span class="textoverflow">{{item.voteNumber}}</span>
      </p>
      <div class="btn" :style="{background:(item.isCur?'#999':'')}">{{item.isCur?"已投票":"给TA投票"}}</div>
    </div>
  </div>
</template>

<script>
import { voteList } from "@api/api";
export default {
  data() {
    return {
      list: [
        {
          img: require("@assets/images/user.png"),
          address: "标题111标题标题标题标题",
          voteNumber: 156,
          isCur: false
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题222标题标题标题标题",
          voteNumber: 256,
          isCur: false
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题333标题标题标题标题",
          voteNumber: 356,
          isCur: false
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题444标题标题标题标题",
          voteNumber: 456,
          isCur: true
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题555标题标题标题标题",
          voteNumber: 556,
          isCur: true
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题666标题标题标题标题",
          voteNumber: 656,
          isCur: false
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题555标题标题标题标题",
          voteNumber: 556,
          isCur: true
        },
        {
          img: require("@assets/images/user.png"),
          address: "标题666标题标题标题标题",
          voteNumber: 656,
          isCur: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.vote {
  padding-bottom: 2rem;
  overflow: hidden;
  .vote-list {
    margin: 0.1rem 0.1rem 0.4rem 0.1rem;
    width: 3.5rem;
    height: 4.68rem;
    float: left;
    img {
      width: 100%;
      height: 80%;
    }
    .title {
      overflow: hidden;
      font-size: 0.25rem;
      font-family: PingFangSC;
      font-weight: 400;
      line-height: 16px;
      span:first-child {
        display: block;
        float: left;
        width: 80%;
      }
      span:last-child {
        display: block;
        float: right;
        width: 20%;
        text-align: right;
      }
    }
    .btn {
      background: linear-gradient(
        135deg,
        rgba(106, 197, 248, 1) 0%,
        rgba(150, 198, 255, 1) 100%
      );
      width: 100%;
      height: 0.6rem;
      font-size: 0.25rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
    }
    .btn:active {
      background: rgba(106, 197, 248, 1);
    }
  }
}
</style>