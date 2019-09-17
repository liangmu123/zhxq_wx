<!-- 学分兑换 -->
<template>
    <div class="ysp_exchangeRecord">
        <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
            <record-list :list="list"></record-list>
        </infinitescroll>
    </div>
</template>
<script>
    import RecordList from "@components/exchange/RecordList"
    import infinitescroll from '@components/infinitescroll'
    export default {
        name:'ysp_exchangeRecord',
        data(){
            return {
                list:[
                    {title:"雨伞",time:"2019-09-01",status:0,src:require("../../assets/images/jifen.png")},
                    {title:"雨伞",time:"2019-09-01",status:1,src:require("../../assets/images/jifen.png")},
                    {title:"雨伞",time:"2019-09-01",status:0,src:require("../../assets/images/jifen.png")},
                    {title:"雨伞",time:"2019-09-01",status:1,src:require("../../assets/images/jifen.png")},
                    {title:"雨伞",time:"2019-09-01",status:0,src:require("../../assets/images/jifen.png")},
                    {title:"雨伞",time:"2019-09-01",status:1,src:require("../../assets/images/jifen.png")}
                ],
                page:1,
                pagesize:10,
                totalpage:1
            }
        },
        created(){
        },
        components:{
            RecordList,
            infinitescroll
        },
        methods:{
            get_list(){
                
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>