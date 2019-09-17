<!-- 党员基本信息 -->
<template>
    <div class="ysp_list_five">
        <ul>
            <li
            v-for="(item,index) in dataList"
            :key="index">
                <div class="left">
                    <div class="flex">
                        <img src="../../assets/images/live.png" alt="图片">
                        <span>{{item.title}}</span>
                    </div>
                </div>
                <div class="right">
                    {{item.num}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            dataList:{
                type:Array
            }
        },
        name:'listFive',
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
    .ysp_list_five{
        width:100%;

        ul{
            li{
                width:100%;
                font-size:1.8rem;
                color:#333;
                border-bottom:1px solid #eee;
                padding:1rem 0;
                line-height:2.4rem;
                display:flex;
                justify-content: flex-start;
                align-items: center;

                .left{
                    width:50%;
                    .flex{
                        display:flex;
                        justify-content: flex-start;
                        align-items: center;
                        color:#606060;
                        >img{
                            display:block;
                            width:5rem;
                            height:5rem;
                            margin-right:1rem;
                        }
                        >span:first-child{
                            width:8rem;
                            display:block;
                            text-align: center;
                            color:#FEA859;
                            font-size:2rem;
                            margin-right:1rem;

                            img{
                                display:block;
                                width:80%;
                                margin:0 auto;
                            }
                        }
                    }
                }

                .right{
                    width:50%;
                    text-align: right;
                }
            }
        }
    }
</style>