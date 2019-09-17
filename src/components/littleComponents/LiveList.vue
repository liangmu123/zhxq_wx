<!-- 直播组件 -->
<template>
    <div class="ysp_liveList">
        <el-row :gutter="20">
            <el-col :span="12" v-for="(item,index) in dataList" :key="index">
                <router-link to="#">
                    <ul>
                        <li>
                            <img src="../../assets/center/top.png" alt="图片">
                        </li>
                        <li>
                            {{item.title}}
                        </li>
                    </ul>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        props:{
            dataList:{
                type:Array
            }
        },
        name:'liveList',
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
    .ysp_liveList{
        
        a{
            width:100%;
            display:block;

            ul{
                width:100%;
                border-radius:5px;
                overflow: hidden;
                background-color:#FFF;
                box-shadow: 2px 0 5px #CCC;
                margin-bottom:2rem;

                li{
                    width:100%;
                    text-align: center;

                    >img{
                        display:block;
                        width:100%;
                        height:8rem;
                    }
                }
                li:last-child{
                    line-height:3rem;
                }
            }
        }
    }
</style>