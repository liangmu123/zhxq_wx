<template>
  <div>
    <div class="header">
      <img :src="userMess.img" alt />
      <div class="header-mess">
        <p class="mess">
          {{userMess.userName}}
          <span>{{userMess.role}}</span>
        </p>
        <p class="adress">住址：{{userMess.address}}</p>
      </div>
      <p>
        <img src="../assets/images/right.png" alt />
      </p>
    </div>
    <p class="excessive"></p>
  </div>
</template>

<script>
export default {
  name: "userHeader",
  data() {
    return {
      userMess: {
        img: "",
        userName: "周凯",
        role: "业主",
        address: "11幢2004"
      }
    };
  },
  created() {
    let user = this.$store.state.user;
    console.log(user);
    this.userMess = user;
    this.userMess.img = user.image;
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  height: 2rem;
  width: 100%;
  //   border: 1px solid red;
  > img {
    display: block;
    float: left;
    margin: 0.3rem 0.3rem;
    width: 1.3rem;
    height: 1.3rem;
  }
  .header-mess {
    float: left;
    .mess {
      margin-top: 0.25rem;
      width:3.2rem;
      font-weight: bold;
      > span {
        margin-top: 0.03rem;
        display: block;
        float: right;
        letter-spacing: 0.05rem;
        font-weight: normal;
        color: #fff;
        padding: 0.1rem 0.28rem;
        font-size: 0.2rem;
        background: linear-gradient(
          135deg,
          rgba(106, 197, 248, 1) 0%,
          rgba(150, 198, 255, 1) 100%
        );
        border-radius: 2px;
      }
    }
    .adress {
      margin-top: 0.2rem;
      font-size: 0.35rem;
    }
  }
  > p {
    display: block;
    float: right;
    padding-right: 0.25rem;
    line-height: 2rem;
    img {
      height: 0.5rem;
      width: 0.3rem;
    }
  }
}
.excessive {
  height: 0.2rem;
  width: 100%;
  background: #ddd;
}
</style>