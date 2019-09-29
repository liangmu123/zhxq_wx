<template>
  <div class="feedback box-content">
    <yd-cell-group>
      <yd-cell-item>
        <yd-textarea slot="right" v-model.trim="textArea" placeholder="请输入内容" maxlength="200"></yd-textarea>
      </yd-cell-item>
      <yd-cell-item>
        <yd-input slot="right" v-model.trim="people" placeholder="请输入协同人员"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <upload @handlePath="getPath"></upload>

    <span class="btn" @click="handleUpload">提交</span>
  </div>
</template>



<script>
import { handWork } from "@api/api";
import upload from "@components/upload";
export default {
  components: {
    upload
  },
  data() {
    return {
      textArea: "",
      people: "",
      pathList: []
    };
  },
  methods: {
    handleUpload() {
      if (!this.textArea) {
        this.$dialog.toast({
          mes: "内容不能为空",
          timeout: 1500
        });
        return;
      }
      let params = {
        event_id: this.$route.params.id,
        content: this.textArea,
        partake: this.people,
        images: this.pathList.join(",")
      };
      handWork(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.$dialog.toast({
            mes: "上传成功",
            timeout: 1500,
            icon: "success"
          });
          setTimeout(() => {
            this.$router.go(-2);
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

<style lang="scss" scoped>
.feedback {
  padding: 0.2rem 0.1rem;
  .btn {
    display: block;
    margin: 1rem auto;
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