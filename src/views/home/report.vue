<template>
  <div class="report">
    <yd-cell-group>
      <yd-cell-item>
        <yd-input slot="right" v-model="mess.title" placeholder="请输入标题"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <yd-textarea slot="right" v-model="mess.textArea" placeholder="请输入正文" maxlength="200"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <el-upload
      action="http://dycms.cst-info.cn/api/v2/commons/swf_upload_pic"
      list-type="picture-card"
      :on-success="handleSuccess"
      :on-progress="handleProgress"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-error="handleError"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>

    <span class="btn">提交</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      mess: {
        title: "",
        textArea: ""
      }
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList, "success");
    },
    handleProgress(event, file, fileList) {
      console.log(event, file, fileList, "progress");
    },
    handleError(err, file, fileList) {
      console.log(err, file, fileList, "error");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, "remove");
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
    margin: 0.8rem auto;
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