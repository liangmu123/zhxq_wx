<!-- 我的排行 -->
<template>
    <div class="myRank">
        <div class="bg"></div>
        <section class="ysp_navigation_bottom">
            <div class="top">
                <ul>
                    <li>
                        <span>7</span>
                        <span>名次</span>
                    </li>
                    <li>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            呵呵哒
                        </span>
                    </li>
                    <li>
                        <span>256</span>
                        <span>学分</span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <h1>排行榜</h1>
                <infinitescroll @loadData="get_list" :page="page" :pagesize="pagesize" :totalpage="totalpage" :list="list">
                    <label-list :dataList="list" tpe="4"></label-list>
                </infinitescroll>
            </div>
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
        name:'myRank',
        data(){
            return {
                page:1,
                pagesize:10,
                totalpage:1,
                list:[
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
                    {title:'123',num:123,id:1},
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
    .myRank{
        position:relative;
        
        .bg{
            position:fixed;
            width:100%;
            height:calc(100% - 5rem);
            border:10px solid red;
            z-index:10;
        }

        section{
            position:relative;
            z-index:20;
            .content{
                width:90%;
                margin:0 auto;
                background-color:#FFF;
                border-radius:10px;

                h1{
                    padding:2rem 2rem 0 2rem;
                    font-weight:normal;
                    font-size:2rem;
                }
            }
        }
    }
</style>