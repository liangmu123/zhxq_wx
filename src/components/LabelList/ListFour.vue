<!-- 个人中心  我的积分 -->
<template>
    <div class="ysp_list_four">
        <ul>
            <li
            v-for="(item,index) in dataList"
            :key="index">
                <div class="left">
                    <div class="flex">
                        <span>
                            <template v-if="index <= 2">
                                <img :src="rankSrc[index]" alt="图片">
                            </template>
                            <template v-else>
                                {{index+1}}
                            </template>
                        </span>
                        <img src="../../assets/center/live.png" alt="图片">
                        <span>{{item.title}}shjdsd的思考角度看手机打开</span>
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
        name:'listFour',
        data(){
            return {
                rankSrc:[
                    require("../../assets/rank/1.png"),
                    require("../../assets/rank/2.png"),
                    require("../../assets/rank/3.png"),
                ]
            }
        },
        created(){
        },
        methods:{
            // handleClick(index,item){
            //     this.active = index
            //     this.$emit('handleClick',index,item)
            // }
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_list_four{
        width:100%;
        padding:1rem 2rem;

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
                    width:60%;
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
                    width:40%;
                    text-align: right;
                }
            }
        }
    }
</style>