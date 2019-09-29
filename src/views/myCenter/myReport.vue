<template>
  <div class="myreport box-content">
    <div class="myreport-list" v-for="(item,index) in list" :key="item+index">
      <p class="title" @click="handleDetail(item.id)">
        <span>上报</span>
        {{item.status==1?'未处理':item.status==2?'已分发':item.status==3?'处理中':'待评价'}}&nbsp;
        <i
          class="el-icon-arrow-right"
        ></i>
      </p>
      <p class="time">
        <img src="../../assets/images/time.png" alt srcset />
        {{item.time}}
      </p>
      <p class="biref">
        <i class="circle"></i>
        {{item.title}}
      </p>
      <div class="imgs">
        <img :src="data" v-for="(data,dataIndex) in item.imageList" :key="data+dataIndex" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { myReport, handleList } from "@api/api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    let params = {
      page: 1,
      pagesize: 10
    };
    if (this.$route.name == "myReport") {
      myReport(params).then(res => {
        console.log(res.data.items);
        this.list = res.data.items.map(item => {
          return {
            id: item.id,
            status: item.status,
            title: item.title,
            time: item.createtime,
            imageList: item.images
          };
        });
      });
    } else {
      handleList(params).then(res => {
        this.list = res.data.items.map(item => {
          return {
            id: item.id,
            status: item.status,
            title: item.title,
            time: item.createtime,
            imageList: item.images
          };
        });
      });
    }
  },
  methods: {
    handleDetail(id) {
      let name =
        this.$route.name == "myReport" ? "myreportDetail" : "myhandleDetail";
      this.$router.push({
        name,
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.myreport {
  padding-top: 0.1rem;
  font-size: 0.3rem;
  .myreport-list {
    width: 96%;
    padding: 0.2rem;
    // height: 3rem;
    margin: 0.2rem auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 7px 0px rgba(191, 190, 190, 0.5);
    p {
      margin-bottom: 0.15rem;
    }
    .title {
      font-size: 0.35rem;
      text-align: right;
      span {
        float: left;
      }
    }
    .title:active {
      background: #f2f2f2;
    }
    .time {
      img {
        margin-right: 0.1rem;
        height: 0.3rem;
      }
    }
    .biref {
      overflow: hidden;
      .circle {
        margin-top: 0.05rem;
        display: block;
        float: left;
        border-radius: 50%;
        height: 0.28rem;
        width: 0.28rem;
        margin-right: 0.2rem;
        background: linear-gradient(
          180deg,
          rgba(180, 236, 81, 1) 0%,
          rgba(106, 238, 53, 1) 100%
        );
      }
    }
    .imgs {
      img {
        height: 0.8rem;
        margin: 0.2rem;
      }
    }
  }
}
</style>