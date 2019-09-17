<!-- 图文混编列表 -->
<template>
    <div class="informationList ysp_navigation_bottom">
        <header-nav-tab class="header_nav_tab" @handleClick="handleClick" :navlist="navlist"></header-nav-tab>
        <section>
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
            </infinitescroll>
        </section>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} headerNavTab  导航条组件
     * @param {*} infoList   图文混编列表组件 tpe区分
     * @param {*} infinitescroll 滚动加载组件
     */
    import headerNavTab from '@components/headerNavTab'
    import infoList from '@components/infoList'
    import infinitescroll from '@components/infinitescroll'

    /**
     * @param {*} get_child_nav 获取子导航
     * @param {*} get_articleList 获取资讯列表
     */
    import {
        get_child_nav,
        get_articleList
    } from '@/api/api'

    export default {
        name:'informationList',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[],
                navlist:[],
                nowActive:0,
                id:this.$route.query.id,
            }
        },
        components:{
            headerNavTab,
            infoList,
            infinitescroll
        },
        created(){
            this.get_child_nav()
        },
        methods:{
            handleClick(index,item){
                this.nowActive = index
                this.page = 1
                this.list = []
                this.get_articleList()
            },
            get_list(){
                this.get_articleList()
            },
            // 获取子导航
            get_child_nav(){
                var that = this
                that.$request(666,get_child_nav,{
                    id:that.id,
                    device:'wx'
                },res=>{
                    if(Object.prototype.toString.call(res.data) != '[object Object]' && res.data.length>0){
                        that.navlist = res.data
                        that.get_articleList()
                    }else{
                        that.navlist = []
                        that.get_articleList(that.id)
                    }
                })
            },
            // 获取列表
            get_articleList(id){
                var that = this
                that.$request(888,get_articleList,{
                    cid:id || that.navlist[that.nowActive].data_id,
                    device:'wx',
                    page:that.page,
                    pagesize:that.pagesize
                },res=>{
                    that.list = [...that.list, ...res.data.items]
                    that.totalpage = res.data.totalpage
                    that.page ++
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .informationList{
        background-color:#FFF;
        min-height: 100%;
        .header_nav_tab{
            padding:0 1rem;
        }
        section{
            padding:1rem 2rem;
        }
    }
</style>