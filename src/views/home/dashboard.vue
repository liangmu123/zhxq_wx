<!-- 首页 -->
<template>
  <div id="dashboard" class="ysp_navigation_bottom">
    <yd-slider autoplay="3000" class="header">
      <yd-slider-item v-for="(item,index) in adverList" :key="index">
        <img :src="item.src" />
      </yd-slider-item>
    </yd-slider>
    <!-- 首页导航条 -->
    <navtab></navtab>

    <!-- 通知公告 -->
    <div class="home-notice" v-if="list.length > 0">
      <p>
        <router-link to="/notice">通知公告</router-link>
        <img src="@assets/images/homeNotice.png" alt />
      </p>
      <div class="notice-content">
        <p v-for="(item,index) in list" :key="item+index" @click="infoDetail(item.id)">
          <span class="textoverflow">{{item.title}}</span>
          <span>{{item.time}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
/**
 *
 * @param {*} navtab  导航条组件
 */
import navtab from "@components/navtab";
import { noticeList ,imageList} from "@/api/api";

export default {
  name: "dashboard",
  data() {
    return {
      list: [

      ],
      adverList: [
        // { src: require("@assets/images/banner.png") },
        // { src: require("@assets/images/banner.png") },
        // { src: require("@assets/images/banner.png") }
      ]
    };
  },
  components: {
    navtab
  },
  created() {
    let params = { page: 1, pagesize: 4 };
    noticeList(params).then(res => {
      this.list = res.data.items.map(item => {
        return {
          id: item.id,
          title: item.title,
          time: item.createtime.split(' ')[0]
        };
      });
    });
    imageList( { page: 1, pagesize: 10}).then(res=>{
      console.log(res.data.items)
      this.adverList =res.data.items.map(item=>{
        return{
          src:item.image
        }
      })
    })
  },
  methods: {
    infoDetail(id) {
      this.$router.push({
        name: "infoDetail",
        params: { id }
      });
    }
  }
};
</script>
<style lang="scss">
.yd-slider-pagination {
  bottom: 0.5rem;
}
.header img {
  width: 100%;
}
.home-notice {
  margin-top: 3.2rem;
  height: 4rem;
  //   border: 1px solid red;
  padding: 0.2rem;
  > p {
    // line-height: 0.3rem;
    font-size: 0.3rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    height: 0.5rem;
    img {
      height: 0.3rem;
      margin: 0 0.1rem;
    }
  }
  .notice-content {
    > p {
      overflow: hidden;
      margin-top: 0.3rem;
      width: 100%;
      color: #000;
      font-size: 0.3rem;
      span {
        float: left;
        display: block;
        width: 75%;
      }
      span:last-child {
        color: #666;
        width: 25%;
        float: right;
        text-align: right;
      }
    }
  }
}
</style>