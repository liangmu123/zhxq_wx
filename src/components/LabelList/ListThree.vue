<!-- 个人中心  我的积分 -->
<template>
    <div class="ysp_list_three">
        <ul>
            <li
            v-for="(item,index) in dataList"
            :key="index">
                <div class="left">
                    <div class="flex">
                        <img src="../../assets/images/live.png" alt="图片">
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
        name:'listThree',
        data(){
            return {

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
    .ysp_list_three{
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
                    width:70%;
                    .flex{
                        display:flex;
                        justify-content: flex-start;
                        align-items: center;
                        color:#606060;
                        >img{
                            display:block;
                            width:2rem;
                            margin-right:1rem;
                        }
                    }
                }

                .right{
                    width:30%;
                    text-align: right;
                    color:#FF6E4A;
                }
            }
        }
    }
</style>