<!-- 学分兑换列表 -->
<template>
    <div class="ysp_exchangeList">
        <el-row :gutter="10" @click.native="handleClick($event)">
            <el-col :span="8" v-for="(item,index) in list" :key="index">
                <div class="exchange" :class="{bg:item.isCanExchange}" :data-id="index">
                    <img :src="item.src" alt="图片">
                    <p class="textoverflow">{{item.title}}</p>
                    <p>
                        <img src="../../assets/images/num.png" alt="图片">
                        <span>{{item.need}}</span>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    
    export default {
        props:{
            list:{
                type:Array
            }
        },
        name:'ysp_exchangeList',
        data(){
            return {
            }
        },
        created(){
        },
        methods:{
            handleClick(e){
                let id = "";
                for(let item of e.path){
                    if(item.className.indexOf('exchange') != -1){
                        id = item.getAttribute("data-id")
                        break;
                    }
                }
                if(id === ""){
                    console.error("用法错误")
                }else{
                    this.$emit('showMessageBox',id)
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_exchangeList{
        padding:2rem;
        background-color:#FFF;

        .exchange{
            width:100%;
            background-color:#FFF;
            box-shadow: 1px 1px 8px #CCC;
            margin-bottom:1rem;
            border-radius:8px;
            overflow: hidden;
            padding:2rem 0 1rem 0;

            >img{
                width:100%;
                height:6rem;
            }
            >p:nth-child(2){
                line-height:2rem;
                text-align:center;
                margin-bottom:1rem;
            }
            >p:last-child{
                display:flex;
                justify-content: center;
                align-items: center;
                color:#FF6D4A;

                >img{
                    margin-right:10px;
                }
            }
        }
        .exchange.bg{
            background-image:url(../../assets/images/kuang.png);
            background-size:100% 100%;
        }
    }
</style>