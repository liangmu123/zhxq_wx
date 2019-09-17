<!-- 视频列表组件 -->
<template>
    <div class="ysp_video">
        <router-link :to="route + '?id=' + details.id">
            <div class="top">
                <img :src="IMG_PATH + details.img" alt="缩略图">
            </div>
            <p>{{details.title}}</p>
            <img class="position" src="../assets/play.png" alt="播放按钮">
        </router-link>
    </div>
</template>
<script>
    export default {
        props:{
            details:{
                type:Object
            }
        },
        name:'videoComponent',
        data(){
            return {
                route:'',
                IMG_PATH:process.env.VUE_APP_IMG_PATH
            }
        },
        created(){
            if(this.$route.matched[0].path){
                this.route = this.$route.matched[0].path + '/videoDetails'
            }else{
                this.route ='/videoDetails'
            }
        },
    }
</script>
<style scoped>
    .ysp_video{
        padding:1rem 0;
        position: relative;
    }
    .ysp_video .top{
        width:100%;
        margin-bottom:1rem;
    }
    .ysp_video .top img{
        width:100%;
        display:block;
        border-radius:5px;
    }
    .ysp_video>a>p{
        font-size:1.8rem;
        color:#333333;
    }
    .position{
        position: absolute;
        z-index:10;
        top:45%;
        left:50%;
        transform: translate(-50%,-50%);
        width:6rem;
    }
</style>