<template>
  <div class="address">
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left">住址：</span>
        <input id="trigger1" slot="right" type="text" v-model="address" readonly placeholder="请选择" />
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">身份：</span>
        <input id="trigger2" slot="right" type="text" v-model="identity" readonly placeholder="请选择" />
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">设为默认地址：</span>
        <yd-switch slot="right" placeholder="请选择" v-model="switchAddress"></yd-switch>
      </yd-cell-item>
    </yd-cell-group>
    <span class="cancel" @click="cancel">取消</span>
    <span @click="save">保存</span>
  </div>
</template>

<script >
import PickerExtend from "picker-extend";
export default {
  data() {
    return {
      isShow1: false,
      isShow2: false,
      mySelect1: {},
      mySelect2: {},
      switchAddress: false,
      address: "",
      addressList: [
        {
          data: [
            {
              id: "1",
              value: "尚城名门",
              childs: [
                {
                  id: "1",
                  value: "1号",
                  childs: [
                    { id: "1", value: "1单元" },
                    {
                      id: "2",
                      value: "2单元",
                      childs: [
                        { id: "1", value: "201" },
                        { id: "2", value: "202" }
                      ]
                    }
                  ]
                },
                { id: "2", value: "2000米" },
                { id: "3", value: "3000米" },
                { id: "4", value: "5000米" },
                { id: "5", value: "10000米" }
              ]
            },
            { id: "2", value: "上城区" },
            { id: "3", value: "下城区" },
            { id: "4", value: "江干区" },
            { id: "5", value: "拱墅区" },
            { id: "6", value: "西湖区" }
          ]
        }
      ],
      identity: "",
      identityList: [
        {
          data: [
            { id: "1", value: "租户" },
            { id: "2", value: "业主" },
            { id: "3", value: "长期租客" },
            { id: "4", value: "限期租客" },
            { id: "5", value: "西湖区" }
          ]
        }
      ]
    };
  },
  mounted() {
    var _self = this;
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
    this.mySelect1 = new PickerExtend({
      trigger: "#trigger1",
      title: "请选择住址",
      wheels: this.addressList,
      onShow: e => {
        // console.log(e);
        _self.isShow1 = true;
      },
      onHide: e => {
        _self.isShow1 = false;
      },
      callback: (indexArr, data) => {
        data.forEach(item => {
          // console.log(item);
          this.address += item.value + "  ";
        });
        // console.log(this.address);
      }
    });
    this.mySelect2 = new PickerExtend({
      trigger: "#trigger2",
      title: "请选择身份",
      wheels: this.identityList,
      onShow: e => {
        // console.log(e);
        _self.isShow2 = true;
      },
      onHide: e => {
        _self.isShow2 = false;
      },
      callback: (indexArr, data) => {
        data.forEach(item => {
          // console.log(item);
          this.identity = item.value;
        });
        // console.log(this.address);
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.goBack, false);
  },
  methods: {
    goBack() {
      // console.log(this.isShow1, this.isShow2);
      if (this.isShow1 || this.isShow2) {
        this.mySelect1.hide();
        this.mySelect2.hide();
      } else {
        // console.log("goback");
        // console.log(this.address, this.identity);
        if (this.address || this.identity) {
          // console.log("界面上有数据");
          this.$dialog.confirm({
            title: " ",
            mes: "页面数据会被清空，是否继续跳转？",
            opts: () => {
              this.$router.push({
                name: "register",
                params: { type: 2 }
              });
            }
          });
        } else {
          this.$router.push({
            name: "register",
            params: { type: 2 }
          });
        }
      }

      history.pushState(null, null, null);
    },
    cancel() {
      this.$router.go(-1);
    },
    save() {
      this.$router.push({
        name: "register",
        params: { type: 3 }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.address {
  > span {
    margin: 0.5rem 0.44rem;
    display: block;
    float: left;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.74rem;
    color: #fff;
    width: 2.84rem;
    height: 0.74rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    box-shadow: 0px 3px 8px 0px rgba(135, 198, 255, 1);
    border-radius: 2px;
  }
  span:active {
    background: rgba(106, 197, 248, 1);
  }
  > .cancel {
    background: rgba(209, 209, 209, 1);
    box-shadow: 0px 3px 8px 0px rgb(185, 184, 184, 1);
    color: #000;
  }
  .cancel:active {
    background: #aaa;
  }
}
</style>