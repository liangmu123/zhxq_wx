<!-- 头部纯文字组件 -->
<template>
    <div class="ysp_headerNavTab">
        <ul
        v-if="navlist && navlist.length > 0"
        :class="{'justify_content':navlist.length <= 4,'flex_start':navlist.length > 4}">
            <li v-for="(item,index) in navlist"
            :key="index"
            :class="{active:active == index}"
            @click="handleClick(index,item)">
                <template v-if="item.title">
                    {{item.title}}
                </template>
                <template v-else>
                    {{item.name}}
                </template>
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
        name:'headerNavTab',
        data(){
            return {
                active:0,
            }
        },
        created(){
        },
        methods:{
            handleClick(index,item){
                this.active = index
                this.$emit('handleClick',index,item)
            }
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_headerNavTab{
        width:100%;

        ul{
            width:100%;
            display:flex;
            overflow-x: auto;
            
            li{
                line-height: 4rem;
                padding:0 1rem;
            }
            li.active{
                color:red;
                border-bottom:2px solid red;
            }
        }

        ul.justify_content{
            justify-content: space-between;
            flex:1;
        }

        ul.flex_start{
            justify-content: flex-start;

            li{
                flex-shrink:0;
            }
            li:not(:first-child){
                margin-left:2rem;
            }
        }
    }
</style>