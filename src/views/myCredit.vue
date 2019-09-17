<!-- 我的积分 -->
<template>
    <div class="myCredit ysp_navigation_bottom">
        <div class="top">
            <img src="../assets/images/jifen.png" alt="积分">
            <div class="credit">
                <span>当前学分</span>
                <span>{{credit}}</span>
            </div>
        </div>
        <section>
            <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                <label-list :dataList="list" tpe="3"></label-list>
            </infinitescroll>
        </section>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} LabelList  标签页组件
     * @param {*} infinitescroll 滚动加载组件
     */
    import infinitescroll from '@components/infinitescroll'
    import LabelList from '@components/LabelList'
    export default {
        name:'myCredit',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1}
                ],
                credit:300
            }
        },
        components:{
            LabelList,
            infinitescroll
        },
        created(){
        },
        methods:{
            get_list(){

            },
        }
    }
</script>
<style lang="scss" scoped>
    .myCredit{
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
        section{
            background-color:#FFF;
        }
    }
</style>