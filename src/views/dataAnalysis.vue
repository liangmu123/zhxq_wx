<!-- 数据分析 -->
<template>
    <div id="dataAnalysis" class="ysp_navigation_bottom">
        <div class="top">
            <h1>袁甸村</h1>
            <div class="radio">
                <el-radio-group v-model="nowActive" size="medium" :fill="color">
                    <el-radio-button v-for="(item,index) in radioList" :key="index" :label="item.title" :value="item.value"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="charts">
                <data-charts></data-charts>
            </div>
            <title-tab :navlist="navlist"></title-tab>
        </div>
        <div class="bottom">
            <label-list :dataList="dataList" tpe="1"></label-list>
        </div>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} TitleTab  标题组件
     * @param {*} ListOne   数据展示组件
     * @param {*} infinitescroll 滚动加载组件
     */
    import TitleTab from '@components/littleComponents/TitleTab'
    import LabelList from '@components/LabelList'
    import DataCharts from '@components/DataCharts'
    export default {
        name:'dataAnalysis',
        data(){
            return {
                nowActive:"年份",
                color:'#5FBB66',
                radioList:[
                    {title:"年份",value:1},
                    {title:"月份",value:2},
                    {title:"周",value:3},
                    {title:"天",value:4}
                ],
                navlist:[
                    {title:"学习强国",color:"#0AAC96"},
                    {title:"党建动态",color:"#E86EFF"},
                    {title:"红色影院",color:"#70BBFC"},
                    {title:"党员之家",color:"#FF5454"},
                    {title:"视频会议",color:"#FFAC2E"}
                ],
                dataList:[
                    {title:"党员人数：",num:667},
                    {title:"微信端覆盖党员：",num:667},
                    {title:"电视端覆盖党员：",num:667},
                    {title:"观看视频人数：",num:667},
                    {title:"观看视频时长：",num:667},
                    {title:"参与活动人数：",num:667}
                ]
            }
        },
        components:{
            TitleTab,
            LabelList,
            DataCharts
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style lang="scss" scoped>
    #dataAnalysis{
        .top{
            background-color:#FFF;
            padding-bottom:2rem;

            h1{
                font-weight:normal;
                color:#333;
                text-align: center;
                line-height:5rem;
                font-size:2rem;
            }
            .radio{
                text-align: center;
            }
            .charts{
                padding:0 2rem;
            }
        }
    }
</style>