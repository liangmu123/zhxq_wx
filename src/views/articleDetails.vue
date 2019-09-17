<template>
    <div class="ysp_articleDetails ysp_navigation_bottom">
        <h2 class="title">{{details.title}}</h2>
        <p class="time">{{details.format_add_time}}</p>
        <!-- 图片轮播 -->
        <yd-slider autoplay="3000" class="initImg">
            <yd-slider-item v-for="(item,index) in details.photos" :key="index">
                <img :src="IMG_PATH + item" alt="图片">
            </yd-slider-item>
        </yd-slider>
        <div class="content initImg" v-html="details.content">
        </div>
        <!-- <init-img ref="initImg"></init-img> -->
    </div>
</template>
<script>
    // 引入图片预览组件
    // import initImg from '@/components/initImg'

    import {
        get_article
    } from '@api/api'
    export default {
        name:'articleDetails',
        data(){
            return {
                IMG_PATH:process.env.VUE_APP_IMG_PATH,
                details:{},
                id:this.$route.query.id
            }
        },
        updated(){
            // 调用图片预览方法
            // this.$refs.initImg.getImgs()
        },
        created(){
            this.get_article()
        },
        mounted(){
            
        },
        components:{
            // initImg,
        },
        methods:{
            get_article(){
                var that = this
                that.$request(3,get_article,{
                    id:that.id
                },res=>{
                    that.details = res.data
                })
            },
            // 用户足迹
            // add_records(){
            //     var that = this;
            //     var param = {}
            //     param.cid = that.id
            //     param.type = 2
            //     param.access_token = window.localStorage.getItem('access_token')
            //     that.$axios.post(add_records,param)
            //     .then(function(res){
            //     //console.log(res)
            //     })
            //     .catch(function(err){
            //     //console.log(err)
            //     })
            // }
        }
    }
</script>
<style scoped>
    .ysp_articleDetails{
        background-color:#FFF;
        padding:2rem;
    }
    .ysp_articleDetails .title{
        font-size:2rem;
        line-height:2.2rem;
        color:#333333;
        font-weight: normal;
        margin-bottom:0.5rem;
    }
    .ysp_articleDetails .time{
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