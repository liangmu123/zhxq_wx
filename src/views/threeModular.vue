<template>
    <div class="threeModular ysp_navigation_bottom">
        <header-nav-tab class="header_nav_tab" @handleClick="handleClick" :navlist="navlist"></header-nav-tab>
        <section v-if="this.nowActive == 0">
            123
        </section>
        <section v-else-if="this.nowActive == 1">
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
            </infinitescroll>
        </section>
        <section v-else>
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <label-list :dataList="list" tpe="5"></label-list>
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
     * @param {*} LabelList  标签页组件
     */
    import headerNavTab from '@components/headerNavTab'
    import infoList from '@components/infoList'
    import infinitescroll from '@components/infinitescroll'
    import LabelList from '@components/LabelList'
    export default {
        name:'threeModular',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:1,id:1},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:2,id:2},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:3,id:3}
                ],
                navlist:[
                    {title:'基层党建'},
                    {title:'通知公告'},
                    {title:'党员基本信息'}
                ],
                nowActive:0
            }
        },
        components:{
            headerNavTab,
            infoList,
            infinitescroll,
            LabelList
        },
        created(){
        },
        methods:{
            handleClick(index,item){
                this.nowActive = index
            },
            get_list(){

            }
        }
    }
</script>
<style lang="scss" scoped>
    .threeModular{
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
