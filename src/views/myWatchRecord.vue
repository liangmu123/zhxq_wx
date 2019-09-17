<!-- 我的观看记录 -->
<template>
    <div class="myWatchRecord ysp_navigation_bottom">
        <section v-if="list.length > 0">
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <infoList v-for="(item,index) in list" :key="index" :details="item"></infoList>
            </infinitescroll>
        </section>
    </div>
</template>
<script>
    /**
     * @param {*} infoList   图文混编列表组件 tpe区分
     * @param {*} infinitescroll 滚动加载组件
     */
    import infoList from '@components/infoList'
    import infinitescroll from '@components/infinitescroll'
    export default {
        name:'myWatchRecord',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:1,id:1},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:2,id:2},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/navigation/center.png'),tpe:3,id:3}
                ]
            }
        },
        components:{
            infoList,
            infinitescroll
        },
        created(){
        },
        methods:{
            get_list(){

            },
        },
    }
</script>
<style scoped>
    .myWatchRecord{
        min-height:100%;
        padding:2rem;
        background-color:#FFF;
    }
</style>