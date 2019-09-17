<!-- 底部导航组件 -->
<template>
    <div id="ysp_container">
        
    </div>
</template>
<script>
    import HighCharts from 'highcharts'
    export default {
        name:'dataCharts',
        data(){
            return {
                option:{},
                data:[],

            }
        },
        created(){
        },
        mounted(){
            
            HighCharts.setOptions({
                colors: ['#0AAC96', '#E86EFF', '#70BBFC', '#FF5454', '#FFAC2E']
            })
        var chart = HighCharts.chart('ysp_container', {
            chart: {
                spacing : [20, 0 , 20, 0]
            },
            title: {
                floating:true,
                text: '<div style="text-align:center;"><span style="color:#333;font-size:24px;">123333</span><br/><span style="color:#999;font-size:16px;">平台访问量</span></div>',
                useHTML:true
            },
            credits: {
                enabled : false
            },
            legend:{
                align: 'right', //水平方向位置
                verticalAlign: 'top', //垂直方向位置
                x: 0, //距离x轴的距离
                y: 0 //距离Y轴的距离
            },
            tooltip: {
                headerFormat:'{}',
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                dataLabels: {
                },
                    allowPointSelect: true,
                    cursor: 'pointer',
                    point: {
                        events: {
                            mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                chart.setTitle({
                                    text:'<div style="text-align:center;"><span>123</span><br/><span>平台访问量</span></div>'+e.target.title,
                                    text:'<div style="text-align:center;"><span style="color:#333;font-size:24px;">'+e.target.y+'%</span><br/><span style="color:#999;font-size:16px;">'+e.target.title+'</span></div>'
                                });
                            },
                            // mouseOut: function(e) {  // 鼠标滑过时动态更新标题
                            //     // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                            //     chart.setTitle({
                            //         text: '<div style="margin-top:-20px;"><span>123</span><br/><span>圆心</span></div>'
                            //     });
                            // },
                            //, 
                            // click: function(e) { // 同样的可以在点击事件里处理
                            //     chart.setTitle({
                            //         text: e.point.name+ '\t'+ e.point.y + ' %'
                            //     });
                            // }
                        }
                    },
                }
            },
            series: [{
                type: 'pie',
                innerSize: '60%',
                name: '平台访问量',
                data: [
                    {name:'20%',y: 20.0,title:"学习强国"},
                    {name:'30%',y: 30.0,title:"党建动态"},
                    {name:'10%',y: 10.0,title:"红色影院"},
                    {name:'20%',y: 20.0,title:"党员之家"},
                    {name:'20%',y: 20.0,title:"视频会议"}
                ]
            }]
            }, function(c) { // 图表初始化完毕后的会掉函数
                // 环形图圆心
                var centerY = c.series[0].center[1],
                    centerX = c.series[0].center[0],
                    titleHeight = parseInt(c.title.styles.fontSize);
                // 动态设置标题位置
                console.log(centerX)
                c.setTitle({
                    y:centerY-10,
                    x:10
                })
            })
        },
        watch:{
        },
        methods:{
        },
    }
</script>
<style lang="scss" scoped>
    
</style>