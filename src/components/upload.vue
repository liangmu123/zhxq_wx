<template>
  <div class="upload-img">
    <p class="tip">
      图片上传：(最多{{MAX_IMG}}张，还可上传
      <span v-text="MAX_IMG-imgList.length"></span>张)
    </p>
    <div
      class="image-list"
      v-for="(item,index) in imgList"
      :key="item+index"
      v-show="imgList.length"
    >
      <span>
        <i class="el-icon-close" @click.stop="delImg(index)" />
      </span>
      <img v-lazy="item.src" @click="show(index)" />
    </div>

    <div class="add" @click="handleAddImage" v-show="MAX_IMG-imgList.length">
      <i class="el-icon-plus"></i>
      <input
        @change="fileChange($event)"
        type="file"
        id="upload_file"
        multiple
        style="display: none"
      />
    </div>
    <transition
      mode="in-out"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div class="showImg" v-show="isShow" @click="show">
        <img :src="imagePath" alt />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      MAX_IMG: 4, //限制图片上传的最大数量
      imgList: [],
      pathList: [],
      imagePath: "",
      isShow: false,
      size: 0 //文件大小
    };
  },
  methods: {
    show(index) {
      if (!this.isShow) {
        //   console.log(this.imgList[index].src)
        this.imagePath = this.imgList[index].src;
      }
      this.isShow = !this.isShow;
      //   console.log(111);
    },
    //上传触发
    handleAddImage() {
      document.getElementById("upload_file").click();
    },
    //上传处理
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      this.size = this.size + file.size;
      var formData = new FormData(); // 声明一个FormData对象
      this.formData = new window.FormData();
      this.formData.append("file", file);
      //判断是否为图片文件
      if (!file.type.includes("image")) {
        this.$dialog.toast({ mes: "请选择图片文件" });
      } else {
        let reader = new FileReader();
        // let image = new Image();
        reader.readAsDataURL(file);
        reader.onload = evnet => {
          file.src = event.target.result;
          //   console.log(file.src);
          this.imgList.push(file);
        };
        this.$axios
          .post(
          '/api/common/upload',
            this.formData,
            {
              headers: { "Content-Type": "multipart/form-data" }
            }
          )
          .then(res => {
            console.log(res.data.url);
            this.pathList.push(res.data.url);
            this.$emit("handlePath", this.pathList);
          });
      }
    },
    //图片删除
    delImg(index) {
      this.$dialog.confirm({
        title: " ",
        mes: "是否删除该图片？",
        opts: () => {
          this.size = this.size - this.imgList[index].size; //总大小
          this.imgList.splice(index, 1);
          this.pathList.splice(index, 1);
          this.$emit("handlePath", this.pathList);
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.upload-img {
  overflow: hidden;
  .showImg {
    // display: flex;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: 10;
    background: rgb(0, 0, 0, 0.8);
    img {
      display: block;
      margin-left: 50%;
      margin-top: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
    }
  }
  .tip {
    font-size: 0.25rem;
    margin: 0.2rem;
  }
  .add,
  .image-list {
    width: 2.2rem;
    height: 2.2rem;
    border: 1px dashed #c0ccda;
    background-color: #fbfdff;
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.2rem;
    float: left;
    margin: 0.1rem 0.08rem;
  }
  .add {
    font-size: 1rem;
  }
  .image-list {
    position: relative;
    line-height: 0;
  }
  .image-list > span {
    right: 0;
    top: 0;
    height: 0.4rem;
    width: 0.4rem;
    display: block;
    background: #fbfdff;
    position: absolute;
    z-index: 3;
  }
  .image-list > img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>