<!-- 数据分析  标题组件 -->
<template>
    <div class="ysp_list_one">
        <ul>
            <li
            v-for="(item,index) in dataList"
            :key="index">
                <el-row>
                    <el-col :span="12">
                        {{item.title}}
                    </el-col>
                    <el-col :span="12">
                        {{item.num}}
                    </el-col>
                </el-row>
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
        name:'listOne',
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
    .ysp_list_one{
        width:100%;
        padding:1rem 2rem;

        ul{
            li{
                width:100%;
                font-size:2rem;
                color:#333;
                border-bottom:1px solid #eee;

                .el-row{
                    line-height:5rem;

                    .el-col:first-child{
                        text-align-last: justify;
                    }

                    .el-col:last-child{
                        text-align: right;
                    }
                }
            }
        }
    }
</style>