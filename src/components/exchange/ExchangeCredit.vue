<!-- 学分兑换 -->
<template>
    <div class="ysp_exchangeCredit">
        <div class="top">
            <img src="../../assets/exchange/jifen.png" alt="积分">
            <div class="credit">
                <span>当前学分</span>
                <span>{{credit}}</span>
            </div>
        </div>
        <div class="middle">
            <p>
                <span>1.</span>
                <span>积累100分可至积分商城兑换雨伞一把；</span>
            </p>
            <p>
                <span>2.</span>
                <span>300分兑换畅享包（超级视频或华数任选之一、20兆宽带）
                免费开通一个月，</span>
            </p>
            <p>
                <span>3.</span>
                <span>600分兑换尊享包（超级视频、华数、50兆宽带）免费开
                通一个月。</span>
            </p>
        </div>
        <div class="bottom">
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <exchange-list @showMessageBox="showMessageBox" :list="list"></exchange-list>
            </infinitescroll>
        </div>
        <message-box @closeMessageBox="closeMessageBox" :isShowMessageBox="isShow"></message-box>
    </div>
</template>
<script>
    import ExchangeList from "@components/exchange/ExchangeList"
    import infinitescroll from '@components/infinitescroll'
    import MessageBox from "@components/MessageBox"
    export default {
        name:'ysp_exchangeCredit',
        data(){
            return {
                dataList:[
                    {title:"雨伞",need:100,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:100,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:400,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:100,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:300,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:200,src:require("../../assets/exchange/jifen.png")},
                    {title:"雨伞",need:600,src:require("../../assets/exchange/jifen.png")}
                ],
                credit:300,
                page:1,
                pagesize:10,
                totalpage:1,
                isShow:false
            }
        },
        created(){
        },
        computed:{
            list(){
                var arr = []
                var obj = {}
                for(let item of this.dataList){
                    obj = item
                    obj.isCanExchange = item.need >= this.credit ? false : true
                    arr.push(obj)
                }
                //console.log(arr)
                return arr
            },
        },
        components:{
            ExchangeList,
            infinitescroll,
            MessageBox
        },
        methods:{
            get_list(){

            },
            showMessageBox(id){
                this.isShow = true
            },
            closeMessageBox(){
                this.isShow = false
            }
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_exchangeCredit{
        .top{
            position:relative;
            margin-bottom:1rem;

            img{
                display:block;
                width:100%;
            }
            .credit{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                color:#FFF;
                font-size:5rem;

                span{
                    display:block;
                    text-align: center;
                }
                span:first-child{
                    font-size:1.6rem;
                }
            }
        }
        .middle{
            background-color:#FFF;
            padding:2rem;
            margin-bottom:1rem;

            p{
                display:flex;
                color:#666;

                span{
                    line-height:2.4rem;
                }
            }
        }
    }
</style>