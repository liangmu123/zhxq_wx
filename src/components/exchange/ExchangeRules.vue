<!-- 学分兑换 -->
<template>
    <div class="ysp_exchangeRules">
        <h2>如何获得积分</h2>
        <p>
            登录电视平台、每日点赞等操作都可以获取积分。
            获得的积分可以在文明超市中兑换礼品。具体的积分规则及获得方式如下：
        </p>
        <h2>每日登录电视平台</h2>
        <ul>
            <li>
                连续登录电视平台第1天 - 第5天：每日领取积分+3
            </li>
            <li>
                连续登录电视平台5天：额外获得15积分
            </li>
            <li>
                连续登录电视平台第6天 - 第30天：每日登录积分+5
            </li>
            <li>
                连续登录电视平台10天：额外获得20积分奖励
            </li>
            <li>
                连续登录电视平台20天：额外获得50积分奖励
            </li>
            <li>
                连续登录电视平台30天：额外获得100积分奖励
            </li>
            <li>
                连续登录电视平台第31天及以上：每日登录积分+10
            </li>
            <li>
                连续登录电视平台31天后每连续登录15天：额外100积分奖励
            </li>
        </ul>
        <p>
            当登录电视平台中断后，则每日领取积分回到初始状态，重新累计连续登录天数；
        </p>
        <h2>每日学习</h2>
        <ul>
            <li>
                每天点击资讯，浏览学习10分钟以上：每日可领取积分+5
            </li>
            <li>
                每日观看一个视频，可领取积分+5，每日上限30积分奖励
            </li>
            <li>
                每日观看一个图文资讯，可领取积分+5，每日上限30积分奖励
            </li>
            <li>
                每日点赞一次，可领取积分+5，每日上限20积分奖励
            </li>
            <!-- <li>
                每完整观看完一部电影，可获得积分+15，每日最多1次
            </li>
            <li>
                每完整观看完一本图书，可获得积分+25，每日最多1次
            </li> -->
            <li>
                每报名完成一次志愿服务，可获得积分+30
            </li>
        </ul>
        <h2>其他操作</h2>
        <ul>
            <li>
                新用户首次登录平台：赠送30积分
            </li>
            <li>
                首次在文明超市兑换礼品：赠送20积分
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'ysp_exchangeRules',
        data(){
            return {
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_exchangeRules{
        padding:1rem 2rem 2rem 2rem;
        background-color:#FFF;
    }
    h2{
        font-size:1.8rem;
        border-left:5px solid red;
        padding-left:1rem;
        margin:1rem 0;
    }
    ul{
        padding-left:1.5rem;
    }
    li,p{
        font-size:1.6rem;
        line-height:2.4rem;
        text-align: justify;
    }
    li{
        list-style:disc;
    }
</style>