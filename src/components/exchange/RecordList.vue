<!-- 学分兑换列表 -->
<template>
    <div class="ysp_recordList">
        <el-row :gutter="10" @click.native="handleClick($event)">
            <el-col :span="24" v-for="(item,index) in list" :key="index">
                <el-row class="exchange">
                    <el-col :span="14">
                        <ul class="flex">
                            <li>{{item.title}}</li>
                            <li>{{item.time}}</li>
                            <li v-if="item.status === 0" class="not">未领取</li>
                            <li v-else class="has">已领取</li>
                        </ul>
                    </el-col>
                    <el-col :span="10">
                        <img :src="item.src" alt="图片">
                    </el-col>
                </el-row>
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
        name:'ysp_recordList',
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
    .ysp_recordList{
        padding:2rem;
        background-color:#FFF;

        .exchange{
            width:100%;
            background-color:#FFF;
            padding:1rem;
            border-bottom:1px solid #E6E6E6;

            .flex{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height:8rem;

                li:first-child{
                    font-size:2rem;
                }
                li:nth-child(2){
                    font-size:1.6rem;
                    color:#999;
                }
                .not{
                    border:1px solid #FF8800;
                    color:#FF8800;
                    text-align: center;
                    line-height:2rem;
                    border-radius:5px;
                    width:50%;
                }
                .has{
                    border:1px solid #09852A;
                    color:#09852A;
                    text-align: center;
                    line-height:2rem;
                    border-radius:5px;
                    width:50%;
                }
            }

            img{
                width:100%;
                height:8rem;
                display:block;
            }
        }
    }
</style>