<!-- 首页 -->
<template>
    <div id="dashboard" class="ysp_navigation_bottom">
        <yd-slider autoplay="3000" class="header">
            <yd-slider-item v-for="(item,index) in adList" :key="index">
                <img :src="IMG_PATH + item.image">
            </yd-slider-item>
        </yd-slider>
        <!-- 首页导航条 -->
        <navtab class="nav_tab_padding" :navlist="navlist"></navtab>

        <!-- 首页显示 -->
        <section v-if="list.length > 0">
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
            </infinitescroll>
        </section>
        
    </div>
</template>
<script>
    /**
     * 
     * @param {*} navtab  导航条组件
     * @param {*} infoList   图文混编列表组件 tpe区分
     * @param {*} infinitescroll 滚动加载组件
     */
    import navtab from '@components/navtab'
    import infoList from '@components/infoList'
    import infinitescroll from '@components/infinitescroll'

    /**
     * 
     * @param {*} getbroadcast 获取一级广告位
     * @param {*} get_article_index 获取首页显示
     */
    import {
        getbroadcast,
        get_article_index
    } from '@/api/api'

    export default {
        name:'dashboard',
        data(){
            return {
                navlist:[
                    {id:1,title:'党建动态',link:'/informationList1',src:require('@assets/images/1.png')},
                    {id:1111,title:'党员之家',link:'/threeModular',src:require('@assets/images/2.png')},
                    {id:47,title:'学习强国',link:'/informationList2',src:require('@assets/images/3.png')},
                    {id:8,title:'红色电影',link:'/informationList3',src:require('@assets/images/4.png')},
                    {id:9,title:'会议直播',link:'/live',src:require('@assets/images/5.png')}
                ],
                page:1,
                pagesize:10,
                totalpage:1,
                list:[],
                //广告数组
                adList:[],
                IMG_PATH:process.env.VUE_APP_IMG_PATH
            }
        },
        components:{
            navtab,
            infoList,
            infinitescroll
        },
        created(){
            this.getAd()
            this.get_article_index()
        },
        methods:{
            get_list(){
                this.get_article_index()
            },
            // 获取广告位
            getAd(){
                var that = this
                that.$request(1,getbroadcast,{
                    position:10001
                },res=>{
                    that.adList = res.data
                })
            },
            // 获取首页显示
            get_article_index(){
                var that = this
                that.$request(999,get_article_index,{
                    pagesize:that.pagesize
                },res=>{
                    that.list = [...that.list, ...res.data.items]
                    that.totalpage = res.data.totalpage
                    that.page ++
                })
            }
        },
    }
</script>
<style lang="scss" scoped>
    .header img{
        width:100%;
    }
    .nav_tab_padding{
        padding:1rem;
        background-color: #FFF;
        margin-bottom:1rem;
    }
    section{
        padding:1rem;
        background-color: #FFF;
    }
</style>