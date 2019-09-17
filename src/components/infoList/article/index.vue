<!-- 图文资讯列表组件 -->
<template>
    <div class="ysp_article">
        <router-link :to="route + '?id=' + details.id">
            <div class="left">
                <ellipsis :index="details.id" :title="details.title"></ellipsis>
                <p v-if="details.add_time">{{details.add_time}}</p>
                <p v-else>{{details.format_start_time}}</p>
            </div>
            <div class="right">
                <img v-if="details.img" :src="IMG_PATH + details.img" alt="缩略图">
                <img v-else :src="IMG_PATH + details.thumb" alt="缩略图">
            </div>
        </router-link>
    </div>
</template>
<script>
    import ellipsis from '../ellipsis'
    export default {
        name:'articleComponent',
        props:{
            details:{
                type:Object
            },
            link:{
                type:String,
                default:'#'
            }
        },
        data(){
            return {
                route:'',
                IMG_PATH:process.env.VUE_APP_IMG_PATH
            }
        },
        components:{
            ellipsis,
        },
        created(){
            if(this.$route.matched[0].path){
                this.route = this.$route.matched[0].path + this.link
            }else{
                this.route = this.link
            }
        },
    }
</script>
<style scoped>
    .ysp_article>a{
        display:flex;
        padding:1rem 0;
        justify-content: space-between;
    }
    .ysp_article .left{
        width:65%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .ysp_article .left p{
        font-size:1.6rem;
        color:#999999;
        line-height:1.6rem;
    }
    .ysp_article .right{
        width:30%;
        height:6rem;
    }
    .ysp_article .right img{
        display:block;
        width:100%;
        height:100%;
        border-radius:5px;
    }
</style>