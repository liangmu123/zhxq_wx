<template>
    <div class="ysp_videoDetails ysp_navigation_bottom">
        <h2 class="title">但是看见的开始打瞌睡的快速搭建</h2>
        <p class="time">2019-10-06</p>
        <!-- 视频播放 -->
        <ckplayer></ckplayer>
        <live-ckplayer></live-ckplayer>
        <div class="content">
            djksdjskd打开电视看几点开始就打开速度极快速度就
        </div>
    </div>
</template>
<script>
    import ckplayer from '@components/ckplayer'
    import LiveCkplayer from '@components/LiveCkplayer'
    export default {
        name:'videoDetails',
        data(){
            return {
            }
        },
        components:{
            ckplayer,
            LiveCkplayer
        }
    }
</script>
<style scoped>
    .ysp_videoDetails{
        background-color: #fff;
        padding:1rem 2rem;
        min-height: 100%;
    }
    .ysp_videoDetails .title{
        font-size:2rem;
        line-height:2.2rem;
        color:#333333;
        font-weight: normal;
        margin-bottom:0.5rem;
    }
    .ysp_videoDetails .time{
        font-size:1.6rem;
        color:#999999;
        margin-bottom:1rem;
    }
    .content{
        padding-top:1rem;
        font-size:1.8rem;
        color:#333333;
    }
</style>