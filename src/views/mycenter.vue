<!-- 个人中心 -->
<template>
    <div class="center ysp_navigation_bottom">
        <div class="header">
            <img src="../assets/images/top.png" alt="背景图">
            <div class="protrait">
                <div>
                    <img src="../assets/images/live.png" alt="头像">
                </div>
                <div>123</div>
            </div>
        </div>
        <div class="nav">
            <label-list :dataList="navlist" tpe="2"></label-list>
        </div>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} LabelList  标签页组件
     */
    import LabelList from '@components/LabelList'
    export default {
        name:'center',
        data(){
            return {
                navlist:[
                    {
                        title:'我的积分',
                        src:require('../assets/images/live.png'),
                        link:'/center/myCredit'
                    },
                    {
                        title:'我的排行',
                        src:require('../assets/images/live.png'),
                        link:'/center/myRank'
                    },
                    {
                        title:'我的观看记录',
                        src:require('../assets/images/live.png'),
                        link:'/center/myWatchRecord'
                    }
                ],
            }
        },
        components:{
            LabelList
        },
    }
</script>
<style scoped>
    .header{
        position:relative;
        margin-bottom:1rem;
    }
    .header>img{
        width:100%;
        display:block;
    }
    .header .protrait{
        position:absolute;
        top:60%;
        left:50%;
        z-index:999;
        transform: translate(-50%,-50%);
    }
    .header .protrait div:first-child{
        width:5rem;
        height:5rem;
        margin:0 auto;
        border-radius: 50px;
        margin-bottom:0.5rem;
    }
    .header .protrait div:last-child{
        text-align: center;
        font-size:1.6rem;
    }
    .header .protrait div:first-child img{
        width:100%;
        height:100%;
        border-radius: 50px;
    }
</style>