<template>
  <div class="report box-content">
    <yd-cell-group>
      <yd-cell-item>
        <yd-input slot="right" v-model.trim="title" placeholder="请输入标题"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <yd-input slot="right" v-model.trim="address" placeholder="请输入地点"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <yd-textarea slot="right" v-model.trim="textArea" placeholder="请输入正文" maxlength="200"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <upload @handlePath="getPath"></upload>

    <span class="btn" @click="handleUpload">提交</span>
  </div>
</template>

<script>
import { report } from "@api/api";
import upload from "@components/upload";
export default {
  components: {
    upload
  },
  data() {
    return {
      title: "",
      address: "",
      textArea: "",
      pathList: []
    };
  },
  methods: {
    handleUpload() {
      if (!this.title) {
        this.$dialog.toast({
          mes: "标题不能为空",
          timeout: 1500
        });
        return;
      }
      if (!this.textArea) {
        this.$dialog.toast({
          mes: "内容不能为空",
          timeout: 1500
        });
        return;
      }
      let params = {
        title: this.title,
        content: this.textArea,
        address: this.address,
        type: 4,
        images: this.pathList.join(",")
      };
      report(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.$dialog.toast({
            mes: "上传成功",
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
    },
    getPath(data) {
      console.log(data);
      this.pathList = data;
    }
  }
};
</script>

<style lang="scss">
.report {
  padding: 0.2rem;
  .yd-textarea > textarea {
    height: 3.5rem;
  }
  .el-upload-list--picture-card .el-upload-list__item,
  .el-upload--picture-card {
    width: 2.2rem;

    height: 2.2rem;
  }
  .el-upload--picture-card {
    line-height: 2.2rem;
  }
  .btn {
    display: block;
    margin: 0.5rem auto;
    margin-bottom: 1rem;
    width: 2.24rem;
    height: 0.81rem;
    background: linear-gradient(
      135deg,
      rgba(106, 197, 248, 1) 0%,
      rgba(150, 198, 255, 1) 100%
    );
    box-shadow: 0px 2px 7px 0px rgba(135, 198, 255, 0.5);
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 0.81rem;
  }
  .btn:active {
    background: rgba(106, 197, 248, 1);
  }
}
</style>