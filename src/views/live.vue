<!-- 栏目混编列表 -->
<template>
    <div class="live ysp_navigation_bottom">
        <section>
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <live-list :dataList="list"></live-list>
            </infinitescroll>
        </section>
    </div>
</template>
<script>
    /**
     * @param {*} liveList
     * @param {*} infinitescroll 滚动加载组件
     */
    import LiveList from '@components/littleComponents/LiveList'
    import infinitescroll from '@components/infinitescroll'

    export default {
        name:'live',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[
                    {title:'123',add_time:'2019-8-9',img:require('@assets/images/center.png'),tpe:1,id:1},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/images/center.png'),tpe:2,id:2},
                    {title:'123',add_time:'2019-8-9',img:require('@assets/images/center.png'),tpe:3,id:3}
                ]
            }
        },
        components:{
            LiveList,
            infinitescroll
        },
        created(){
        },
        methods:{
            get_list(){

            }
        }
    }
</script>
<style lang="scss" scoped>
    .live{
        min-height:100%;
        background-color:#FFF;
        padding:2rem;
    }
</style>