<template>
  <div class="my-cars box-content">
    <userHeader />
    <div class="content">
      <div
        class="content-list"
        v-for="(item,index) in carList"
        :key="item+index"
        @click="addCar(index)"
      >{{item}}</div>
      <div class="add-list" @click="addCar">添加车辆信息</div>
    </div>
    <yd-popup :close-on-masker="false" v-model="isShow" position="center" width="90%">
      <div class="from-content">
        <i class="el-icon-close" @click="addCar"></i>
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">牌照号：</span>
            <yd-input
              slot="right"
              :show-success-icon="false"
              v-model="card"
              max="20"
              placeholder="请输入牌照号"
            ></yd-input>
          </yd-cell-item>
        </yd-cell-group>
        <yd-button type="primary" @click.native="addTrue">确认</yd-button>
      </div>
    </yd-popup>
  </div>
</template>

<script>
import { getCarno, updateInfo } from "@api/api";
import userHeader from "@components/userHeader.vue";
export default {
  name: "mycars",
  components: { userHeader },
  data() {
    return {
      isShow: false,
      status: 0, // 0添加 ,1修改
      card: "",
      updateIndex: -1,
      carList: []
    };
  },
  created() {
    getCarno().then(res => {
      console.log(res);
      this.carList = res.data;
    });
  },
  methods: {
    addCar(index) {
      console.log(typeof val);
      if (typeof index == "number") {
        this.status = 1;
        this.card = this.carList[index];
        this.updateIndex = index;
      } else {
        this.status = 0;
        this.card = "";
      }
      this.isShow = !this.isShow;
    },
    addTrue() {
      // console.log(index, typeof index);
      if (this.status == 1 && this.updateIndex >= 0) {
        this.carList[this.updateIndex] = this.card;
      } else {
        this.carList.push(this.card);
      }

      console.log(this.carList, this.carList.join(","));
      let params = {
        carno: this.carList.join(",")
      };
      updateInfo(params).then(res => {
        if (res.code == 1) {
          this.$dialog.toast({
            mes: "添加成功",
            timeout: 1500,
            icon: "success"
          });
          this.isShow = !this.isShow;
          this.status = 0;
          this.updateIndex = -1;
        }else{
           this.$dialog.toast({
            mes: res.msg,
            timeout: 1500,
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.yd-cell-item:not(:last-child):after {
  margin-bottom: 0.05rem;
}
.content {
  //   padding-bottom: 1.5rem;
  .content-list {
    width: 7.18rem;
    height: 2.7rem;
    background: url("../../assets/images/carBg.png");
    background-size: 100% 100%;
    margin: 0.3rem auto;
    color: #fff;
    line-height: 2.7rem;
    text-align: right;
    font-size: 0.55rem;
    padding-right: 1rem;
  }
  .add-list {
    width: 7.18rem;
    height: 2.7rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    border-radius: 5px;
    margin: 0.3rem auto;
    font-size: 0.3rem;
    text-align: center;
    line-height: 2.7rem;
    color: #fff;
  }
  .add-list:active {
    background: rgba(106, 197, 248, 1);
  }
}
.from-content {
  text-align: right;
  background-color: #fff;
  padding: 0.2rem;
  .set-card {
    font-size: 0.25rem;
    float: left;
    color: rgb(116, 197, 249);
  }
  .set-card:active {
    color: blue;
  }
}
</style>