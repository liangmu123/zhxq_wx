<!-- 学分兑换 -->
<template>
  <div id="appointment" class="ysp_navigation_bottom">
    <div class="image-banner">
      <img src="@assets/images/banner.png" alt="bannner" />
    </div>
    <div class="appointment-content">
      <p class="content-title">建华小区访客预约码</p>
      <div class="content-box">
        <img src alt />
      </div>
      <p class="content-refresh">
        <span @click="handleRefresh">
          <img src="@assets/images/refresh.png" alt />
          {{loading.loadingText}}
        </span>
      </p>
      <p class="content-refresh">
        <img src="@assets/images/tip.png" alt />二维码生效时间为4小时，请及时使用
      </p>
      <div class="content-share">
        <img src="@assets/images/wx.png" alt />
        <img src="@assets/images/qq.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "creditExchange",
  data() {
    return {
      loading: {
        isLoading: false,
        loadingText: "手动刷新"
      }
    };
  },
  created() {},
  methods: {
    handleRefresh() {
      if (!this.loading.isLoading) {
        this.loading.isLoading = true;
        this.loading.loadingText = "正在刷新...";
        if (this.loading.isLoading) {
          setTimeout(() => {
            this.loading.isLoading = false;
            this.loading.loadingText = "手动刷新";
          }, 2000);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#appointment {
  .image-banner {
    width: 100%;
    > img {
      height: 100%;
      width: 100%;
    }
  }
  .appointment-content {
    transform: translateY(-8%);
    margin: auto;
    width: 6.35rem;
    height: 8.32rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 7px 0px rgba(186, 186, 186, 0.5);
    border-radius: 5px;
    .content-title {
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      margin-bottom: 0.3rem;
      //   border: 1px solid red;
    }
    .content-box {
      height: 4rem;
      width: 4rem;
      margin: auto;
      //   border: 1px solid red;
      background-image: url("../../assets/images/content-box.png");
      background-size: 100% 100%;
      > img {
        display: block;
        height: 80%;
        width: 80%;
        margin: auto;
        transform: translateY(10%);
        border: 1px solid red;
      }
    }
    .content-refresh {
      margin-top: 0.25rem;
      width: 100%;
      text-align: center;
      img {
        height: 0.3rem;
        margin-right: 0.3rem;
      }
      font-size: 0.28rem;
      color: #666;
    }
    .content-share {
      width: 100%;
      text-align: center;
      img {
        margin: 0.5rem .6rem;
        height: 0.6rem;
      }
    }
  }
}
</style>