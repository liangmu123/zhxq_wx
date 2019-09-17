<!-- 数据分析  标题组件 -->
<template>
    <div class="ysp_titleTab">
        <ul>
            <li
            v-for="(item,index) in navlist"
            :key="index">
                <span class="square" :style="{backgroundColor:item.color}"></span>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            navlist:{
                type:Array
            }
        },
        name:'titleTab',
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
    .ysp_titleTab{
        padding:0 2rem;
        ul{
            display:flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                display:flex;
                justify-content: flex-start;
                align-items:center;
                font-size:1.4rem;
                color:#333;

                span.square{
                    width:10px;
                    height:10px;
                    display:block;
                    margin-right:3px;
                }
            }
        }
    }
</style>